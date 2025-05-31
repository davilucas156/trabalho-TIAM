namespace ApiQUIZZ.DTO
{
    public class PerguntasDTO
    {
        public string Enunciado { get; set; }
        public string Img { get; set; }
        public decimal Pontos { get; set; }
        public string Tipo { get; set; }
        public List<AlternativaDTO> Alternativas { get; set; }
    }
}
