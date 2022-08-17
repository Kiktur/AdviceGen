
const advicePar = document.getElementById("advice");
const adviceId = document.getElementById("advice-num");


function adviceFetch() {
    fetch(`https://api.adviceslip.com/advice`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data["slip"])
        adviceId.innerHTML = `ADVICE #${data["slip"]["id"]}`;
        advicePar.innerHTML = `"${data["slip"]["advice"]}"`;
    })
    .catch(function() {
      console.log("Error occurred");
    });
}

adviceFetch();