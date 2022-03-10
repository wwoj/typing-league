const URL="https://localhost:44346/api/aspnetuser/testMeHere";


export function createUser(userObject) {
    console.log(userObject)
      return fetch(URL, {
        method: "Post",
        body: userObject
      }).then((resp) => {
        console.log("Resp", resp);
        return resp.json();
      })
      .catch(e=>{alert("User not added")});
}
  