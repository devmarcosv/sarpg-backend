import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCharacters1732900993566 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table( {
                name: 'characters',
                columns: [
                    {
                        name: 'id', 
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'session_id',
                        type: 'uuid'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
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
                        name: 'pontos_de_vida',
                        type: 'varchar',
                        length: '255',
                        isNullable: false,
                      },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'CURRENT_TIMESTAMP'
                    }
                ]
            })
        )

        await queryRunner.createForeignKey(
            'characters',
            new TableForeignKey({
              columnNames: ['session_id'],
              referencedColumnNames: ['id'], // Assume que o Mestre está na tabela 'usuarios'
              referencedTableName: 'sessions',
              onDelete: 'CASCADE',
            }),
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('characters');
        const foreignKey = table?.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('session_id') !== -1,
        );
        if (foreignKey) {
          await queryRunner.dropForeignKey('characters', foreignKey);
        }
        await queryRunner.dropTable('characters');
      }
    }


