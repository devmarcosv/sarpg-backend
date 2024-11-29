import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSessions1732830137229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

        await queryRunner.createTable(
            new Table({
              name: 'sessions',
              columns: [
                {
                    name: 'id', 
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()'
                },
                {
                  name: 'mestre_id',
                  type: 'uuid',
                  isNullable: false,
                },
                {
                  name: 'nome',
                  type: 'varchar',
                  length: '255',
                  isNullable: false,
                },
                {
                  name: 'data_inicio',
                  type: 'timestamp',
                  isNullable: false,
                },
                {
                  name: 'data_fim',
                  type: 'timestamp',
                  isNullable: true,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                  },
                  {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                  },
              ],
            }),
          );

          await queryRunner.createForeignKey(
            'sessions',
            new TableForeignKey({
              columnNames: ['mestre_id'],
              referencedColumnNames: ['id'], // Assume que o Mestre está na tabela 'usuarios'
              referencedTableName: 'users',
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('sessao');
        const foreignKey = table?.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('mestre_id') !== -1,
        );
        if (foreignKey) {
          await queryRunner.dropForeignKey('sessions', foreignKey);
        }
        await queryRunner.dropTable('sessions');
    }

}
