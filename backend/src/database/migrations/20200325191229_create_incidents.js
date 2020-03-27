
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) { //Responsavel pela criação da tabela.
        table.increments();//Adiciona um número a cada registro, automaticamente.
        
        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        table.string('ong_id').notNullable();//Irá guardar o registro da id da ONG.

        table.foreign('ong_id').references('id').inTable('ongs');//Faz a referencia entre as tabelas.
    });
};
    

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};
