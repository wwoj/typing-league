const URL="https://localhost:44346/api/aspnetuser/login";


  
export function loginUserService(userObject){
    console.log("WTS",userObject)
    return fetch(URL, {
      method: "Post",
      body: userObject,
    })
      .then((resp) => {
        console.log("Resp", resp);
        return resp.json();
      })
      .catch((e) => {
        return false;
      });
}