const btn = document.querySelector(".btn");
let yazi = document.querySelector(".yazi");
const tek = document.querySelector("#tek");
const iki = document.querySelector("#iki");
const cavab = document.querySelector(".cavab");

btn.addEventListener("click", () => {
    getdata();
});

async function getdata() {
    let jokeType = 'Any?type=single';
    if (tek.checked) {
        jokeType = 'Any?type=single';
    } else if (iki.checked) {
        jokeType = 'Any?type=twopart';
    }

    try {
        const response = await fetch(`https://v2.jokeapi.dev/joke/${jokeType}`);
        const data = await response.json();
        if (tek.checked) {
            yazi.textContent = data.joke;
            cavab.textContent = '';
        } else if (iki.checked) {
            yazi.textContent = data.setup;
            cavab.textContent = data.delivery;
        }
    } catch (error) {
        console.error('Sehv:', error);
    }
}



