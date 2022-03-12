const URL="https://localhost:44346/api/aspnetuser/login";


  
export function loginUserService(userObject){
    return fetch(URL, {
      method: "Post",
      body: userObject,
    })
      .then((resp) => {
        return resp.json();
      })
      .catch((e) => {
        return false;
      });
}