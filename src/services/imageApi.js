import axios from "axios";
// // console.log(axios);

function getFetch(q, page) {
  let key = "19799198-506eafe5bae25653c5eaa03df";
  let perPage = 12;

  let url = `https://pixabay.com/api/?q=${q}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=${perPage}`;

  return axios.get(url).then((response) => {
    // console.log(response.data.hits);
    return response.data.hits;
  });
}

export default { getFetch };
