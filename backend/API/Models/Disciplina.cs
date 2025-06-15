using ApiQUIZZ.Models;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

public partial class Disciplina
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public int IdDisciplina { get; set; }

    [ForeignKey("IdTurma")]
    public int IdTurma { get; set; }
    [Required]
    public string Descricao { get; set; }

    public virtual Turma IdTurmaNavigation { get; set; }
    public List<Quiz> QuizzesDisciplina { get; set; } = new();
}
