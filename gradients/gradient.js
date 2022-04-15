const container = document.querySelector(".container");

const cardAmmount = 12;

let bool = true;


let color1Arr = [];
let color2Arr = [];

function rndColor() {
    const x = Math.round(0xffffff * Math.random()).toString(16);
    const y = 6 - x.length;
    const z = "000000";
    const z1 = z.substring(0, y);
    const randomColor = "#" + z1 + x;
    return randomColor;
}


for(let i = 0; i < cardAmmount; i++) {
    const color1 = rndColor();
    const color2 = rndColor();

    color1Arr.push(color1);
    color2Arr.push(color2);


container.innerHTML += `
<div class = "card">
    <div class="card-header">
        <h3 class="card-id">0${i+1}</h3>
        <button class="type">Linear</button>
    </div>
    <div class ="card-body">
        <div class="gradient" style="background: linear-gradient(45deg, ${color1}, ${color2});"></div>
    </div>
    <div class="card-footer">
        <div>
            <span class="color1">${color1}</span>
            <span class="color2">${color2}</span>
        </div>
        <button class="copy">Copy code</button>
    </div>
</div>
`;
}

document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("type")) {


        bool = !bool;
//gradient and card id from DOM
        const gradient = e.target.parentElement.children[1].firstElementChild;
        const id = parseInt (e.target.parentElement.parentElement.children[0].firstElementChild.innerText.substr(2)) - 1;


    if (bool === true) {
        gradient.style.background = `linear-gradient(45deg, ${color1Arr[id]}, ${color2Arr[id]})`;
        e.target.innerHTML = "Linear";
    }else {
        gradient.style.background = `radial-gradient(circle, ${color1Arr[id]}, ${color2Arr[id]})`;
        e.target.innerHTML = "Radial";
        }
    }
});

document.addEventListener("click", (e) => {
    if (e.target && e.target.classList.contains("copy")){

        const gradient = e.target.parentElement.parentElement.children[1].firstElementChild.style.background;

        navigator.clipboard.writeText("background: " + gradient + ';');

        e.target.innerText = "Copied!";

        setTimeout(() => {
            e.target.innerText = "Copy Code";
        }, 2000);
    }
});