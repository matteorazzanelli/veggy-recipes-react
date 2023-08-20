// This is a simple js file

import axios from "axios"; 

class ClientApi {
  constructor(){
    /*axios base*/
    this.api = axios.create({
      baseURL: "https://api.spoonacular.com/recipes/",
      params: {
        addRecipeInformation: true,
        diet: "vegetarian",
        responseType: "json",
      },
    });
    this.apiKey = process.env.REACT_APP_API_KEY
  }

  async getRandomRecipes(number_of_recipes){
    return (await this.api.get(`random?apiKey=${this.apiKey}&number=${number_of_recipes}`)).data.recipes;
  }

  async getSearchedRecipes(value, intolerance, protein, vegan){
    let diet = vegan ? 'vegan' : 'vegetarian';
    return  (await this.api.get(`complexSearch?apiKey=${this.apiKey}&query=${value}&intolerances=${intolerance}&maxProtein=${protein}&diet=${diet}&number=10`)).data.results;
  }
}

const Request = new ClientApi();
export default Request;
