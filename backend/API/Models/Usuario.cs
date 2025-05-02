using System;
using System.Collections.Generic;

namespace ApiQUIZZ.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string Nome { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Senha { get; set; } = null!;

    public string Tipo { get; set; } = null!;

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();

    public virtual ICollection<Resposta> Resposta { get; set; } = new List<Resposta>();

    public virtual ICollection<Turma> Turmas { get; set; } = new List<Turma>();
}
