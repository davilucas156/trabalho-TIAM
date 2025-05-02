using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ApiQUIZZ.Migrations
{
    /// <inheritdoc />
    public partial class mydb : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "QUIZZES",
                columns: table => new
                {
                    ID_QUIZZES = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TITULO = table.Column<string>(type: "varchar(45)", unicode: false, maxLength: 45, nullable: false),
                    DAT_CRIACAO = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__QUIZZES__5F6DBDB5A0DDBF18", x => x.ID_QUIZZES);
                });

            migrationBuilder.CreateTable(
                name: "USUARIO",
                columns: table => new
                {
                    ID_USUARIO = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    NOME = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    EMAIL = table.Column<string>(type: "varchar(100)", unicode: false, maxLength: 100, nullable: false),
                    SENHA = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    TIPO = table.Column<string>(type: "char(1)", unicode: false, fixedLength: true, maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__USUARIO__91136B90ECA3AD26", x => x.ID_USUARIO);
                });

            migrationBuilder.CreateTable(
                name: "PERGUNTAS",
                columns: table => new
                {
                    ID_PERG = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_QUIZ = table.Column<int>(type: "int", nullable: false),
                    ENUNCIADO = table.Column<string>(type: "text", nullable: false),
                    IMG = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: true),
                    PONTOS = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    TIPO = table.Column<string>(type: "char(1)", unicode: false, fixedLength: true, maxLength: 1, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__PERGUNTA__BD9558F4358A7E21", x => x.ID_PERG);
                    table.ForeignKey(
                        name: "FK_PERGUNTAS_QUIZZES",
                        column: x => x.ID_QUIZ,
                        principalTable: "QUIZZES",
                        principalColumn: "ID_QUIZZES",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "NOTAS",
                columns: table => new
                {
                    ID_NOTA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_QUIZZES = table.Column<int>(type: "int", nullable: false),
                    ID_USUARIO = table.Column<int>(type: "int", nullable: false),
                    VALOR = table.Column<decimal>(type: "decimal(5,2)", nullable: false),
                    DATA_NOTA = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())")
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__NOTAS__AB084D7CD1D5B30A", x => x.ID_NOTA);
                    table.ForeignKey(
                        name: "FK_NOTAS_QUIZZES",
                        column: x => x.ID_QUIZZES,
                        principalTable: "QUIZZES",
                        principalColumn: "ID_QUIZZES",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_NOTAS_USUARIO",
                        column: x => x.ID_USUARIO,
                        principalTable: "USUARIO",
                        principalColumn: "ID_USUARIO",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TURMAS",
                columns: table => new
                {
                    ID_TURMA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_USUARIO = table.Column<int>(type: "int", nullable: false),
                    NOME = table.Column<string>(type: "varchar(45)", unicode: false, maxLength: 45, nullable: false),
                    DAT_CRIACAO = table.Column<DateTime>(type: "datetime", nullable: true, defaultValueSql: "(getdate())"),
                    IMG = table.Column<byte[]>(type: "varbinary(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__TURMAS__F1C3C0A5BC8297FB", x => x.ID_TURMA);
                    table.ForeignKey(
                        name: "FK_TURMAS_USUARIO",
                        column: x => x.ID_USUARIO,
                        principalTable: "USUARIO",
                        principalColumn: "ID_USUARIO",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "ALTERNATIVA",
                columns: table => new
                {
                    ID_ALT = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_PERG = table.Column<int>(type: "int", nullable: false),
                    DESCRICAO = table.Column<string>(type: "varchar(255)", unicode: false, maxLength: 255, nullable: false),
                    CORRETO = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__ALTERNAT__2A7C970019DD996E", x => x.ID_ALT);
                    table.ForeignKey(
                        name: "FK_ALT_PERG",
                        column: x => x.ID_PERG,
                        principalTable: "PERGUNTAS",
                        principalColumn: "ID_PERG",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DISCIPLINA",
                columns: table => new
                {
                    ID_DISCIPLINA = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_TURMA = table.Column<int>(type: "int", nullable: false),
                    ID_QUIZZES = table.Column<int>(type: "int", nullable: false),
                    DESCRICAO = table.Column<string>(type: "varchar(45)", unicode: false, maxLength: 45, nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__DISCIPLI__2CDBBFD7AE1710BC", x => x.ID_DISCIPLINA);
                    table.ForeignKey(
                        name: "FK_DISCIPLINA_QUIZZES",
                        column: x => x.ID_QUIZZES,
                        principalTable: "QUIZZES",
                        principalColumn: "ID_QUIZZES",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DISCIPLINA_TURMAS",
                        column: x => x.ID_TURMA,
                        principalTable: "TURMAS",
                        principalColumn: "ID_TURMA",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "RESPOSTAS",
                columns: table => new
                {
                    ID_RESP = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ID_ALT = table.Column<int>(type: "int", nullable: false),
                    ID_PERG = table.Column<int>(type: "int", nullable: false),
                    ID_USUARIO = table.Column<int>(type: "int", nullable: false),
                    TEXTO = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK__RESPOSTA__C857B8C148EED21F", x => x.ID_RESP);
                    table.ForeignKey(
                        name: "FK_RESP_ALT",
                        column: x => x.ID_ALT,
                        principalTable: "ALTERNATIVA",
                        principalColumn: "ID_ALT",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RESP_PERG",
                        column: x => x.ID_PERG,
                        principalTable: "PERGUNTAS",
                        principalColumn: "ID_PERG");
                    table.ForeignKey(
                        name: "FK_RESP_USUARIO",
                        column: x => x.ID_USUARIO,
                        principalTable: "USUARIO",
                        principalColumn: "ID_USUARIO");
                });

            migrationBuilder.CreateIndex(
                name: "IX_ALTERNATIVA_ID_PERG",
                table: "ALTERNATIVA",
                column: "ID_PERG");

            migrationBuilder.CreateIndex(
                name: "IX_DISCIPLINA_ID_QUIZZES",
                table: "DISCIPLINA",
                column: "ID_QUIZZES");

            migrationBuilder.CreateIndex(
                name: "IX_DISCIPLINA_ID_TURMA",
                table: "DISCIPLINA",
                column: "ID_TURMA");

            migrationBuilder.CreateIndex(
                name: "IX_NOTAS_ID_QUIZZES",
                table: "NOTAS",
                column: "ID_QUIZZES");

            migrationBuilder.CreateIndex(
                name: "IX_NOTAS_ID_USUARIO",
                table: "NOTAS",
                column: "ID_USUARIO");

            migrationBuilder.CreateIndex(
                name: "IX_PERGUNTAS_ID_QUIZ",
                table: "PERGUNTAS",
                column: "ID_QUIZ");

            migrationBuilder.CreateIndex(
                name: "IX_RESPOSTAS_ID_ALT",
                table: "RESPOSTAS",
                column: "ID_ALT");

            migrationBuilder.CreateIndex(
                name: "IX_RESPOSTAS_ID_PERG",
                table: "RESPOSTAS",
                column: "ID_PERG");

            migrationBuilder.CreateIndex(
                name: "IX_RESPOSTAS_ID_USUARIO",
                table: "RESPOSTAS",
                column: "ID_USUARIO");

            migrationBuilder.CreateIndex(
                name: "IX_TURMAS_ID_USUARIO",
                table: "TURMAS",
                column: "ID_USUARIO");

            migrationBuilder.CreateIndex(
                name: "UQ__USUARIO__161CF7243827440D",
                table: "USUARIO",
                column: "EMAIL",
                unique: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DISCIPLINA");

            migrationBuilder.DropTable(
                name: "NOTAS");

            migrationBuilder.DropTable(
                name: "RESPOSTAS");

            migrationBuilder.DropTable(
                name: "TURMAS");

            migrationBuilder.DropTable(
                name: "ALTERNATIVA");

            migrationBuilder.DropTable(
                name: "USUARIO");

            migrationBuilder.DropTable(
                name: "PERGUNTAS");

            migrationBuilder.DropTable(
                name: "QUIZZES");
        }
    }
}
