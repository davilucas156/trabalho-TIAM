namespace ApiQUIZZ.DTO
{
    public class QuizDTO
    {
        public int Id_Disciplina { get; set; }
        public string Titulo { get; set; }
        public DateTime Data_criacao { get; set; }
        public List<PerguntasDTO> Perguntas {get; set;}
    }
}
