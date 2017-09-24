using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Models
{
  public class Employee
  {
    public int Id { get; set; }

    public string Name { get; set; }

    public decimal Salary { get; set; }

    public int Age { get; set; }

    public int ProjectId { get; set; }
  }
}
