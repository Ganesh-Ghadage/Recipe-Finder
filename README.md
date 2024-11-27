# 🍳 Recipe Finder 🍴

Recipe Finder is a web application that helps users discover recipes with ease. Whether you're searching for a recipe by name, browsing by categories like cuisine or meal type, or trying to whip up something delicious with the ingredients in your fridge, **Recipe Finder** has got you covered!

## 🚀 Features

### 🔍 **Search Recipes**
- Search for recipes by name or keyword.
- Get detailed results with recipe images, preparation instructions, and cooking time.

### 🍴 **Browse by Categories**
- Explore recipes by:
  - **Cuisines** (e.g., Italian, Indian, Chinese)
  - **Meal Types** (e.g., Breakfast, Lunch, Dinner, Snacks)
  - **Intolerances** (e.g., Gluten-free, Dairy-free, Vegan)

### 🥕 **What's in Your Fridge?**
- Enter the ingredients you have on hand, and the app suggests recipes you can make.
- Never let your ingredients go to waste again!

### 📋 **Recipe Details**
- View detailed instructions and ingredient lists for each recipe.
- See nutritional information (if available).

### 📦 **Save and Cache Recipes**
- Caches recently searched recipes for quicker access.
- View previously searched recipes offline (when supported by your browser).

---

## 🛠️ Tech Stack

- **Frontend**: React.js, TypeScript, Tailwind CSS
- **State Management**: Redux Toolkit
- **API Integration**: Spoonacular API
- **Caching**: LocalStorage
- **Routing**: React Router

---

## ⚙️ Installation and Setup

Follow these steps to run the Recipe Finder application locally:

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   ```
2. Navigate to the project directory:
   ```bash
   cd recipe-finder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Create a `.env` file in the root directory and add your Spoonacular API key:
   ```env
   REACT_APP_SPOONACULAR_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

---

## 🌟 Usage

### 1. **Search Recipes**
   - Type the name of a dish or ingredient into the search bar and hit "Search" to find recipes.

### 2. **Browse Categories**
   - Navigate through predefined categories such as cuisines, meal types, and dietary intolerances.

### 3. **What’s in Your Fridge**
   - Enter the ingredients you have at home, and the app will suggest recipes tailored to your pantry.

---

## 🗂️ Project Structure

```
src/
├── app/                # Redux store and hooks
├── components/         # Reusable UI components
├── features/           # Slices for recipes, errors, loading, etc.
├── pages/              # Application pages
├── services/           # API and utility services
├── custom-hooks/       # Custom React hooks
├── modal/              # Type Intefaces for Recipe, Menu, etc 
├── sampleData/         # Sample Data
├── index.css           # Tailwind CSS configurations
├── App.tsx             # Main application component
├── main.tsx            # Entry point
```

---

## 📚 API Documentation

This app uses the [Spoonacular API](https://spoonacular.com/food-api) for fetching recipe data. Ensure you have a valid API key for seamless integration.

---

## 🚀 Future Enhancements

- Add user authentication to save favorite recipes.
- Provide a meal planner feature.
- Enable recipe ratings and reviews.
- Add support for multiple languages.

---

## 👩‍💻 Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

---

## 🙌 Acknowledgments

- [Spoonacular API](https://spoonacular.com/food-api) for recipe data.
- All open-source contributors and libraries.

---

Feel free to customize this template to suit your project's specific details. Let me know if you'd like further adjustments!