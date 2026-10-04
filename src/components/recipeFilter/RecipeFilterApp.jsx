import React, { useState } from "react";
import "./styles.css";
import recipesData from "./recipesData";

const RecipeFilterApp = () => {
  const [recipeList, setRecipeList] = useState(recipesData);
  const [cartCount, setCartCount] = useState(0);
  const handleFilterByRatingChange = (e) => {
    const ratingValueSelected = e.target.value;
    if (ratingValueSelected.includes("+")) {
      setRecipeList(
        recipesData.filter(
          (recipe) =>
            recipe.rating >=
            ratingValueSelected.slice(0, ratingValueSelected.length - 1),
        ),
      );
    } else {
      setRecipeList(
        recipesData.filter(
          (recipe) => recipe.rating >= parseFloat(ratingValueSelected),
        ),
      );
    }
  };
  const avgRating =
    recipeList.reduce((acc, recipe) => acc + recipe.rating, 0) /
    recipeList.length;
  return (
    <div className="recipe-filter-app">
      <h1>🍽️ Recipe Explorer</h1>
      <div className="controls">
        <div className="filter-group">
          <label>Filter by rating : </label>
          <select
            name="filter_rate_by_rating"
            id="filter-by-rating"
            onChange={handleFilterByRatingChange}
          >
            <option value="4.0+">4.0+</option>
            <option value="4.3+">4.3+</option>
            <option value="4.5+">4.5+</option>
            <option value="4.7+">4.7+</option>
            <option value="4.9">4.9</option>
          </select>
        </div>
        <p className="cart-count">🛒 Cart Items: {cartCount}</p>
      </div>
      <h2 className="stats">
        Average Rating: {parseFloat(avgRating).toFixed(2)} ({recipeList.length}{" "}
        recipes)
      </h2>
      <div className="recipe-list-container">
        {recipeList.map(({ name, image, id, cuisine, rating, reviewCount }) => (
          <div className="recipe" id={id}>
            <img src={image} alt={cuisine} />
            <h3>{name}</h3>
            <p>🍴 Cuisine: {cuisine}</p>
            <p>
              ⭐ Rating: {rating} ({reviewCount}{" "}
              {reviewCount === 1 ? "review" : "reviews"})
            </p>
            <button onClick={() => setCartCount(cartCount + 1)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
