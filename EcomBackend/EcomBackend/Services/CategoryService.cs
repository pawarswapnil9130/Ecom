using EcomBackend.Context;
using EcomBackend.DTOs;
using EcomBackend.Interface;
using EcomBackend.Models;
using Microsoft.EntityFrameworkCore;

namespace EcomBackend.Services
{
    public class CategoryService : ICategoryInterface
    {
        private readonly EcomContext _context;

        public CategoryService(EcomContext context)
        {
            _context = context;
        }
        public Task<List<Category>> GetAllCategories()
        {
            return _context.Categories.ToListAsync();
        }

        public async Task<Category> AddCategory(Category category)
        {
            
            await _context.Categories.AddAsync(category);
            await _context.SaveChangesAsync();
            return category;
        }

        public async Task<List<Subcategory>> GetSubCategoriesByCategories(int categoryId)
        {
            List<Subcategory> subcategories =  await _context.SubCategories.Where(x => x.categoryId == categoryId).ToListAsync();
            return subcategories;
        }



    }
}
