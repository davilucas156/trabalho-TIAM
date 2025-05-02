using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Nota
{
    public int IdNota { get; set; }

    public int IdQuizzes { get; set; }

    public int IdUsuario { get; set; }

    public decimal Valor { get; set; }

    public DateTime? DataNota { get; set; }

    public virtual Quiz IdQuizzesNavigation { get; set; } = null!;

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
