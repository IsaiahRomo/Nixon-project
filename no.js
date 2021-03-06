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





var enterEventCount = 0;
const mouseTarget = document.getElementById('mouseTarget');
const unorderedList = document.getElementById('unorderedList');

mouseTarget.addEventListener('mouseenter', e => {
  mouseTarget.style.border = '1px solid red';
  enterEventCount++;
  addListItem('YOU ARE GOING TO VOTE NIXON!!!');
});

function addListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  unorderedList.appendChild(newListItem);
}

var genterEventCount = 0;
const gmouseTarget = document.getElementById('gmouseTarget');
const gunorderedList = document.getElementById('gunorderedList');

gmouseTarget.addEventListener('mouseenter', e => {
  gmouseTarget.style.border = '1px solid blue';
  genterEventCount++;
  gaddListItem('YOU ARE NOT GOING TO VOTE MCGOVERN!!!');
});

function gaddListItem(text) {
  // Create a new text node using the supplied text
  var newTextNode = document.createTextNode(text);

  // Create a new li element
  var newListItem = document.createElement("li");

  // Add the text node to the li element
  newListItem.appendChild(newTextNode);

  // Add the newly created list item to list
  gunorderedList.appendChild(newListItem);
}



const Context = document.getElementById('contextno');
addEventListener('contextmenu', e => {
    e.preventDefault();
});




function alrt() {
    alert("You are a loser");

    gone();
};

nixv.addEventListener('click', alrt);

function gone() {
    nixv.removeEventListener('click', alrt);
}



(function fairyDustCursor() {
    var possibleColors = ["red", "white", "blue"]
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cursor = { x: width / 2, y: width / 2 };
    var particles = [];
    function init() {
        bindEvents();
        loop();
    }
    // Bind events that are needed
    function bindEvents() {
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('touchmove', onTouchMove);
        document.addEventListener('touchstart', onTouchMove);
        window.addEventListener('resize', onWindowResize);
    }
    function onWindowResize(e) {
        width = window.innerWidth;
        height = window.innerHeight;
    }
    function onTouchMove(e) {
        if (e.touches.length > 0) {
            for (var i = 0; i < e.touches.length; i++) {
                addParticle(e.touches[i].clientX, e.touches[i].clientY, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
            }
        }
    }
    function onMouseMove(e) {
        cursor.x = e.clientX;
        cursor.y = e.clientY;
        addParticle(cursor.x, cursor.y, possibleColors[Math.floor(Math.random() * possibleColors.length)]);
    }
    function addParticle(x, y, color) {
        var particle = new Particle();
        particle.init(x, y, color);
        particles.push(particle);
    }
    function updateParticles() {
        // Updated
        for (var i = 0; i < particles.length; i++) {
            particles[i].update();
        }
        // Remove dead particles
        for (var i = particles.length - 1; i >= 0; i--) {
            if (particles[i].lifeSpan < 0) {
                particles[i].die();
                particles.splice(i, 1);
            }
        }
    }
    function loop() {
        requestAnimationFrame(loop);
        updateParticles();
    }
    /**
     * Particles
     */
    function Particle() {
        this.character = "VOTE!";
        this.lifeSpan = 300; //ms
        this.initialStyles = {
            "position": "absolute",
            "display": "block",
            "pointerEvents": "none",
            "z-index": "10000000",
            "fontSize": "12px",
            "will-change": "transform"
        };
        // Init, and set properties
        this.init = function (x, y, color) {
            this.velocity = {
                x: (Math.random() < 0.5 ? -1 : 1) * (Math.random() / 2),
                y: 1
            };
            this.position = { x: x - 10, y: y - 20 };
            this.initialStyles.color = color;
            this.element = document.createElement('span');
            this.element.innerHTML = this.character;
            applyProperties(this.element, this.initialStyles);
            this.update();
            document.querySelector('.container').appendChild(this.element);
        };
        this.update = function () {
            this.position.x += this.velocity.x;
            this.position.y += this.velocity.y;
            this.lifeSpan--;
            this.element.style.transform = "translate3d(" + this.position.x + "px," + this.position.y + "px, 0) scale(" + (this.lifeSpan / 120) + ")";
        }
        this.die = function () {
            this.element.parentNode.removeChild(this.element);
        }
    }
    /**
     * Utils
     */
    // Applies css `properties` to an element.
    function applyProperties(target, properties) {
        for (var key in properties) {
            target.style[key] = properties[key];
        }
    }
    init();
})();



