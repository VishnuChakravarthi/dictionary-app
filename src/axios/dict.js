//axios middleware is used to access apis
import axios from "axios";

//using axios to access external api
export default axios.create({
  //   baseURL: "http://localhost:8000/",
  baseURL: "https://stormy-savannah-85329.herokuapp.com/",
});
