/**
 * Commande.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    id: { type: 'number', columnName: 'id', autoIncrement: true },
    name: { type: 'string', columnName: 'name', required: true },
    number: { type: 'string', columnName: 'number' }
  },
  customToJSON: function () {
    return _.omit(this, ['createdAt', 'updatedAt'])
  }
};