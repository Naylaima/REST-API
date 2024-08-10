const Inventory = require('../models/inventoryModel');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Inventory.getAll();
        if (items.length === 0) {
            res.send({ success: true, statuscode: 200, message: 'No items found.', items });
        } else {
            res.send({ success: true, statuscode: 200, message: 'Items found.', items });
        }
    } catch (error) {
        res.status(500).send({ success: false, statuscode: 500, error: 'An error occurred while fetching items.' });
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Inventory.getById(req.params.id);
        if (!item) {
            return res.status(404).send({ success: false, statuscode: 404, error: 'Item not found.' });
        }
        res.send({ success: true, statuscode: 200, message: 'Item found.', item });
    } catch (error) {
        res.status(500).send({ success: false, statuscode: 500, error: 'An error occurred while fetching the item.' });
    }
};

exports.createItem = async (req, res) => {
    try {
        const item = await Inventory.create(req.body);
        res.send({ success: true, statuscode: 200, message: 'Item created successfully.', item });
    } catch (error) {
        res.status(500).send({ success: false, statuscode: 500, error: 'An error occurred while creating the item.' });
    }
};

exports.updateItem = async (req, res) => {
    try {
        const item = await Inventory.update(req.params.id, req.body);
        if (!item) {
            return res.status(404).send({ success: false, error: 'Item not found.' });
        }
        res.send({ success: true, statuscode: 200, message: 'Item updated successfully.', item });
    } catch (error) {
        res.status(500).send({ success: false, error: 'An error occurred while updating the item.' });
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Inventory.getById(req.params.id);
        if (!item) {
            return res.status(404).send({ success: false, statuscode: 404, error: 'Item not found.' });
        }
        await Inventory.delete(req.params.id);
        res.send({ success: true, statuscode: 200, message: 'Item deleted successfully.' });
    } catch (error) {
        res.status(500).send({ success: false, statuscode: 500, error: 'An error occurred while deleting the item.' });
    }
};
