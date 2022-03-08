const URL="https://localhost:44346/api/aspnetuser/checkMail";


export function checkMailAvailable(userObject) {
      return fetch(URL,{
        method: "post",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify(userObject),
      })
      .then((resp) => {
        return resp.json();
      })
}
  