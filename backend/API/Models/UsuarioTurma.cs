namespace ApiQUIZZ.Models
{
    public class UsuarioTurma
    {
        public int IdUsuario { get; set; }
        public int IdTurma { get; set; }
        public Usuario Usuario { get; set; }
        public Turma Turma { get; set; }
    }
}
