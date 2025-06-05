using ApiQUIZZ.Models;

public partial class Disciplina
{
    public int IdDisciplina { get; set; }
    public int IdTurma { get; set; }
    public string Descricao { get; set; } = null!;

    public virtual Turma IdTurmaNavigation { get; set; } = null!;
    public List<Quiz> QuizzesDisciplina { get; set; } = new List<Quiz>();
}
