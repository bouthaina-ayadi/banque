import axios from "axios"
export async function verifyLogin({ username, password }) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      axios.post('http://localhost:3003/signin', {
        "username": username,
        "password": password
      }).then((res) => {
        resolve();
      }).catch((e) => {
        alert(e.response.data.notice)
        reject();
  
      })
    
    }, 1000);
  });
}
