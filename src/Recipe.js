import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Recipe.css';

class Recipe extends Component {
    render() {
        const { title, img, instructions, id, onDelete } = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
        ));
        return (
            <div className="recipe-card">
                <div>
                    <img className="recipe-card-img" src={img} alt={title}></img>   
                </div>
                <div className="recipe-card-content">
                    <h3 className="recipe-title">{title}</h3>
                    <h4>Ingredients:</h4>
                    <ul>{ingredients}</ul>
                    <h4>Instructions:</h4>
                    <p>{instructions}</p>
                    <button type="button" onClick={() => onDelete(id)}>DELETE</button>
                </div>                    
            </div>                
        )
    }
}
Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    instructions: PropTypes.string.isRequired,
    ingredients: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    onDelete: PropTypes.func.isRequired,
};
export default Recipe;