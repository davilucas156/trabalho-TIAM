using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Disciplina
{
    public int IdDisciplina { get; set; }

    public int IdTurma { get; set; }

    public int IdQuizzes { get; set; }

    public string Descricao { get; set; } = null!;

    public virtual Quiz IdQuizzesNavigation { get; set; } = null!;

    public virtual Turma IdTurmaNavigation { get; set; } = null!;
}
