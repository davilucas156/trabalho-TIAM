using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Turma
{
    public int IdTurma { get; set; }

    public int IdUsuario { get; set; }

    public string Nome { get; set; } = null!;

    public DateTime? DatCriacao { get; set; }

    public byte[]? Img { get; set; }

    public virtual ICollection<Disciplina> Disciplinas { get; set; } = new List<Disciplina>();

    public virtual Usuario IdUsuarioNavigation { get; set; } = null!;
}
