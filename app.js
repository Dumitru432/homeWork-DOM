// 1. Create an HTML page with tabs.
//A few tabs you can switch between should be displayed on the left.
//Each tab should have its own content, but only the active tab content should be displayed at a given time.

/* const firstButton = document.querySelector('.buttonMoldova')
const firstParagraph = document.querySelector('.aboutMoldova')

firstButton.addEventListener('click', ()=>{
firstParagraph.style.display = 'flex'
})

const secondButton = document.querySelector('.buttonRomania')
const secondParagraph = document.querySelector('.aboutRomania')

secondButton.addEventListener('click', () => {
    secondParagraph.style.display = 'flex'; 
})

const thirdButton = document.querySelector('.buttonEngland')
const thirdParagraph = document.querySelector('.aboutEngland')

thirdButton.addEventListener('click', () => {
   thirdParagraph.style.display = 'flex'; 
})  
 */
// 1. 1. Create a page that displays a numbered list of tracks:

var playList = [
  {
    author: "LED ZEPPELIN",
    song: "STAIRWAY TO HEAVEN",
  },
  {
    author: "QUEEN",
    song: "BOHEMIAN RHAPSODY",
  },
  {
    author: "LYNYRD SKYNYRD",
    song: "FREE BIRD",
  },
  {
    author: "DEEP PURPLE",
    song: "SMOKE ON THE WATER",
  },
  {
    author: "JIMI HENDRIX",
    song: "ALL ALONG THE WATCHTOWER",
  },
  {
    author: "AC/DC",
    song: "BACK IN BLACK",
  },
  {
    author: "QUEEN",
    song: "WE WILL ROCK YOU",
  },
  {
    author: "METALLICA",
    song: "ENTER SANDMAN",
  },
];

/* const ol = document.createElement("ol");

for (let i = 0; i < playList.length; i++) {
  console.log(playList[i].song);

  const li = document.createElement("li");
  const body = document.body;

  li.innerText = playList[i].song; // iau fiecare piese asa cum zice si platList[i].song si il pun in html

  body.append(ol); // vreau la bady sa ii pun ol
  ol.append(li); // vrea in order list sa ii pun li
} */

// 2.  Create an html page with OPEN button and a modal box. The modal box should have text and a CLOSE button. The modal box is not displayed from the beginning. It appears when clicking the OPEN button and disappears when clicking CLOSE.

var modal = document.getElementById("myModal");

function open() {
  modal.style.display = "block";
}

function close() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    close();
  }
};

// 3.  Create an html page with streetlights and a button that switches the color to the next one.

var currentLightIndex = 0;
var lights = document.querySelectorAll(".streetlight");

// Function to switch the color of the streetlights
function changeLights() {
  // Reset the previous light to its default color
  lights[currentLightIndex].classList.remove("active");

  // Increment the current light index
  currentLightIndex = (currentLightIndex + 1) % lights.length;

  // Set the next light to its new color
  lights[currentLightIndex].classList.add("active");
}
