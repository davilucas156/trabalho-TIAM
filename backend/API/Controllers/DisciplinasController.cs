using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ApiQUIZZ.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiQUIZZ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DisciplinasController : ControllerBase
    {
        private readonly MydbContext _context;

        public DisciplinasController(MydbContext context)
        {
            _context = context;
        }


        // GET: api/Disciplinas/turma/1
        [HttpGet("turma/{turmaId}")]
        public async Task<ActionResult<IEnumerable<Disciplina>>> GetDisciplinasPorTurma(int turmaId)
        {
            var disciplinas = await _context.Disciplinas
                .Where(d => d.IdTurma == turmaId)
                .ToListAsync();

            return disciplinas;
        }


        // GET: api/Disciplinas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Disciplina>>> GetDisciplinas()
        {
            return await _context.Disciplinas.ToListAsync();
        }

        // GET: api/Disciplinas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Disciplina>> GetDisciplina(int id)
        {
            var disciplina = await _context.Disciplinas.FindAsync(id);

            if (disciplina == null)
            {
                return NotFound();
            }

            return disciplina;
        }

        // PUT: api/Disciplinas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDisciplina(int id, Disciplina disciplina)
        {
            if (id != disciplina.IdDisciplina)
            {
                return BadRequest();
            }

            _context.Entry(disciplina).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DisciplinaExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Disciplina>> PostDisciplina(DisciplinaDTO dto)
        {
            var disciplina = new Disciplina
            {
                Descricao = dto.Descricao,
                IdTurma = dto.IdTurma
            };

            _context.Disciplinas.Add(disciplina);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDisciplina", new { id = disciplina.IdDisciplina }, disciplina);
        }


        // DELETE: api/Disciplinas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDisciplina(int id)
        {
            var disciplina = await _context.Disciplinas.FindAsync(id);
            if (disciplina == null)
            {
                return NotFound();
            }

            _context.Disciplinas.Remove(disciplina);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DisciplinaExists(int id)
        {
            return _context.Disciplinas.Any(e => e.IdDisciplina == id);
        }
    }
}
