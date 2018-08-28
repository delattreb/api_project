/**
 * CommandeController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    //create: function (req, res) { return res.send('Create a list'); },
    list: async function (req, res) { return res.send(await sails.helpers.formatWelcomeMessage('Got a list')); },
    fulllist: function (req, res) { return res.send('Got a full list'); },

    getcmdbynumber: async function (req, res) {
        let number = req.param('number');
        let user = await Commande.findOne({ number: number });
        if (!user)
            return res.json(500, { error: 'Command not found with number: ' + number });
        else
            return res.json(user);
    },
};