import axios from 'axios';

//https://api.kinopoisk.dev/movie?field=year&search=2022&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06 
// typeNubmer = 1 - films
// typeNumber = 2 - tv-series
// typeNumber = 3 - cartoon
// typeNumber = 4 - anime
// typeNumber = 5 - animated-series
// typeNumber = 6 - tv-show
// typeNumber = 7 - mini-series


export const getMovie = (filter, callback) => {
  return axios.get(`https://api.kinopoisk.dev/movie?page=${filter.page}&field=typeNumber&search=${filter.type}&field=rating.kp&search=${filter.rating}&field=year&search=${filter.year}&token=ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06`)
    .then(response => response.data)
    .then( (res) => {
        console.log(res.docs);
        callback(res.docs);
    })
    .catch(err => console.log(err))


}