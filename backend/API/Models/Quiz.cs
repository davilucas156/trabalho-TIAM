using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Quiz
{
    public int IdQuizzes { get; set; }

    public string Titulo { get; set; } = null!;

    public int Id_criador { get; set; }
    public DateTime DatCriacao { get; set; }
    public Usuario UsuarioCriador { get; set; }
    public virtual ICollection<Disciplina> Disciplinas { get; set; } = new List<Disciplina>();

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();

    public virtual ICollection<Pergunta> Pergunta { get; set; } = new List<Pergunta>();
}
