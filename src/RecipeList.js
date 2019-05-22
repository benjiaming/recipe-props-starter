import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

class RecipeList extends Component {
    static defaultProps = {     
        recipes: [
        {
            title: "pasta",
            ingredients: ["flour", "water"],
            instructions: "Mix ingredients",
            img: "spaghetti.jpg",
        },
        {
            title: "milkshake",
            ingredients: ["2 scoops ice cream", "8 ounces milk"],
            instructions: "Combine ice cream and milk. Blend until creamy.",
            img: "milkshake.webp",
        },
        {
            title: "Avocado Toast",
            ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
            instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.",
            img: "avocado.webp",
        }
        ]
    }
    render() {
        const recipes = this.props.recipes.map((r, i) => <Recipe 
            key={i}
            title={r.title}
            ingredients={r.ingredients}
            instructions={r.instructions}
            img={r.img} 
            />);
    return (
        recipes
    );
    }
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default RecipeList;