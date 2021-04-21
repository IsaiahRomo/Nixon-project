const vnix = document.getElementById('nixv');
const vnixo = document.getElementById('nixvo');

window.onload = (event) => {
    confirm("Vote for Nixon!");
};

function nixent() {
    vnix.innerHTML = "You want to vote for Nixon";
};

function nixlev() {
    vnix.innerHTML = "Yea go vote for Nixon";
};

function nixen() {
    vnixo.innerHTML = "Good Choice";
};

function nixle() {
    vnixo.innerHTML = "Thank you for voting Nixon";
};

