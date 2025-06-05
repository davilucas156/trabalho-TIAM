using ApiQUIZZ.DTO;
using ApiQUIZZ.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ApiQUIZZ.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : Controller
    {
        private readonly MydbContext _context;

        public LoginController(MydbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<Usuario>> PostResposta(UsuarioLogin user)
        {
           
            var usuario = await _context.Usuarios.FirstOrDefaultAsync(u => u.Email == user.Email && u.Senha == user.Senha);

            if (usuario != null)
            {
                return Ok(usuario);
            }
            else {
                return Unauthorized("Usuário não encontrado");
            }
        }


    }
}
