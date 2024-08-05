using Microsoft.AspNetCore.Mvc;
using EcomBackend.Services;
using EcomBackend.Models;
using EcomBackend.DTOs;

namespace EcomBackend.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        public CategoryService _categoryService { get; set; }
        public CategoryController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        [HttpPost]
        [HttpPost("add")]
        public async Task<IActionResult>  AddCategory([FromBody] CategoryDto categoryDto)
        {
            if(categoryDto != null)
            {
                var category = new Category
                {
                    categoryName = categoryDto.categoryName,
                    categoryDescription = categoryDto.categoryDescription,
                    ImagePath = categoryDto.ImagePath
                };
                Category item = await _categoryService.AddCategory(category);
                return Ok(category);
            }
            else
            {
                return NotFound();  
            }
        }

        [HttpGet("GetAllCategories")]
        public async Task <IActionResult> GetAllCategories()
        {
           var categories =   await _categoryService.GetAllCategories();

            return Ok(categories);
        }

        [HttpGet("GetSubCategoriesByCategoryId")]
        public async Task<IActionResult> GetSubCategoriesByCategoryId(int CategoryId)
        {
            List<Subcategory> subcategories = await _categoryService.GetSubCategoriesByCategories(CategoryId);
            return Ok(subcategories);   
        }
    }
}
