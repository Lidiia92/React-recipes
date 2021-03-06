import React from 'react';


class AddRecipe extends React.Component {

  handleChange = () => {

  }

  render() {
    return(
      <div className="App">
          <h2 className="App">Add Recipe</h2>
          <form className="form">
            <input type="text" name="name" onChange={this.handleChange} placeholder="Recipe Name"/>
            <select name="category" onChange={this.handleChange}>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
    
            <input type="text" name="description" onChange={this.handleChange} placeholder="Add description"/>
            <textarea name="instructions" placeholder="Add instructions" onChange={this.handleChange}></textarea>
            <button type="submit" className="button-primary">Submit</button>
          </form>
      </div>
      );
  }


}



export default AddRecipe;