const text = ["Frontend Developer", "React Developer", "Freelancer", "UI Designer"];
let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {
  const typing = document.getElementById("typing");

  if (i < text.length) {
    if (!isDeleting && j <= text[i].length) {
      current = text[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = text[i].substring(0, j--);
    }

    typing.innerHTML = current;

    if (j === text[i].length) {
      isDeleting = true;
      setTimeout(type, 1200); // pause
      return;
    }

    if (j === 0) {
      isDeleting = false;
      i = (i + 1) % text.length;
    }
  }

  setTimeout(type, isDeleting ? 60 : 120); // slow speed
}

type();