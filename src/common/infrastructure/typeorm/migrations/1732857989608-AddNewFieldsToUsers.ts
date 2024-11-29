import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddNewFieldsToUsers1732857989608 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn(
            'users', // Nome da tabela
            new TableColumn( {
                name: 'created_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
              },
            )
          );
      
          await queryRunner.addColumn(
            'users',
            new TableColumn( {
                name: 'updated_at',
                type: 'timestamp',
                default: 'CURRENT_TIMESTAMP',
              },
            )
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.dropColumn('users', 'created_at');
         await queryRunner.dropColumn('users', 'updated_at');
    }

}
