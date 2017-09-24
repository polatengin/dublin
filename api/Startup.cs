using System.Linq;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using api.Models;
using System.IO;
using Newtonsoft.Json;

namespace api
{
  public class Startup
  {
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddCors();
    }

    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      if (env.IsDevelopment())
      {
        app.UseDeveloperExceptionPage();
      }

      app.UseCors((builder) =>
      {
        builder.AllowAnyHeader();
        builder.AllowAnyMethod();
        builder.AllowAnyOrigin();
      });

      app.Map("/project/list", (builder) =>
      {
        builder.Run(async (context) =>
        {
          var dc = new ApiDataContext();
          var model = dc.Projects.ToList();

          await context.Response.WriteAsync(JsonConvert.SerializeObject(model));
        });
      });

      app.Map("/employee/list", (builder) =>
      {
        builder.Run(async (context) =>
        {
          var dc = new ApiDataContext();
          var model = dc.Employees.ToList();

          await context.Response.WriteAsync(JsonConvert.SerializeObject(model));
        });
      });

      app.Map("/employee/update", (builder) =>
      {
        builder.Run(async (context) =>
        {

          var stream = new StreamReader(context.Request.Body);
          var json = stream.ReadToEnd();

          var sendedEmployee = JsonConvert.DeserializeObject<Employee>(json);

          var dc = new ApiDataContext();
          var model = dc.Employees.FirstOrDefault(e => e.Id == sendedEmployee.Id);
          model.Age = sendedEmployee.Age;
          model.Name = sendedEmployee.Name;
          model.ProjectId = sendedEmployee.ProjectId;
          model.Salary = sendedEmployee.Salary;

          dc.SaveChanges();

          await context.Response.WriteAsync("Kayıt başarıyla güncellendi");
        });
      });

      app.Run(async (context) =>
      {
        new ApiDataContext().Database.EnsureCreated();

        await context.Response.WriteAsync("Hello World!");
      });
    }
  }
}
