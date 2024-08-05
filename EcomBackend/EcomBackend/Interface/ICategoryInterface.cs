using EcomBackend.Models;

namespace EcomBackend.Interface
{
    public interface ICategoryInterface
    {
        public Task<List<Category>> GetAllCategories();
        public Task<Category> AddCategory(Category category);
        public Task<List<Subcategory>> GetSubCategoriesByCategories(int categoryId);


    }
}
