import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCards1732046232136 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: 'cards',
                columns: [
                    {
                      name: 'name',
                      type: 'varchar',
                      length: '255',
                      isNullable: false,
                    },
                    {
                        name: 'raca',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                    {
                        name: 'classe',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                      {
                        name: 'nivel',
                        type: 'varchar',
                        length: '255',
                        isNullable: true,
                      },
                      {
                        name: 'status',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                      {
                        name: 'modificador',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                      {
                        name: 'habilidades',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                      {
                        name: 'itens',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                      {
                        name: 'danos',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                ]
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('cards')
    }

}
