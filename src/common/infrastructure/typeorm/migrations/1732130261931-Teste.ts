import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Teste1732130261931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(
            new Table({
                name: "tests",
                columns: []
            }
           )
           )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('tests')

    }

}
