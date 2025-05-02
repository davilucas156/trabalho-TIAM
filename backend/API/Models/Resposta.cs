using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Resposta
{
    public int IdResp { get; set; }

    public int IdAlt { get; set; }

    public int IdPerg { get; set; }

    public int IdUsuario { get; set; }

    public string? Texto { get; set; }

    public virtual Alternativa IdAltNavigation { get; set; } = null!;

    public virtual Pergunta IdPergNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
