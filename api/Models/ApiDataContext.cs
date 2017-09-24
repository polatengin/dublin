using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class ApiDataContext : DbContext
  {
    public DbSet<Project> Projects { get; set; }

    public DbSet<Employee> Employees { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
      base.OnConfiguring(optionsBuilder);

      optionsBuilder.UseSqlServer("Server=tcp:meetup22eylul.database.windows.net,1433;Initial Catalog=MeetupDatabase;Persist Security Info=False;User ID=sameetup;Password=Me123321;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
    }
  }
}
