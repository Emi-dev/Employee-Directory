import axios from "axios";
const BASEURL = "https://api.github.com/users";
// const APIKEY = "&apikey=trilogy";

export default {
    search: function(query) {
        return axios.get(BASEURL);
    }
//   search: function(query) {
//     return axios.get(BASEURL + query + APIKEY);
//   }
};