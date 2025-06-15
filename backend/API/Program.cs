using ApiQUIZZ.Models;

using Microsoft.EntityFrameworkCore;

namespace ApiQUIZZ

{

    public class Program

    {

        public static void Main(string[] args)

        {

            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();

            builder.Services.AddDbContext<MydbContext>(options =>
<<<<<<< Updated upstream
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // Configurar CORS para permitir tudo
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("AllowAll", builder =>
                {
                    builder.AllowAnyOrigin()
                           .AllowAnyMethod()
                           .AllowAnyHeader();
                });
            });

=======

                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

>>>>>>> Stashed changes
            builder.Services.AddEndpointsApiExplorer();

            builder.Services.AddSwaggerGen();

            // ?? CONFIGURAÇÃO DE CORS: permite qualquer origem, método e cabeçalho

            builder.Services.AddCors(options =>

            {

                options.AddPolicy("PermitirTudo", policy =>

                {

                    policy

                        .AllowAnyOrigin()

                        .AllowAnyMethod()

                        .AllowAnyHeader();

                });

            });

            var app = builder.Build();

            // Configure the HTTP request pipeline.

            if (app.Environment.IsDevelopment())

            {

                app.UseSwagger();

                app.UseSwaggerUI();

            }

            app.UseHttpsRedirection();

<<<<<<< Updated upstream
            // Aplicar política CORS antes do Authorization
            app.UseCors("AllowAll");
=======
>>>>>>> Stashed changes

            app.UseAuthorization();

            app.UseCors("PermitirTudo");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();

        }

    }

}

