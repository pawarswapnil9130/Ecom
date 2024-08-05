using EcomBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcomBackend.Context
{
    public class EcomContext : DbContext
    {
        public EcomContext(DbContextOptions<EcomContext> options)
            : base(options)
        {
        }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Subcategory> SubCategories { get; set; }
    }
}
