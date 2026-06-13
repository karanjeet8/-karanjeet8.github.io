const text = [
  "Frontend Developer",
  "React Developer",
  "Freelancer",
  "UI Designer",
  "Digital Marketer"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;
const typing = document.getElementById("typing");

function type() {

  current = text[i];

  if (!isDeleting) {
    typing.innerHTML = current.substring(0, j++) + "|";
  } else {
    typing.innerHTML = current.substring(0, j--) + "|";
  }

  let speed = isDeleting ? 80 : 150;

  /* Stop at full word */
  if (!isDeleting && j === current.length + 1) {
    speed = 1800;
    isDeleting = true;
  }

  /* Move next word */
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
    speed = 500;
  }

  setTimeout(type, speed);
}

type();