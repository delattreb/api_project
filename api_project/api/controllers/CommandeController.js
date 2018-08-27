/**
 * CommandeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    create: function (req, res) { return res.send('Create a list'); },
    list: function (req, res) { return res.send('Got a list'); },
    fulllist: function (req, res) { return res.send('Got a full list'); }
};

