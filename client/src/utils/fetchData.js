import axios from 'axios'

const fetchData = (method, url, data) => {

   return axios({
      method,
      url,
      data
   }).then(res => {
      return res.data

   })
      .catch(err => {
         return err.response.data
      })


}

export default fetchData
