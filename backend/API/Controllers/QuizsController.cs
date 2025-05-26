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

            using var transaction = await _context.Database.BeginTransactionAsync();

            try
            {
                
                var quiz = new Quiz
                {
                    Titulo = dto.Titulo,
                    DatCriacao = dto.Data_criacao
                };

                _context.Quizzes.Add(quiz);
                await _context.SaveChangesAsync();

                
                var disciplina = await _context.Disciplinas
                    .FirstOrDefaultAsync(d => d.IdDisciplina == dto.Id_Disciplina);

                if (disciplina == null)
                    return NotFound($"Disciplina com ID {dto.Id_Disciplina} não encontrada.");

                
                _context.Disciplinas.Update(disciplina);

                
                foreach (var perguntaDto in dto.Perguntas)
                {
                    var pergunta = new Pergunta
                    {
                        IdQuiz = quiz.IdQuizzes,
                        Enunciado = perguntaDto.Enunciado,
                        Img = "",
                        Pontos = perguntaDto.Pontos,
                        Tipo = perguntaDto.Tipo
                    };

                    _context.Perguntas.Add(pergunta);
                    await _context.SaveChangesAsync(); 

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

                await _context.SaveChangesAsync();
                await transaction.CommitAsync();

                return CreatedAtAction(nameof(CriarQuizCompleto), new { id = quiz.IdQuizzes }, new { id = quiz.IdQuizzes });
            }
            catch (Exception ex)
            {
                await transaction.RollbackAsync();
                return StatusCode(500, $"Erro ao criar quiz completo: {ex.Message}");
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
