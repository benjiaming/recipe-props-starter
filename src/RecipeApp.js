import React from 'react';
import RecipeList from './RecipeList'; 
import Navbar from './Navbar';
import './RecipeApp.css';

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <RecipeList />
      </div>
    </div>
  );
}

export default App;
