import axios from 'axios';

let token = '';

class UserProvider {
   authorize = async () => {
      return axios({
         method: 'post',
         url: "http://interview.agileengine.com/auth",
         data: {
            "apiKey": "23567b218376f79d9415"
         }
      }).then((response) => {
         token = response.data.token;
      })
   };

   getListOfImages = async (page) => {
      if (!token) {
         await this.authorize();
      }
      return axios({
         method: 'get',
         url: `http://interview.agileengine.com/images?page=${page}`,
         headers: {
            'Authorization': token
         }
      });
   };

   getFullImage = async (id) => {
      if (!token) {
         await this.authorize();
      }
      return axios({
         method: 'get',
         url: `http://interview.agileengine.com/images/${id}`,
         headers: {
            'Authorization': token
         }
      });
   };
}

export default UserProvider