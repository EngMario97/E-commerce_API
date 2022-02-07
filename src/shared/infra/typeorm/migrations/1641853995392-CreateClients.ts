import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateClients1641853995392 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "clientes",
        columns: [
          {
            name: "id",
            type: "int",
            isGenerated: true,
            isPrimary: true,
            generationStrategy: "increment",
          },
          {
            name: "nome",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "cpf",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "email",
            type: "varchar",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "telefone",
            type: "varchar",
            length: "20",
            isNullable: false,
            isUnique: true,
          },
          {
            name: "data_nascimento",
            type: "varchar",
            length: "150",
            isNullable: false,
          },
          {
            name: "created_at",
            type: "timestamp",
            default: "now()",
          },
          {
            name: "updated_at",
            type: "timestamp",
            default: "now()",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("clientes");
  }
}
