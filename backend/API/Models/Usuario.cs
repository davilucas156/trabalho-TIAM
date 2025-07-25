﻿using System;
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
    public ICollection<UsuarioTurma> UsuarioTurmas { get; set; }
    public virtual ICollection<Resposta> Resposta { get; set; } = new List<Resposta>();
    public List<Quiz> QuizzesCriados { get; set; }

}
