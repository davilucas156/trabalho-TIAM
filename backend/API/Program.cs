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


            // Aplicar política CORS antes do Authorization
            app.UseCors("AllowAll");

            app.UseAuthorization();

            app.UseCors("PermitirTudo");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();

        }

    }

}

