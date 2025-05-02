using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Pergunta
{
    public int IdPerg { get; set; }

    public int IdQuiz { get; set; }

    public string Enunciado { get; set; } = null!;

    public string? Img { get; set; }

    public decimal Pontos { get; set; }

    public string Tipo { get; set; } = null!;

    public virtual ICollection<Alternativa> Alternativas { get; set; } = new List<Alternativa>();

    public virtual Quiz IdQuizNavigation { get; set; } = null!;

    public virtual ICollection<Resposta> Resposta { get; set; } = new List<Resposta>();
}
