import React, { Component } from 'react';
import RecipeInput from './RecipeInput';
import RecipeList from './RecipeList'; 
import Navbar from './Navbar';
import './RecipeApp.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          id: 1,
          title: "pasta",
          ingredients: ["flour", "water"],
          instructions: "Mix ingredients",
          img: "spaghetti.jpg",
      },
      {
          id: 2,
          title: "milkshake",
          ingredients: ["2 scoops ice cream", "8 ounces milk"],
          instructions: "Combine ice cream and milk. Blend until creamy.",
          img: "milkshake.webp",
      },
      {
          id: 3,
          title: "Avocado Toast",
          ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"],
          instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste.",
          img: "avocado.webp",
      }
      ],
      showForm: false,
    }
    this.handleSave = this.handleSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }
  handleSave(recipe) {
    this.setState((prevState) => {
      const newRecipe = {...recipe, id: this.state.recipes.length+1};
      return {
        recipes: [...this.state.recipes, newRecipe],
        showForm: false
      }
    })
  }
  onDelete(id) {
    const recipes = this.state.recipes.filter(r => r.id !== id );
    this.setState({recipes});
  }
  render() {
    const { showForm } = this.state;
    return (
      <div>
        <Navbar onNewRecipe={() => this.setState({showForm: true})}/>
        <div className="App">
        { showForm ? 
          <RecipeInput 
            onClose={() => this.setState({showForm: false})}
            onSave={this.handleSave}
          />
          : null
        }
          <RecipeList recipes={this.state.recipes} onDelete={this.onDelete}/>
        </div>
      </div>
    );
  }
}

export default App;
