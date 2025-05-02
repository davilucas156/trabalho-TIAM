using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Alternativa
{
    public int IdAlt { get; set; }

    public int IdPerg { get; set; }

    public string Descricao { get; set; } = null!;

    public bool Correto { get; set; }

    public virtual Pergunta IdPergNavigation { get; set; } = null!;

    public virtual ICollection<Resposta> Resposta { get; set; } = new List<Resposta>();
}
