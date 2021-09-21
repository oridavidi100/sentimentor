
document.getElementById("submit").addEventListener("click",emotion)
async function  emotion () {
 try {document.getElementById("answer").innerText="loading..."
    const answer=await fetch(`https://sentim-api.herokuapp.com/api/v1/`, {
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
        text: document.getElementById("textarea").value,
        })
    })
    const data=await answer.json()
        if (`${data.result.type}`==="positive"){
            document.getElementById("answer").classList="green"
        }
        if (`${data.result.type}`==="negative"){
            document.getElementById("answer").classList="red"
        }
        if (`${data.result.type}`==="neutral"){
            document.getElementById("answer").classList="grey"
        }
    document.getElementById("answer").textContent=`result:${data.result.type} ,${data.result.polarity}`
    var xhr = new XMLHttpRequest();
    document.getElementById("img").setAttribute("src",`https://http.cat/200`);      
    }
 catch{
    document.getElementById("answer").textContent="error not enterd"
    var xhr = new XMLHttpRequest();
    document.getElementById("img").setAttribute("src",`https://http.cat/${xhr.status}`);
 }

}
