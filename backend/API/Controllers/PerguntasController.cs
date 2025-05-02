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
    public class PerguntasController : ControllerBase
    {
        private readonly MydbContext _context;

        public PerguntasController(MydbContext context)
        {
            _context = context;
        }

        // GET: api/Perguntas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pergunta>>> GetPerguntas()
        {
            return await _context.Perguntas.ToListAsync();
        }

        // GET: api/Perguntas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Pergunta>> GetPergunta(int id)
        {
            var pergunta = await _context.Perguntas.FindAsync(id);

            if (pergunta == null)
            {
                return NotFound();
            }

            return pergunta;
        }

        // PUT: api/Perguntas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPergunta(int id, Pergunta pergunta)
        {
            if (id != pergunta.IdPerg)
            {
                return BadRequest();
            }

            _context.Entry(pergunta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PerguntaExists(id))
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

        // POST: api/Perguntas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Pergunta>> PostPergunta(Pergunta pergunta)
        {
            _context.Perguntas.Add(pergunta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPergunta", new { id = pergunta.IdPerg }, pergunta);
        }

        // DELETE: api/Perguntas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePergunta(int id)
        {
            var pergunta = await _context.Perguntas.FindAsync(id);
            if (pergunta == null)
            {
                return NotFound();
            }

            _context.Perguntas.Remove(pergunta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PerguntaExists(int id)
        {
            return _context.Perguntas.Any(e => e.IdPerg == id);
        }
    }
}
