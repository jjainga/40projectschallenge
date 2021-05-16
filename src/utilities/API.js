import axios from "axios";

// Export an object with a "searchColor" 

const API = {
  searchColor: function(id,mode, count) {return axios.get("https://www.thecolorapi.com/scheme?hex=" + id + "&format=json&mode=" + mode + "&count=" + count)},
  
}

export default API;