using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ApiQUIZZ.Models;

public partial class Turma
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdTurma { get; set; }


    public string Nome { get; set; } = null!;

    public DateTime? DatCriacao { get; set; }

    public byte[]? Img { get; set; }

    public virtual ICollection<Disciplina> Disciplinas { get; set; } = new List<Disciplina>();
    public ICollection<UsuarioTurma> UsuarioTurmas { get; set; } = new List<UsuarioTurma>();

}
