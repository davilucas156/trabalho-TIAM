using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiQUIZZ.DTO;
using ApiQUIZZ.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiQUIZZ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class QuizsController : ControllerBase
    {
        private readonly MydbContext _context;

        public QuizsController(MydbContext context)
        {
            _context = context;
        }

        // GET: api/Quizs
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Quiz>>> GetQuizzes()
        {
            return await _context.Quizzes.ToListAsync();
        }

        // GET: api/Quizs/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Quiz>> GetQuiz(int id)
        {
            var quiz = await _context.Quizzes.FindAsync(id);

            if (quiz == null)
            {
                return NotFound();
            }

            return quiz;
        }

        [HttpGet("criador/{id}")]

        public async Task<ActionResult<Quiz>> GetQuizzesPorCriador(int id)
        {
            var quizzes = await _context.Quizzes
                            .Where(q => q.Id_criador == id)
                            .ToListAsync();
            if (quizzes == null || quizzes.Count == 0)
                return NotFound();

            return Ok(quizzes);
        }


        /*[HttpGet("disciplina/{id}")]
        public async Task<ActionResult<Quiz>> GetQuizzesPorDisciplina(int id)
        {
            var quizzes = await _context.Quizzes
                            .Where(q => q.Id == id)
                            .ToListAsync();
            if (quizzes == null || quizzes.Count == 0)
                return NotFound();

            return Ok(quizzes);
    }*/

        // PUT: api/Quizs/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
    public async Task<IActionResult> PutQuiz(int id, Quiz quiz)
    {
        if (id != quiz.IdQuizzes)
        {
            return BadRequest();
        }

        _context.Entry(quiz).State = EntityState.Modified;

        try
        {
            await _context.SaveChangesAsync();
        }
        catch (DbUpdateConcurrencyException)
        {
            if (!QuizExists(id))
            {
                return NotFound();
            }
            else
            {
                throw;
            }
        }
        return NoContent();
    }

        // POST: api/Quizs
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /* [HttpPost]
         public async Task<ActionResult<Quiz>> PostQuiz(Quiz quiz)
         {
             _context.Quizzes.Add(quiz);
             await _context.SaveChangesAsync();

             return CreatedAtAction("GetQuiz", new { id = quiz.IdQuizzes }, quiz);
         }*/

        [HttpPost]
        public async Task<IActionResult> CriarQuizCompleto([FromBody] QuizDTO dto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

<<<<<<< Updated upstream
            // Verifica se a disciplina informada existe
            var disciplinaExiste = await _context.Disciplinas.AnyAsync(d => d.IdDisciplina == dto.Id_Disciplina);
            if (!disciplinaExiste)
                return BadRequest($"Disciplina com ID {dto.Id_Disciplina} não existe.");

            // Verifica se o usuário criador existe
            var usuarioExiste = await _context.Usuarios.AnyAsync(u => u.IdUsuario == dto.Id_criador);
            if (!usuarioExiste)
                return BadRequest($"Usuário com ID {dto.Id_criador} não existe.");

            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
                // Cria o quiz
=======
            using var transaction = await _context.Database.BeginTransactionAsync();
            try
            {
>>>>>>> Stashed changes
                var quiz = new Quiz
                {
                    Titulo = dto.Titulo,
                    DatCriacao = dto.Data_criacao,
                    Id_criador = dto.Id_criador,
                    Id_disciplina = dto.Id_Disciplina // <- Correção do erro!
                };

                _context.Quizzes.Add(quiz);
                await _context.SaveChangesAsync(); // quiz.IdQuizzes é gerado aqui

<<<<<<< Updated upstream
                // Adiciona perguntas e alternativas
=======
>>>>>>> Stashed changes
                foreach (var perguntaDto in dto.Perguntas)
                {
                    var pergunta = new Pergunta
                    {
                        IdQuiz = quiz.IdQuizzes,
                        Enunciado = perguntaDto.Enunciado,
<<<<<<< Updated upstream
                        Img = perguntaDto.Img,
=======
>>>>>>> Stashed changes
                        Pontos = perguntaDto.Pontos,
                        Tipo = perguntaDto.Tipo,
                    };

                    _context.Perguntas.Add(pergunta);
<<<<<<< Updated upstream
                    await _context.SaveChangesAsync(); // pergunta.IdPerg é gerado aqui
=======
                    await _context.SaveChangesAsync(); // pergunta.IdPerg gerado aqui
>>>>>>> Stashed changes

                    foreach (var altDto in perguntaDto.Alternativas)
                    {
                        var alternativa = new Alternativa
                        {
                            IdPerg = pergunta.IdPerg,
                            Descricao = altDto.Descricao,
                            Correto = altDto.Correto
                        };

                        _context.Alternativas.Add(alternativa);
                    }
                }

<<<<<<< Updated upstream
                await _context.SaveChangesAsync(); // Salva todas as alternativas
=======
                await _context.SaveChangesAsync(); // salva todas as alternativas
>>>>>>> Stashed changes
                await transaction.CommitAsync();

                return CreatedAtAction(nameof(CriarQuizCompleto), new { id = quiz.IdQuizzes }, new { id = quiz.IdQuizzes });
            }
            catch (Exception ex)
            {
                var innerMessage = ex.InnerException?.Message ?? ex.Message;
                return StatusCode(500, $"Erro ao criar quiz completo: {innerMessage}");
            }
        }


        // DELETE: api/Quizs/5
        [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteQuiz(int id)
    {
        var quiz = await _context.Quizzes.FindAsync(id);
        if (quiz == null)
        {
            return NotFound();
        }

        _context.Quizzes.Remove(quiz);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    private bool QuizExists(int id)
    {
        return _context.Quizzes.Any(e => e.IdQuizzes == id);
    }
}
}
