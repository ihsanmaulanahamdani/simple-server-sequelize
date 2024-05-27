// Models
const { Store, User } = require("../models");

// Helpers
const statusMessage = require("../helpers/status.message");

module.exports = {
  createStore: async (req, res) => {
    try {
      const payload = req.body;

      const store = await Store.create(payload);

      statusMessage(res, 201, true, "Store created!", store);
    } catch (error) {
      statusMessage(res, 500, false, error.message);
    }
  },
  deleteStore: async (req, res) => {
    try {
      const id = req.params.id;

      const store = await Store.destroy({ where: { id } });

      statusMessage(res, 201, true, "Delete store successfull!", store);
    } catch (error) {
      statusMessage(res, 500, false, error.message);
    }
  },
};