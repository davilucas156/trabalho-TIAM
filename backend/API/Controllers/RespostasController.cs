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
    public class RespostasController : ControllerBase
    {
        private readonly MydbContext _context;

        public RespostasController(MydbContext context)
        {
            _context = context;
        }

        // GET: api/Respostas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Resposta>>> GetRespostas()
        {
            return await _context.Respostas.ToListAsync();
        }

        // GET: api/Respostas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Resposta>> GetResposta(int id)
        {
            var resposta = await _context.Respostas.FindAsync(id);

            if (resposta == null)
            {
                return NotFound();
            }

            return resposta;
        }

        // PUT: api/Respostas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutResposta(int id, Resposta resposta)
        {
            if (id != resposta.IdResp)
            {
                return BadRequest();
            }

            _context.Entry(resposta).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RespostaExists(id))
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

        // POST: api/Respostas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Resposta>> PostResposta(Resposta resposta)
        {
            _context.Respostas.Add(resposta);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetResposta", new { id = resposta.IdResp }, resposta);
        }

        // DELETE: api/Respostas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteResposta(int id)
        {
            var resposta = await _context.Respostas.FindAsync(id);
            if (resposta == null)
            {
                return NotFound();
            }

            _context.Respostas.Remove(resposta);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RespostaExists(int id)
        {
            return _context.Respostas.Any(e => e.IdResp == id);
        }
    }
}
