const stickers = require("../stickers");

exports.seed = function (knex) {
  return knex("sticker")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("sticker").insert(stickers);
    });
};
