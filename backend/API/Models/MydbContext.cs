using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace ApiQUIZZ.Models;

public partial class MydbContext : DbContext
{
    public MydbContext()
    {
    }

    public MydbContext(DbContextOptions<MydbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Alternativa> Alternativas { get; set; }

    public virtual DbSet<Disciplina> Disciplinas { get; set; }

    public virtual DbSet<Nota> Notas { get; set; }

    public virtual DbSet<Pergunta> Perguntas { get; set; }

    public virtual DbSet<Quiz> Quizzes { get; set; }

    public virtual DbSet<Resposta> Respostas { get; set; }

    public virtual DbSet<Turma> Turmas { get; set; }

    public virtual DbSet<Usuario> Usuarios { get; set; }


    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Alternativa>(entity =>
        {
            entity.HasKey(e => e.IdAlt).HasName("PK__ALTERNAT__2A7C970019DD996E");

            entity.ToTable("ALTERNATIVA");

            entity.Property(e => e.IdAlt).HasColumnName("ID_ALT");
            entity.Property(e => e.Correto).HasColumnName("CORRETO");
            entity.Property(e => e.Descricao)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("DESCRICAO");
            entity.Property(e => e.IdPerg).HasColumnName("ID_PERG");

            entity.HasOne(d => d.IdPergNavigation).WithMany(p => p.Alternativas)
                .HasForeignKey(d => d.IdPerg)
                .HasConstraintName("FK_ALT_PERG");
        });

        modelBuilder.Entity<Disciplina>(entity =>
        {
            entity.HasKey(e => e.IdDisciplina).HasName("PK__DISCIPLI__2CDBBFD7AE1710BC");

            entity.ToTable("DISCIPLINA");

            entity.Property(e => e.IdDisciplina).HasColumnName("ID_DISCIPLINA");
            entity.Property(e => e.Descricao)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("DESCRICAO");
            entity.Property(e => e.IdQuizzes).HasColumnName("ID_QUIZZES");
            entity.Property(e => e.IdTurma).HasColumnName("ID_TURMA");

            entity.HasOne(d => d.IdQuizzesNavigation).WithMany(p => p.Disciplinas)
                .HasForeignKey(d => d.IdQuizzes)
                .HasConstraintName("FK_DISCIPLINA_QUIZZES");

            entity.HasOne(d => d.IdTurmaNavigation).WithMany(p => p.Disciplinas)
                .HasForeignKey(d => d.IdTurma)
                .HasConstraintName("FK_DISCIPLINA_TURMAS");
        });

        modelBuilder.Entity<Nota>(entity =>
        {
            entity.HasKey(e => e.IdNota).HasName("PK__NOTAS__AB084D7CD1D5B30A");

            entity.ToTable("NOTAS");

            entity.Property(e => e.IdNota).HasColumnName("ID_NOTA");
            entity.Property(e => e.DataNota)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("DATA_NOTA");
            entity.Property(e => e.IdQuizzes).HasColumnName("ID_QUIZZES");
            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");
            entity.Property(e => e.Valor)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("VALOR");

            entity.HasOne(d => d.IdQuizzesNavigation).WithMany(p => p.Nota)
                .HasForeignKey(d => d.IdQuizzes)
                .HasConstraintName("FK_NOTAS_QUIZZES");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Nota)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK_NOTAS_USUARIO");
        });

        modelBuilder.Entity<Pergunta>(entity =>
        {
            entity.HasKey(e => e.IdPerg).HasName("PK__PERGUNTA__BD9558F4358A7E21");

            entity.ToTable("PERGUNTAS");

            entity.Property(e => e.IdPerg).HasColumnName("ID_PERG");
            entity.Property(e => e.Enunciado)
                .HasColumnType("text")
                .HasColumnName("ENUNCIADO");
            entity.Property(e => e.IdQuiz).HasColumnName("ID_QUIZ");
            entity.Property(e => e.Img)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("IMG");
            entity.Property(e => e.Pontos)
                .HasColumnType("decimal(5, 2)")
                .HasColumnName("PONTOS");
            entity.Property(e => e.Tipo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("TIPO");

            entity.HasOne(d => d.IdQuizNavigation).WithMany(p => p.Pergunta)
                .HasForeignKey(d => d.IdQuiz)
                .HasConstraintName("FK_PERGUNTAS_QUIZZES");
        });

        modelBuilder.Entity<Quiz>(entity =>
        {
            entity.HasKey(e => e.IdQuizzes).HasName("PK__QUIZZES__5F6DBDB5A0DDBF18");

            entity.ToTable("QUIZZES");

            entity.Property(e => e.IdQuizzes).HasColumnName("ID_QUIZZES");
            entity.Property(e => e.DatCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("DAT_CRIACAO");
            entity.Property(e => e.Titulo)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("TITULO");
        });

        modelBuilder.Entity<Resposta>(entity =>
        {
            entity.HasKey(e => e.IdResp).HasName("PK__RESPOSTA__C857B8C148EED21F");

            entity.ToTable("RESPOSTAS");

            entity.Property(e => e.IdResp).HasColumnName("ID_RESP");
            entity.Property(e => e.IdAlt).HasColumnName("ID_ALT");
            entity.Property(e => e.IdPerg).HasColumnName("ID_PERG");
            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");
            entity.Property(e => e.Texto)
                .HasColumnType("text")
                .HasColumnName("TEXTO");

            entity.HasOne(d => d.IdAltNavigation).WithMany(p => p.Resposta)
                .HasForeignKey(d => d.IdAlt)
                .HasConstraintName("FK_RESP_ALT");

            entity.HasOne(d => d.IdPergNavigation).WithMany(p => p.Resposta)
                .HasForeignKey(d => d.IdPerg)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RESP_PERG");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Resposta)
                .HasForeignKey(d => d.IdUsuario)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_RESP_USUARIO");
        });

        modelBuilder.Entity<Turma>(entity =>
        {
            entity.HasKey(e => e.IdTurma).HasName("PK__TURMAS__F1C3C0A5BC8297FB");

            entity.ToTable("TURMAS");

            entity.Property(e => e.IdTurma).HasColumnName("ID_TURMA");
            entity.Property(e => e.DatCriacao)
                .HasDefaultValueSql("(getdate())")
                .HasColumnType("datetime")
                .HasColumnName("DAT_CRIACAO");
            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");
            entity.Property(e => e.Img).HasColumnName("IMG");
            entity.Property(e => e.Nome)
                .HasMaxLength(45)
                .IsUnicode(false)
                .HasColumnName("NOME");

            entity.HasOne(d => d.IdUsuarioNavigation).WithMany(p => p.Turmas)
                .HasForeignKey(d => d.IdUsuario)
                .HasConstraintName("FK_TURMAS_USUARIO");
        });

        modelBuilder.Entity<Usuario>(entity =>
        {
            entity.HasKey(e => e.IdUsuario).HasName("PK__USUARIO__91136B90ECA3AD26");

            entity.ToTable("USUARIO");

            entity.HasIndex(e => e.Email, "UQ__USUARIO__161CF7243827440D").IsUnique();

            entity.Property(e => e.IdUsuario).HasColumnName("ID_USUARIO");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("EMAIL");
            entity.Property(e => e.Nome)
                .HasMaxLength(100)
                .IsUnicode(false)
                .HasColumnName("NOME");
            entity.Property(e => e.Senha)
                .HasMaxLength(255)
                .IsUnicode(false)
                .HasColumnName("SENHA");
            entity.Property(e => e.Tipo)
                .HasMaxLength(1)
                .IsUnicode(false)
                .IsFixedLength()
                .HasColumnName("TIPO");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
