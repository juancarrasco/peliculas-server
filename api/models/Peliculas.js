/**
 * Peliculas.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    titulo: { type: 'string' },
    sinopsis: { type: 'string' },
    trailer_url: { type: 'string' },
    image: { type: 'string' },
    rated: { type: 'string' },
    genero: { type: 'string' }
  }
};
