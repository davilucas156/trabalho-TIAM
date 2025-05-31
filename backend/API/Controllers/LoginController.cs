using ApiQUIZZ.DTO;
using ApiQUIZZ.Models;
using Microsoft.AspNetCore.Mvc;

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

            bool exist = _context.Usuarios.Any(u => u.Email == user.Email && u.Senha == user.Senha);

            if (exist)
            {
                return Ok(200);
            }
            else {
                return BadRequest("Usuário não encontrado");
            }
        }


    }
}
