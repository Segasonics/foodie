import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

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

    const [fields, setFields] = useState(false);

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
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, prepTime, image, instructions, ingredients, category } = formData;
        if (!title || !prepTime || !image || !instructions[0] || !ingredients[0] || !category) {
            setFields(true);
            return;
        }

        setFields(false);
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
        <div className='flex flex-col justify-center items-center mt-10 lg:h-4/5'>
            {fields && (
                <p className='text-red-500 mb-5 text-xl transition-all duration-150 ease-in'>
                    Please fill in all the fields
                </p>
            )}
            <div className="flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full">
                {/* Image Upload Section */}
                <div className="bg-gray-200 p-3 flex flex-0.7 w-full">
                    <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-96">
                        {!formData.image ? (
                            <label>
                                <div className='flex flex-col items-center justify-center h-full'>
                                    <p className='text-2xl'><AiOutlineCloudUpload /></p>
                                    <p className="text-lg">Click to upload</p>
                                    <p className='mt-5 text-gray-400 text-center'>
                                        Use high-quality JPG, PNG, less than 2MB
                                    </p>
                                </div>
                                <input
                                    type='file'
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    className='w-0 h-0'
                                />
                            </label>
                        ) : (
                            <div className="relative h-full w-full">
                                <img
                                    src={formData.image}
                                    alt="uploaded"
                                    className="h-full w-full object-cover"
                                />
                                <button
                                    type='button'
                                    className='absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl hover:shadow-md'
                                    onClick={() => setFormData({ ...formData, image: '' })}
                                >
                                    <MdDelete />
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {/* Form Section */}
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full"
                >
                    <input
                        type='text'
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder='Recipe title'
                        className='outline-none text-2xl font-bold border-b-2 border-gray-200 p-2'
                        required
                    />
                    <input
                        type='text'
                        value={formData.prepTime}
                        onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                        placeholder='Preparation time (minutes)'
                        className='outline-none text-base border-b-2 border-gray-200 p-2'
                        required
                    />
                    <input
                        type='text'
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        placeholder='Category'
                        className='outline-none text-base border-b-2 border-gray-200 p-2'
                        required
                    />

                    {/* Ingredients */}
                    <div className='flex flex-col'>
                        <p className="mb-2 font-semibold text-lg">Ingredients</p>
                        {formData.ingredients.map((ing, i) => (
                            <input
                                key={i}
                                value={ing}
                                onChange={(e) => handleArrayChange(i, 'ingredients', e.target.value)}
                                placeholder={`Ingredient ${i + 1}`}
                                className="outline-none border-b-2 border-gray-200 p-2 mb-2"
                                required
                            />
                        ))}
                        <button type='button' onClick={() => addField('ingredients')} className='text-sm text-blue-600'>
                            + Add Ingredient
                        </button>
                    </div>

                    {/* Instructions */}
                    <div className='flex flex-col'>
                        <p className="mb-2 font-semibold text-lg">Instructions</p>
                        {formData.instructions.map((ins, i) => (
                            <input
                                key={i}
                                value={ins}
                                onChange={(e) => handleArrayChange(i, 'instructions', e.target.value)}
                                placeholder={`Step ${i + 1}`}
                                className="outline-none border-b-2 border-gray-200 p-2 mb-2"
                                required
                            />
                        ))}
                        <button type='button' onClick={() => addField('instructions')} className='text-sm text-blue-600'>
                            + Add Step
                        </button>
                    </div>

                    <div className="flex justify-end items-end mt-5">
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-yellow-500 cursor-pointer text-white font-bold p-2 rounded-full w-32'
                        >
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminPage;
