let appId = document.getElementById("app_id");
let content = document.getElementById("content");


const api_url = "https://api.adviceslip.com/advice";

async function getAdvice(url){
    const response = await fetch (url);
    var data =await response.json();

    console.log(data)
    appId.innerHTML = data.slip.id;
    content.innerHTML = data.slip.advice;

}

getAdvice(api_url);
