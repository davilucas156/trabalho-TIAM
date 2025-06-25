using ApiQUIZZ.Models;
using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;

namespace ApiQUIZZ
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers()
                .AddJsonOptions(options =>
                {
                    // Trocar Preserve por IgnoreCycles para JSON limpo
                    options.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles;
                    options.JsonSerializerOptions.WriteIndented = true; // Opcional: JSON formatado bonito
                });

            builder.Services.AddDbContext<MydbContext>(options =>
                options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            // Configurar CORS global com uma única política
            builder.Services.AddCors(options =>
            {
                options.AddPolicy("PermitirTudo", policy =>
                {
                    policy.AllowAnyOrigin()
                          .AllowAnyMethod()
                          .AllowAnyHeader();
                });
            });

            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            var app = builder.Build();

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            // Aplicar CORS antes de Authorization
            app.UseCors("PermitirTudo");

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}
