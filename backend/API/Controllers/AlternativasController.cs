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
    public class AlternativasController : ControllerBase
    {
        private readonly MydbContext _context;

        public AlternativasController(MydbContext context)
        {
            _context = context;
        }

        // GET: api/Alternativas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Alternativa>>> GetAlternativas()
        {
            return await _context.Alternativas.ToListAsync();
        }

        // GET: api/Alternativas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Alternativa>> GetAlternativa(int id)
        {
            var alternativa = await _context.Alternativas.FindAsync(id);

            if (alternativa == null)
            {
                return NotFound();
            }

            return alternativa;
        }

        // PUT: api/Alternativas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutAlternativa(int id, Alternativa alternativa)
        {
            if (id != alternativa.IdAlt)
            {
                return BadRequest();
            }

            _context.Entry(alternativa).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!AlternativaExists(id))
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

        // POST: api/Alternativas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Alternativa>> PostAlternativa(Alternativa alternativa)
        {
            _context.Alternativas.Add(alternativa);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetAlternativa", new { id = alternativa.IdAlt }, alternativa);
        }

        // DELETE: api/Alternativas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAlternativa(int id)
        {
            var alternativa = await _context.Alternativas.FindAsync(id);
            if (alternativa == null)
            {
                return NotFound();
            }

            _context.Alternativas.Remove(alternativa);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool AlternativaExists(int id)
        {
            return _context.Alternativas.Any(e => e.IdAlt == id);
        }
    }
}
