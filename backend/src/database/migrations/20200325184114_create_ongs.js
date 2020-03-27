
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) { //Responsavel pela criação da tabela.
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); //Utilizado para quando der algum problema, ele deleta a tabela.
};
