import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const AdminPage = () => {
    const { createRecipes, loading } = useRecipeStore();

    const [formData, setFormData] = useState({
        title: '',
        prepTime: '',
        image: '',
        instructions: [''],
        ingredients: [''],
        category: '',
    });

    const handleArrayChange = (index, field, value) => {
        const updated = [...formData[field]];
        updated[index] = value;
        setFormData({ ...formData, [field]: updated });
    };

    const addField = (field) => {
        setFormData({ ...formData, [field]: [...formData[field], ''] });
    };

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setFormData({ ...formData, image: reader.result });
            };

            reader.readAsDataURL(file); // base64
        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createRecipes(formData);
        setFormData({
            title: '',
            prepTime: '',
            image: '',
            instructions: [''],
            ingredients: [''],
            category: '',
        });
    };

    return (
        <section className="max-w-2xl mx-auto mt-10 py-12 px-4">
            <h2 className="text-3xl font-bold mb-6 text-center">Add New Recipe</h2>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-xl shadow">
                <div>
                    <label className="block font-medium mb-1">Title</label>
                    <input
                        name="title"
                        value={formData.title}
                        onChange={(e)=>setFormData({...formData,title:e.target.value})}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Prep Time (minutes)</label>
                    <input
                        name="prepTime"
                        type="text"
                        value={formData.prepTime}
                         onChange={(e)=>setFormData({...formData,prepTime:e.target.value})}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-1">Upload Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="w-full border-2 cursor-pointer text-gray-100 bg-gray-400"
                    />
                    {formData.image && (
                        <img
                            src={formData.image}
                            alt="Uploaded preview"
                            className="mt-2 h-32 object-cover rounded"
                        />
                    )}
                </div>

                <div>
                    <label className="block font-medium mb-1">Category</label>
                    <input
                        name="category"
                        value={formData.category}
                         onChange={(e)=>setFormData({...formData,category:e.target.value})}
                        className="w-full border border-gray-300 p-2 rounded-md"
                        required
                    />
                </div>

                <div>
                    <label className="block font-medium mb-2">Ingredients</label>
                    {formData.ingredients.map((ing, i) => (
                        <input
                            key={i}
                            value={ing}
                            onChange={(e) => handleArrayChange(i, 'ingredients', e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md mb-2"
                            required
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => addField('ingredients')}
                        className="text-sm text-blue-600"
                    >
                        + Add Ingredient
                    </button>
                </div>

                <div>
                    <label className="block font-medium mb-2">Instructions</label>
                    {formData.instructions.map((ins, i) => (
                        <input
                            key={i}
                            value={ins}
                            onChange={(e) => handleArrayChange(i, 'instructions', e.target.value)}
                            className="w-full border border-gray-300 p-2 rounded-md mb-2"
                            required
                        />
                    ))}
                    <button
                        type="button"
                        onClick={() => addField('instructions')}
                        className="text-sm text-blue-600"
                    >
                        + Add Step
                    </button>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-yellow-500 text-white cursor-pointer px-4 py-2 rounded hover:bg-yellow-600 transition disabled:opacity-50 w-full"
                >
                    {loading ? 'Submitting...' : 'Submit Recipe'}
                </button>
            </form>
        </section>
    );
};

export default AdminPage;
