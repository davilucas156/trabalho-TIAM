using ApiQUIZZ.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

public partial class Quiz
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdQuizzes { get; set; }
    public string Titulo { get; set; } = null!;
    public int Id_criador { get; set; }
    public int Id_disciplina { get; set; }
    public DateTime DatCriacao { get; set; }

    public Usuario UsuarioCriador { get; set; }
    public Disciplina Disciplina { get; set; }

    public virtual ICollection<Nota> Nota { get; set; } = new List<Nota>();
    public virtual ICollection<Pergunta> Pergunta { get; set; } = new List<Pergunta>();
}
