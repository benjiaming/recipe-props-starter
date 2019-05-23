import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Recipe from './Recipe';

class RecipeList extends Component {
    render() {
        const recipes = this.props.recipes.map((r, i) => <Recipe 
            key={r.id} {...r} onDelete={this.props.onDelete}
            />);
    return (
        <div className="recipe">{recipes}</div>
    );
    }
}

RecipeList.propTypes = {
    recipes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
}
export default RecipeList;