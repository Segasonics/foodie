import { config } from "dotenv";
import { Recipe } from '../models/recipe.model.js';
import { connectDB } from '../db/connectDB.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env from root `/foodie` directory
config({ path: path.resolve(__dirname, '../../.env') });

console.log('Mongo URI:', process.env.MONGODB_URI);
const seedRecipe = [
    //breakfast
    {
        title: "Avocado Toast with Egg",
        prepTime: "10",
        image: "https://www.eatingwell.com/thmb/ZHXRyJgN5ikb5Zk0SMw1XhQ8W9g=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/EWL-267169-avocado-egg-toast-Hero-02-037627ac211748fc857b5a69989fa8e9.jpg",
        instructions: [
            "Toast bread slices until golden",
            "Mash avocado with salt and lemon",
            "Fry an egg to your liking",
            "Spread avocado on toast, top with egg"
        ],
        category: "breakfast",
        ingredients: [
            "Bread",
            "Avocado",
            "Egg",
            "Salt",
            "Lemon juice"
        ],
        isFeatured: false
    },
    {
        title: "Banana Pancakes",
        prepTime: "20",
        image: "https://www.allrecipes.com/thmb/6x0Lw9L4MEU8INHnK4tXGRV9XWI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20334-banana-pancakes-i-DDMFS-4x3-9f291f03044247d48c9ec26917952402.jpg",
        instructions: [
            "Mash bananas in a bowl",
            "Add eggs and flour, mix well",
            "Heat a pan and cook pancakes on both sides",
            "Serve with honey or maple syrup"
        ],
        category: "breakfast",
        ingredients: [
            "Bananas",
            "Eggs",
            "Flour",
            "Baking powder",
            "Maple syrup"
        ],
        isFeatured: false
    },
    {
        title: "Overnight Oats",
        prepTime: "5",
        image: "https://www.howtocook.recipes/wp-content/uploads/2022/02/Overnight-oats-recipe-500x500.jpg",
        instructions: [
            "Mix oats, milk, chia seeds in a jar",
            "Add fruits or honey for sweetness",
            "Refrigerate overnight",
            "Enjoy chilled in the morning"
        ],
        category: "breakfast",
        ingredients: [
            "Rolled oats",
            "Milk or yogurt",
            "Chia seeds",
            "Honey",
            "Berries"
        ],
        isFeatured: true
    },
    {
        title: "Breakfast Burrito",
        prepTime: "25",
        image: "https://images.themodernproper.com/production/posts/BreakfastBurritos_13.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1712004278&s=744bbf8f96f8f7b3cc1ebf5c7c614007",
        instructions: [
            "Cook scrambled eggs with onions and peppers",
            "Add cheese and sausage",
            "Wrap in a warm tortilla",
            "Serve with salsa"
        ],
        category: "breakfast",
        ingredients: [
            "Tortilla",
            "Eggs",
            "Cheddar cheese",
            "Sausage",
            "Bell pepper"
        ],
        isFeatured: false
    },
    {
        title: "French Toast",
        prepTime: "15",
        image: "https://www.allrecipes.com/thmb/GHsW45mTpy_2EFSjCNEPdeo7Tek=/0x512/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-recipe-16895-fluffy-french-toast-hero-01-ddmfs-4x3-7fd61e054f2c4f0f868b7ab0dd8767ae.jpg",
        instructions: [
            "Beat eggs, milk, cinnamon",
            "Dip bread slices",
            "Fry in a buttered pan",
            "Serve with syrup"
        ],
        category: "breakfast",
        ingredients: [
            "Bread",
            "Eggs",
            "Milk",
            "Cinnamon",
            "Maple syrup"
        ],
        isFeatured: true
    },
    {
        title: "Smoothie Bowl",
        prepTime: "10",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg?resize=768,574",
        instructions: [
            "Blend frozen fruits with yogurt or milk",
            "Pour into a bowl",
            "Top with granola and nuts"
        ],
        category: "breakfast",
        ingredients: [
            "Frozen berries",
            "Banana",
            "Greek yogurt",
            "Granola",
            "Almonds"
        ],
        isFeatured: false
    },
    {
        title: "Egg Muffins",
        prepTime: "30",
        image: "https://www.allrecipes.com/thmb/yhBtMEah5MwbaQbjcHugOFmOOyY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/222586-scrambled-egg-muffins-ddmfs-hero-3x4-1154-d360cd8ba05840d98a87692d551c54f6.jpg",
        instructions: [
            "Beat eggs and pour into muffin tin",
            "Add vegetables and cheese",
            "Bake for 20 minutes at 180°C"
        ],
        category: "breakfast",
        ingredients: [
            "Eggs",
            "Spinach",
            "Bell peppers",
            "Cheese",
            "Salt"
        ],
        isFeatured: false
    },
    {
        title: "Granola Parfait",
        prepTime: "5",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2FPhoto%2FRecipes%2F2022-01_Yogurt-Parfait%2F2022-01-05_ATK-0852",
        instructions: [
            "Layer yogurt, granola, and fruits in a glass",
            "Repeat layers",
            "Top with honey"
        ],
        category: "breakfast",
        ingredients: [
            "Greek yogurt",
            "Granola",
            "Strawberries",
            "Blueberries",
            "Honey"
        ],
        isFeatured: false
    },
    {
        title: "Breakfast Quesadilla",
        prepTime: "20",
        image: "https://plantnspice.com/wp-content/uploads/2022/07/featured-1.jpg",
        instructions: [
            "Scramble eggs with veggies",
            "Add to tortilla with cheese",
            "Fold and grill until crispy"
        ],
        category: "breakfast",
        ingredients: [
            "Tortilla",
            "Eggs",
            "Cheese",
            "Tomatoes",
            "Spinach"
        ],
        isFeatured: false
    },
    {
        title: "Pikelets – an Aussie favourite!",
        prepTime: "30",
        image: "https://i.ytimg.com/vi/szys7I3jEFw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdx-1FaSuSWgF_QE5-IH4CRLyJzA",
        instructions: [
            "Whisk dry ingredients in a bowl",
            "Make a well in the centre. Add the egg, milk and vanilla then whisk until combined and almost lump free",
            "Cook – Melt just 1 teaspoon of butter in a non stick pan over medium high heat",
            "Bubbles – Cook for 1 1/2 minutes"
        ],
        category: "breakfast",
        ingredients: [
            "Plain flour",
            "Baking powder",
            "Sugar",
            "Milk",
            "Vanilla"
        ],
        isFeatured: false
    },
    //main course
    {
        title: "Spaghetti Bolognese",
        prepTime: "45",
        image: "https://img.taste.com.au/5qlr1PkR/taste/2016/11/spaghetti-bolognese-106560-1.jpeg",
        instructions: [
            "Cook spaghetti according to package instructions",
            "Brown ground beef with onions and garlic",
            "Add tomato sauce and simmer for 25 minutes",
            "Serve sauce over spaghetti"
        ],
        category: "main course",
        ingredients: [
            "Spaghetti",
            "Ground beef",
            "Tomato sauce",
            "Onion",
            "Garlic"
        ],
        isFeatured: true
    },
    {
        title: "Grilled Chicken with Veggies",
        prepTime: "30",
        image: "https://www.jocooks.com/wp-content/uploads/2020/03/roasted-chicken-and-vegetables-1-9.jpg",
        instructions: [
            "Marinate chicken in olive oil, lemon, and herbs",
            "Grill chicken until cooked through",
            "Roast or steam vegetables",
            "Serve together"
        ],
        category: "main course",
        ingredients: [
            "Chicken breast",
            "Zucchini",
            "Bell pepper",
            "Olive oil",
            "Lemon"
        ],
        isFeatured: false
    },
    {
        title: "Beef Stir Fry",
        prepTime: "25",
        image: "https://cleanfoodcrush.com/wp-content/uploads/2022/05/Beef-and-broccoli-stir-fry-5.jpg",
        instructions: [
            "Slice beef thinly and marinate with soy sauce",
            "Stir fry vegetables in a hot pan",
            "Add beef and cook quickly until browned",
            "Serve over rice"
        ],
        category: "main course",
        ingredients: [
            "Beef strips",
            "Soy sauce",
            "Broccoli",
            "Carrot",
            "Rice"
        ],
        isFeatured: false
    },
    {
        title: "Butter Chicken",
        prepTime: "60",
        image: "https://static01.nyt.com/images/2024/10/29/multimedia/Butter-Chickenrex-tbvz/Butter-Chickenrex-tbvz-mediumSquareAt3X.jpg",
        instructions: [
            "Cook marinated chicken pieces in a pan",
            "Add tomato-based sauce and cream",
            "Simmer for 20 minutes",
            "Serve with naan or rice"
        ],
        category: "main course",
        ingredients: [
            "Chicken",
            "Tomato puree",
            "Cream",
            "Butter",
            "Spices"
        ],
        isFeatured: true
    },
    {
        title: "Veggie Lasagna",
        prepTime: "50",
        image: "https://wendypolisi.com/wp-content/uploads/2021/02/SQ-veggie-lasagna.jpg",
        instructions: [
            "Layer lasagna sheets, veggie filling, and cheese",
            "Bake at 180°C for 40 minutes",
            "Let cool slightly before serving"
        ],
        category: "main course",
        ingredients: [
            "Lasagna noodles",
            "Zucchini",
            "Spinach",
            "Ricotta cheese",
            "Tomato sauce"
        ],
        isFeatured: false
    },
    {
        title: "Fish Tacos",
        prepTime: "20",
        image: "https://www.allrecipes.com/thmb/_emMPu4gpcuCOoC0kfjRWIdHlmc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/53729-fish-tacos-DDMFS-4x3-b5547c67c6f0432da06ad8f905e82c1e.jpg",
        instructions: [
            "Grill or pan-fry seasoned fish",
            "Warm tortillas",
            "Assemble with cabbage slaw and sauce",
            "Serve with lime wedges"
        ],
        category: "main course",
        ingredients: [
            "White fish fillet",
            "Cabbage",
            "Tortillas",
            "Lime",
            "Yogurt or sour cream"
        ],
        isFeatured: false
    },
    {
        title: "Stuffed Bell Peppers",
        prepTime: "40",
        image: "https://www.allrecipes.com/thmb/eBsB2933MCuNVCim4O-AyCR97YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79805-StuffedPeppersWithturkeyAndVegtables-MFS-2x3-0048-444ecb49b0184daab29e5326e4330af3.jpg",
        instructions: [
            "Hollow out bell peppers",
            "Stuff with rice, ground meat, and spices",
            "Bake for 30 minutes at 180°C"
        ],
        category: "main course",
        ingredients: [
            "Bell peppers",
            "Ground beef",
            "Cooked rice",
            "Onion",
            "Tomato paste"
        ],
        isFeatured: false
    },
    {
        title: "Shrimp Alfredo Pasta",
        prepTime: "30",
        image: "https://mortadellahead.com/wp-content/uploads/2024/03/garlicky-shrimp-alfredo-bake-recipe.png",
        instructions: [
            "Cook pasta and set aside",
            "Sauté shrimp with garlic and butter",
            "Add cream and cheese to make sauce",
            "Toss pasta with sauce and shrimp"
        ],
        category: "main course",
        ingredients: [
            "Pasta",
            "Shrimp",
            "Heavy cream",
            "Parmesan cheese",
            "Garlic"
        ],
        isFeatured: true
    },
    {
        title: "Chickpea Curry",
        prepTime: "35",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/2016-04-18-bbc2970-489e655.jpg?quality=90&resize=400,363",
        instructions: [
            "Sauté onion, garlic, and ginger",
            "Add spices and canned chickpeas",
            "Simmer in tomato sauce and coconut milk",
            "Serve with rice or naan"
        ],
        category: "main course",
        ingredients: [
            "Chickpeas",
            "Tomatoes",
            "Coconut milk",
            "Garam masala",
            "Onion"
        ],
        isFeatured: false
    },
    {
        title: "BBQ Pulled Pork Sandwich",
        prepTime: "240",
        image: "https://www.thatzestlife.com/wp-content/uploads/2021/04/barbecue-pork-sandwich.jpg",
        instructions: [
            "Slow cook pork with BBQ sauce for 4 hours",
            "Shred pork with forks",
            "Serve in buns with coleslaw"
        ],
        category: "main course",
        ingredients: [
            "Pork shoulder",
            "BBQ sauce",
            "Burger buns",
            "Coleslaw mix",
            "Vinegar"
        ],
        isFeatured: false
    },
    //deserts
    {
        title: "Classic Chocolate Brownies",
        prepTime: "40",
        image: "https://www.sweetishhousemafia.com/cdn/shop/files/ClassicBrownie_1200x.jpg?v=1716046003",
        instructions: [
            "Preheat oven to 350°F (175°C)",
            "Melt butter and mix with sugar, eggs, and vanilla",
            "Add cocoa, flour, baking powder, and salt",
            "Pour into greased pan and bake for 30 minutes"
        ],
        category: "desserts",
        ingredients: [
            "Butter", "Sugar", "Eggs", "Vanilla extract",
            "Cocoa powder", "All-purpose flour", "Baking powder", "Salt"
        ],
        isFeatured: true
    },
    {
        title: "Strawberry Cheesecake",
        prepTime: "60",
        image: "https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/no-bake_strawberry_30276_16x9.jpg",
        instructions: [
            "Make a graham cracker crust and chill",
            "Beat cream cheese, sugar, and eggs",
            "Pour filling into crust and bake for 50 minutes",
            "Top with fresh strawberries and chill"
        ],
        category: "desserts",
        ingredients: [
            "Graham crackers", "Butter", "Cream cheese", "Sugar",
            "Eggs", "Vanilla extract", "Strawberries"
        ],
        isFeatured: false
    },
    {
        title: "Lemon Tart",
        prepTime: "50",
        image: "https://recipesblob.oetker.ca/assets/232ec0777fce4425a0cbb4401558dd79/1272x764/lemon-tarte-11.webp",
        instructions: [
            "Prepare tart shell and blind bake",
            "Mix lemon juice, zest, eggs, sugar, and cream",
            "Pour into shell and bake until set",
            "Cool and garnish with powdered sugar"
        ],
        category: "desserts",
        ingredients: [
            "Flour", "Butter", "Eggs", "Lemon juice", "Lemon zest",
            "Sugar", "Heavy cream"
        ],
        isFeatured: false
    },
    {
        title: "Chocolate Mousse",
        prepTime: "25",
        image: "https://www.allrecipes.com/thmb/h1-rRJcI_8AMavPqqlBnwVIO3vA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/IMG_8145_Chocolate-Mousse-for-Beginners-4x3-cropped-757ae43035ff48cc8bc9ccffbd6cf3b7.jpg",
        instructions: [
            "Melt chocolate and let cool slightly",
            "Whip cream to soft peaks",
            "Fold whipped cream into chocolate gently",
            "Chill before serving"
        ],
        category: "desserts",
        ingredients: [
            "Dark chocolate", "Heavy cream", "Sugar", "Vanilla extract"
        ],
        isFeatured: true
    },
    {
        title: "Banana Bread",
        prepTime: "60",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2PFQJelWniS2IpePLh6CftfZKB9i6VA0HQ&s",
        instructions: [
            "Preheat oven to 350°F (175°C)",
            "Mash bananas and mix with eggs, sugar, and butter",
            "Add flour, baking soda, and salt",
            "Pour into loaf pan and bake for 50–60 minutes"
        ],
        category: "desserts",
        ingredients: [
            "Bananas", "Eggs", "Sugar", "Butter", "Flour",
            "Baking soda", "Salt"
        ],
        isFeatured: false
    },
    {
        title: "Apple Pie",
        prepTime: "90",
        image: "https://recipe30.com/wp-content/uploads/2020/11/Apple-pie.jpg",
        instructions: [
            "Prepare pie crust",
            "Toss apple slices with sugar, cinnamon, and flour",
            "Fill crust, add top crust, and crimp edges",
            "Bake at 375°F for 50 minutes"
        ],
        category: "desserts",
        ingredients: [
            "Apples", "Sugar", "Cinnamon", "All-purpose flour", "Butter",
            "Pie crust"
        ],
        isFeatured: true
    },
    {
        title: "Tiramisu",
        prepTime: "45",
        image: "https://tastesbetterfromscratch.com/wp-content/uploads/2017/04/Tiramisu-15-500x500.jpg",
        instructions: [
            "Mix mascarpone with sugar and whipped cream",
            "Dip ladyfingers in coffee and layer with cream",
            "Repeat layers and chill",
            "Dust with cocoa before serving"
        ],
        category: "desserts",
        ingredients: [
            "Mascarpone cheese", "Sugar", "Heavy cream", "Ladyfingers",
            "Coffee", "Cocoa powder"
        ],
        isFeatured: false
    },
    {
        title: "Vanilla Ice Cream",
        prepTime: "240",
        image: "https://imgstore.sndimg.com/magnolia/images/6414049a-1aa9-46b0-b9ee-ba2c20dca3c9.jpg",
        instructions: [
            "Whisk eggs and sugar until fluffy",
            "Add cream, milk, and vanilla",
            "Churn in ice cream maker and freeze"
        ],
        category: "desserts",
        ingredients: [
            "Eggs", "Sugar", "Milk", "Heavy cream", "Vanilla extract"
        ],
        isFeatured: false
    },
    {
        title: "Chocolate Chip Cookies",
        prepTime: "35",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW-V9nWfdKh4j6dJmFkmxcPNwdkikPZRHHTA&s",
        instructions: [
            "Preheat oven to 375°F",
            "Cream butter and sugars, add eggs and vanilla",
            "Add flour, baking soda, salt, and chocolate chips",
            "Scoop onto baking sheet and bake for 10–12 minutes"
        ],
        category: "desserts",
        ingredients: [
            "Butter", "Brown sugar", "White sugar", "Eggs", "Vanilla extract",
            "Flour", "Baking soda", "Salt", "Chocolate chips"
        ],
        isFeatured: true
    },
    {
        title: "Pavlova",
        prepTime: "90",
        image: "https://www.sugarsaltmagic.com/wp-content/uploads/2024/11/The-Perfect-Pavlova-Recipe-2FEAT-500x375.jpg",
        instructions: [
            "Whisk egg whites until stiff peaks form",
            "Add sugar gradually, then vinegar and cornstarch",
            "Bake meringue low and slow",
            "Top with whipped cream and fruit"
        ],
        category: "desserts",
        ingredients: [
            "Egg whites", "Sugar", "Cornstarch", "White vinegar",
            "Whipping cream", "Fresh fruits"
        ],
        isFeatured: false
    },
    //quick meals
    {
        title: "30-Minute Stir-Fry",
        prepTime: "30",
        image: "https://cdn.momsdish.com/wp-content/uploads/2023/08/Chicken-Stir-Fry-08.jpg",
        instructions: [
            "Heat oil in a pan and sauté vegetables",
            "Add your choice of protein (chicken/tofu)",
            "Stir in soy sauce and seasoning",
            "Serve with cooked rice or noodles"
        ],
        category: "quickmeals",
        ingredients: [
            "Vegetables (broccoli, bell peppers)",
            "Tofu or chicken",
            "Soy sauce",
            "Rice or noodles"
        ],
        isFeatured: false
    },
    {
        title: "Egg Fried Rice",
        prepTime: "15",
        image: "https://www.seriouseats.com/thmb/BJjCEDw9OZe95hpZxmNcD3rJnHo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230529-SEA-EggFriedRice-AmandaSuarez-hero-c8d95fbf69314b318bc279159f582882.jpg",
        instructions: [
            "Cook rice and set aside to cool",
            "Fry eggs in a pan",
            "Add cooked rice, peas, and soy sauce",
            "Stir-fry for a few minutes and serve"
        ],
        category: "quickmeals",
        ingredients: [
            "Rice",
            "Eggs",
            "Frozen peas",
            "Soy sauce"
        ],
        isFeatured: false
    },
    {
        title: "Chicken Quesadillas",
        prepTime: "20",
        image: "https://www.julieseatsandtreats.com/wp-content/uploads/2024/10/Chicken-Quesadilla-Square.jpg",
        instructions: [
            "Cook chicken with seasoning",
            "Add chicken, cheese, and salsa to tortillas",
            "Grill until cheese melts and tortillas are golden",
            "Serve with sour cream"
        ],
        category: "quickmeals",
        ingredients: [
            "Chicken",
            "Tortillas",
            "Cheese",
            "Salsa",
            "Sour cream"
        ],
        isFeatured: false
    },
    {
        title: "Spaghetti Aglio e Olio",
        prepTime: "20",
        image: "https://walkingthroughlavenderfields.com/wp-content/uploads/2022/09/aglio-e-olio-e-peperoncino-01.jpeg",
        instructions: [
            "Boil spaghetti until al dente",
            "Sauté garlic and chili flakes in olive oil",
            "Toss the pasta in the oil mixture",
            "Garnish with parsley and parmesan"
        ],
        category: "quickmeals",
        ingredients: [
            "Spaghetti",
            "Garlic",
            "Chili flakes",
            "Olive oil",
            "Parmesan"
        ],
        isFeatured: false
    },
    {
        title: "Chicken Caesar Salad",
        prepTime: "25",
        image: "https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051-500x375.jpg",
        instructions: [
            "Grill chicken and slice it",
            "Toss lettuce with Caesar dressing and croutons",
            "Top with grilled chicken and parmesan"
        ],
        category: "quickmeals",
        ingredients: [
            "Chicken",
            "Lettuce",
            "Caesar dressing",
            "Croutons",
            "Parmesan"
        ],
        isFeatured: false
    },
    {
        title: "Veggie Burger",
        prepTime: "30",
        image: "https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg",
        instructions: [
            "Cook veggie patties",
            "Assemble with lettuce, tomato, and pickles",
            "Serve in a bun with ketchup"
        ],
        category: "quickmeals",
        ingredients: [
            "Veggie patties",
            "Lettuce",
            "Tomato",
            "Pickles",
            "Bun"
        ],
        isFeatured: false
    },
    {
        title: "Breakfast Burrito",
        prepTime: "20",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS9W8IyO6vp7N595bTfc3fC_pKQ9uwBjNQug&s",
        instructions: [
            "Scramble eggs and sauté veggies",
            "Fill tortillas with eggs, cheese, and salsa",
            "Wrap and serve"
        ],
        category: "quickmeals",
        ingredients: [
            "Eggs",
            "Cheese",
            "Veggies (onions, peppers)",
            "Tortillas",
            "Salsa"
        ],
        isFeatured: false
    },
    //vegeterian
    {
        title: "Vegetarian Chili",
        prepTime: "45",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnjJMRLZ2GhOOoTiJsFNb6Saj13emRFmTX-g&s",
        instructions: [
            "Sauté onions and garlic",
            "Add beans, tomatoes, and chili powder",
            "Simmer for 30 minutes",
            "Serve with rice or bread"
        ],
        category: "vegetarian",
        ingredients: [
            "Onions",
            "Garlic",
            "Kidney beans",
            "Tomatoes",
            "Chili powder"
        ],
        isFeatured: false
    },
    {
        title: "Vegetable Tacos",
        prepTime: "25",
        image: "https://www.tasteofhome.com/wp-content/uploads/2024/08/Veggie-Tacos_EXPS_FT24_32191_JR_0823_1.jpg",
        instructions: [
            "Roast vegetables (zucchini, bell peppers, onions)",
            "Warm tortillas",
            "Assemble with vegetables, cheese, and salsa",
            "Serve with sour cream"
        ],
        category: "vegetarian",
        ingredients: [
            "Zucchini",
            "Bell peppers",
            "Tortillas",
            "Cheese",
            "Salsa"
        ],
        isFeatured: false
    },
    {
        title: "Caprese Salad",
        prepTime: "15",
        image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_1:1/k%2Farchive%2F3b432b41ce04c96a08d77befa42b9881a587a436",
        instructions: [
            "Layer fresh mozzarella, tomatoes, and basil",
            "Drizzle with balsamic glaze and olive oil",
            "Sprinkle with salt and pepper"
        ],
        category: "vegetarian",
        ingredients: [
            "Mozzarella",
            "Tomatoes",
            "Basil",
            "Balsamic glaze",
            "Olive oil"
        ],
        isFeatured: false
    },
    {
        title: "Spinach and Feta Quiche",
        prepTime: "60",
        image: "https://images.immediate.co.uk/production/volatile/sites/30/2022/09/Spinatquiche-mit-Feta-2-5a65830.jpg?quality=90&resize=556,505",
        instructions: [
            "Prepare the crust and blind-bake",
            "Mix spinach, feta, eggs, and cream",
            "Pour into the crust and bake until set"
        ],
        category: "vegetarian",
        ingredients: [
            "Spinach",
            "Feta cheese",
            "Eggs",
            "Heavy cream",
            "Pie crust"
        ],
        isFeatured: false
    },
    {
        title: "Veggie Burger",
        prepTime: "30",
        image: "https://upload.wikimedia.org/wikipedia/commons/e/e0/%D7%94%D7%9E%D7%91%D7%95%D7%A8%D7%92%D7%A8_%D7%98%D7%91%D7%A2%D7%95%D7%A0%D7%99.jpg",
        instructions: [
            "Cook veggie patties",
            "Assemble with lettuce, tomato, and pickles",
            "Serve in a bun with ketchup"
        ],
        category: "vegetarian",
        ingredients: [
            "Veggie patties",
            "Lettuce",
            "Tomato",
            "Pickles",
            "Bun"
        ],
        isFeatured: false
    },
    {
        title: "Stuffed Bell Peppers",
        prepTime: "40",
        image: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2016/2/26/2/WU1307H_stuffed-peppers_s4x3.jpg.rend.hgtvcom.1280.720.suffix/1463506005081.webp",
        instructions: [
            "Stuff bell peppers with rice, beans, and cheese",
            "Bake at 180°C (350°F) for 30 minutes",
            "Serve with sour cream"
        ],
        category: "vegetarian",
        ingredients: [
            "Bell peppers",
            "Rice",
            "Black beans",
            "Cheese",
            "Sour cream"
        ],
        isFeatured: false
    },
    {
        title: "Vegetable Stir-Fry",
        prepTime: "25",
        image: "https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png",
        instructions: [
            "Stir-fry mixed vegetables with soy sauce",
            "Serve with cooked rice or noodles"
        ],
        category: "vegetarian",
        ingredients: [
            "Mixed vegetables",
            "Soy sauce",
            "Rice or noodles"
        ],
        isFeatured: false
    },
    //baking
    {
        title:"Chocolate Chip Cookies",
        prepTime: "30",
        image: "https://handletheheat.com/wp-content/uploads/2020/10/BAKERY-STYLE-CHOCOLATE-CHIP-COOKIES-9-637x637-1-500x500.jpg",
        instructions: [
            "Cream together butter, sugar, and eggs",
            "Stir in flour, baking soda, and chocolate chips",
            "Scoop dough onto baking sheet and bake at 180°C (350°F) for 10-12 minutes",
            "Cool on a wire rack"
        ],
        category: "baking",
        ingredients: [
            "Butter",
            "Sugar",
            "Eggs",
            "Flour",
            "Chocolate chips"
        ],
        isFeatured: false
    },
    {
        title: "Banana Bread",
        prepTime: "70",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE7CFi8dYQbsnR4i1lbQZU7irHJgnjipmiSQ&s",
        instructions: [
            "Mash ripe bananas",
            "Mix with butter, sugar, eggs, and flour",
            "Pour into loaf pan and bake at 175°C (350°F) for 50-60 minutes",
            "Let cool before slicing"
        ],
        category: "baking",
        ingredients: [
            "Bananas",
            "Butter",
            "Sugar",
            "Eggs",
            "Flour"
        ],
        isFeatured: false
    },
    {
        title: "Blueberry Muffins",
        prepTime: "40",
        image: "https://www.allrecipes.com/thmb/8Qng6KhaZ5n6SZbRPoF4QTGaTI8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-6865-To-Die-For-Blueberry-Muffins-ddmfs-4x3-78c12ec9b46e4225aed6317f592b1bf2.jpg",
        instructions: [
            "Mix flour, sugar, and baking powder",
            "Add blueberries and milk",
            "Bake at 190°C (375°F) for 20 minutes"
        ],
        category: "baking",
        ingredients: [
            "Flour",
            "Sugar",
            "Baking powder",
            "Blueberries",
            "Milk"
        ],
        isFeatured: false
    },
    {
        title: "Cinnamon Rolls",
        prepTime: "90",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-pHplhFOuPND1fYM-MPag6PI1vZZd6DiyJQ&s",
        instructions: [
            "Roll dough and sprinkle with cinnamon sugar",
            "Roll into a log and slice",
            "Bake at 180°C (350°F) for 20-25 minutes",
            "Top with icing"
        ],
        category: "baking",
        ingredients: [
            "Dough",
            "Cinnamon",
            "Sugar",
            "Icing"
        ],
        isFeatured: false
    },
    {
        title: "Apple Pie",
        prepTime: "120",
        image: "https://recipe30.com/wp-content/uploads/2020/11/Apple-pie.jpg",
        instructions: [
            "Prepare pie crust and fill with apple slices",
            "Add sugar and cinnamon",
            "Bake at 180°C (350°F) for 45-50 minutes"
        ],
        category: "baking",
        ingredients: [
            "Pie crust",
            "Apples",
            "Sugar",
            "Cinnamon"
        ],
        isFeatured: false
    },
    {
        title: "Lemon Pound Cake",
        prepTime: "90",
        image: "https://www.foodandwine.com/thmb/TPXHBJxGwYx8RmLSOV9QGH897Yc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Lemon-Pound-Cake-FT-RECIPE0223-29e941c231f74eb687af1e1c330b0adf.jpg",
        instructions: [
            "Cream together butter, sugar, and eggs",
            "Add lemon zest and juice",
            "Bake at 180°C (350°F) for 45-50 minutes"
        ],
        category: "baking",
        ingredients: [
            "Butter",
            "Sugar",
            "Eggs",
            "Lemon zest",
            "Flour"
        ],
        isFeatured: false
    },
    {
        title: "Pumpkin Pie",
        prepTime: "120",
        image: "https://www.marthastewart.com/thmb/cx64ubkNNgZl2450F2__DbhOc6s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MSL-1511079-pumpkin-pie-hero-3x2-11511-c9c4b6f36f6544578ea9166ae998b1af.jpeg",
        instructions: [
            "Mix pumpkin puree, eggs, and spices",
            "Pour into pie crust and bake at 180°C (350°F) for 45-50 minutes"
        ],
        category: "baking",
        ingredients: [
            "Pumpkin puree",
            "Eggs",
            "Spices",
            "Pie crust"
        ],
        isFeatured: false
    },
    //international
     {
    title: "Sushi Rolls",
    prepTime: "45",
    image: "https://japanesetaste.com/cdn/shop/articles/how-to-make-makizushi-sushi-rolls-japanese-taste.jpg?v=1707913754&width=5760",
    instructions: [
      "Cook sushi rice and let it cool",
      "Spread rice on nori sheets, add fillings (salmon, avocado, cucumber)",
      "Roll tightly and slice into pieces",
      "Serve with soy sauce and wasabi"
    ],
    category: "international",
    ingredients: [
      "Sushi rice",
      "Nori sheets",
      "Salmon",
      "Avocado",
      "Cucumber"
    ],
    isFeatured: false
  },
  {
    title: "Pad Thai",
    prepTime: "30",
    image: "https://www.recipetineats.com/tachyon/2020/01/Chicken-Pad-Thai_9-SQ.jpg?resize=500%2C500",
    instructions: [
      "Stir-fry noodles, vegetables, and tofu",
      "Add sauce ingredients (fish sauce, lime, sugar)",
      "Garnish with peanuts and lime wedges",
      "Serve hot"
    ],
    category: "international",
    ingredients: [
      "Rice noodles",
      "Tofu",
      "Vegetables",
      "Fish sauce",
      "Lime"
    ],
    isFeatured: false
  },
  {
    title: "Chicken Biryani",
    prepTime: "90",
    image: "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Chicken-Biryani-Recipe.jpg",
    instructions: [
      "Cook chicken with spices",
      "Layer with cooked rice and cook on low heat for 30 minutes",
      "Serve with raita"
    ],
    category: "international",
    ingredients: [
      "Chicken",
      "Rice",
      "Spices",
      "Raita"
    ],
    isFeatured: false
  },
  {
    title: "Falafel",
    prepTime: "40",
    image: "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/10/Falafel-main-2.jpg",
    instructions: [
      "Blend chickpeas, herbs, and spices",
      "Form into balls and fry",
      "Serve with pita bread and hummus"
    ],
    category: "international",
    ingredients: [
      "Chickpeas",
      "Herbs",
      "Spices",
      "Pita bread",
      "Hummus"
    ],
    isFeatured: false
  },
  {
    title: "Pizza Margherita",
    prepTime: "50",
    image: "https://safrescobaldistatic.blob.core.windows.net/media/2022/11/PIZZA-MARGHERITA.jpg",
    instructions: [
      "Prepare pizza dough",
      "Top with tomato sauce, mozzarella, and basil",
      "Bake until golden"
    ],
    category: "international",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella",
      "Basil"
    ],
    isFeatured: false
  },
  {
    title: "Ramen",
    prepTime: "60",
    image: "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipes%2F2024-03-tonkotsu-ramen%2Ftonkotsu-ramen-195",
    instructions: [
      "Cook ramen noodles",
      "Prepare broth with soy sauce, miso, and broth",
      "Top with boiled egg, vegetables, and pork"
    ],
    category: "international",
    ingredients: [
      "Ramen noodles",
      "Soy sauce",
      "Miso",
      "Broth",
      "Egg"
    ],
    isFeatured: false
  },
  //healthy
   {
    title: "Grilled Salmon with Quinoa",
    prepTime: "30",
    image: "https://mission-food.com/wp-content/uploads/2017/07/Salmon-with-Quinoa-Salad-and-Arugula-Chimichurri-8.jpg",
    instructions: [
      "Season salmon with herbs and grill until cooked",
      "Cook quinoa separately",
      "Serve salmon over quinoa with a side of steamed vegetables"
    ],
    category: "healthy",
    ingredients: [
      "Salmon",
      "Quinoa",
      "Vegetables",
      "Herbs"
    ],
    isFeatured: false
  },
  {
    title: "Avocado Toast with Poached Egg",
    prepTime: "15",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIoUnCkaBqFrl5E90_Pka_3DnIxzymi7Uu8A&s",
    instructions: [
      "Toast whole grain bread",
      "Top with mashed avocado",
      "Add poached egg on top and season with pepper"
    ],
    category: "healthy",
    ingredients: [
      "Whole grain bread",
      "Avocado",
      "Egg",
      "Pepper"
    ],
    isFeatured: false
  },
  {
    title: "Chickpea Salad",
    prepTime: "10",
    image: "https://www.themediterraneandish.com/wp-content/uploads/2023/12/TMD-Chickpea-Salad-Leads-01-Angle-Horizontal-500x500.jpg",
    instructions: [
      "Mix chickpeas with diced cucumber, tomatoes, and onions",
      "Add lemon juice and olive oil dressing",
      "Serve chilled"
    ],
    category: "healthy",
    ingredients: [
      "Chickpeas",
      "Cucumber",
      "Tomatoes",
      "Onion",
      "Lemon juice",
      "Olive oil"
    ],
    isFeatured: false
  },
  {
    title: "Zucchini Noodles with Pesto",
    prepTime: "20",
    image: "https://www.plantbasedcooking.com/wp-content/uploads/2023/10/Zucchini-Noodles-with-Pesto-480x270.jpg",
    instructions: [
      "Spiralize zucchini into noodles",
      "Toss with homemade pesto",
      "Serve raw or lightly sautéed"
    ],
    category: "healthy",
    ingredients: [
      "Zucchini",
      "Basil",
      "Pine nuts",
      "Olive oil",
      "Garlic"
    ],
    isFeatured: false
  },
  {
    title: "Berry Yogurt Parfait",
    prepTime: "5",
    image: "https://thetastybalance.com/wp-content/uploads/2021/06/EFD105AA-B100-400C-92E5-621E94DB3FAF_1_201_a-scaled.jpeg",
    instructions: [
      "Layer Greek yogurt, mixed berries, and granola",
      "Repeat layers and top with honey",
      "Serve chilled"
    ],
    category: "healthy",
    ingredients: [
      "Greek yogurt",
      "Berries",
      "Granola",
      "Honey"
    ],
    isFeatured: false
  },
  {
    title: "Stuffed Bell Peppers",
    prepTime: "40",
    image: "https://www.giverecipe.com/wp-content/uploads/2017/06/Feta-Cheese-Stuffed-Peppers-2.jpg",
    instructions: [
      "Cut tops off bell peppers and remove seeds",
      "Stuff with mixture of brown rice, beans, and veggies",
      "Bake at 180°C (350°F) for 25-30 minutes"
    ],
    category: "healthy",
    ingredients: [
      "Bell peppers",
      "Brown rice",
      "Black beans",
      "Vegetables",
      "Spices"
    ],
    isFeatured: false
  }
]


const seedDatabase = async () => {
  try {
    await connectDB();
    await Recipe.insertMany(seedRecipe);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();