const btn = document.querySelector(".btn")
let yazi = document.querySelector(".yazi")
const tek = document.querySelector("#tek")
const iki = document.querySelector("#iki")
const cavab = document.querySelector(".cavab")




const getdata = async () => {
    for (let radio of radios) {
        if (tek.checked) {
            fetch('https://v2.jokeapi.dev/joke/Any?type=single')
                .then(response => response.json())
                .then(data => {
                    yazi.textContent = data.joke;
                })
        }
        else if (iki.checked) {
            fetch('https://v2.jokeapi.dev/joke/Any?type=twopart')
            .then(response => response.json())
            .then(data => {
                yazi.textContent = data.setup;
                cavab.textContent=data.delivery;
            })
        }
    }
}
btn.addEventListener("click", ()=>{
    getdata();
})






