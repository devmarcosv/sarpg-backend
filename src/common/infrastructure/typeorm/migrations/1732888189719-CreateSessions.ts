import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateSessions1732888189719 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table( {
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
                        name: 'user_id',
                        type: 'uuid'
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
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
            'sessions',
            new TableForeignKey({
              columnNames: ['user_id'],
              referencedColumnNames: ['id'], // Assume que o Mestre está na tabela 'usuarios'
              referencedTableName: 'users',
              onDelete: 'CASCADE',
            }),
          );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable('sessions');
        const foreignKey = table?.foreignKeys.find(
          (fk) => fk.columnNames.indexOf('user_id') !== -1,
        );
        if (foreignKey) {
          await queryRunner.dropForeignKey('sessions', foreignKey);
        }
        await queryRunner.dropTable('sessions');
      }
    }

