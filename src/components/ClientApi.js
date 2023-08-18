// This is a simple js file

import axios from "axios"; 

class ClientApi {
  constructor(){
    /*axios base*/
    this.api = axios.create({
      baseURL: `https://api.spoonacular.com/recipes/`,
      params: {
        addRecipeInformation: true,
        tags: `vegetarian`,
        responseType: "json",
      },
    });
    this.apiKey = process.env.REACT_APP_API_KEY
  }

  async getRandomrecipes(number_of_recipes){
    return (await this.api.get(`random?apiKey=${this.apiKey}&number=${number_of_recipes}`)).data.recipes;
  }
}

const Request = new ClientApi();
export default Request;
