using ApiQUIZZ.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace ApiQUIZZ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioTurmaController : Controller
    {
        private readonly MydbContext _context;

        public UsuarioTurmaController(MydbContext context)
        {
            _context = context;
        }

        // Adicionar usuário a uma turma
        [HttpPost]
        public async Task<IActionResult> AddUsuarioTurma( UsuarioTurma usuarioTurma)
        {
       
            _context.UsuarioTurmas.Add(usuarioTurma);
            await _context.SaveChangesAsync();

            return Ok(usuarioTurma);
        }

        // Remover usuário de uma turma
        [HttpDelete("{idUsuario}/{idTurma}")]
        public async Task<IActionResult> RemoveUsuarioTurma(int idUsuario, int idTurma)
        {
            var usuarioTurma = await _context.UsuarioTurmas
                .FirstAsync(ut => ut.IdUsuario == idUsuario && ut.IdTurma == idTurma);

            if (usuarioTurma == null) return NotFound();

            _context.UsuarioTurmas.Remove(usuarioTurma);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}
