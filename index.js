document.addEventListener("DOMContentLoaded", (event) => {
  if (window.innerWidth < window.innerHeight) {
    alert("Please use landscape for the better experience!");
  }
});

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paper5 = document.querySelector("#p5");
const paper6 = document.querySelector("#p6");
const paper7 = document.querySelector("#p7");

// Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
prevBtn.style.display = "none";
let numOfPapers = 7;
let maxLocation = numOfPapers + 1;
let width = document.body.clientWidth;
if (width > 1600) {
  buttonTrans = "340px";
} else if (width > 1200) {
  buttonTrans = "270px";
} else if (width > 991) {
  buttonTrans = "200px";
} else {
  buttonTrans = "150px";
}

function openBook() {
  book.style.transform = "translateX(50%)";
  prevBtn.style.transform = `translateX(-${buttonTrans})`;
  nextBtn.style.transform = `translateX(${buttonTrans})`;
}

function closeBook(isAtBeginning) {
  if (isAtBeginning) {
    book.style.transform = "translateX(0%)";
  } else {
    book.style.transform = "translateX(100%)";
  }

  prevBtn.style.transform = "translateX(0px)";
  nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
  if (currentLocation === 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else if (currentLocation === 7) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "none";
  }
  if (currentLocation < maxLocation) {
    switch (currentLocation) {
      case 1:
        openBook();
        paper1.classList.add("flipped");
        paper1.style.zIndex = 1;
        console.log(currentLocation);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 2:
        paper2.classList.add("flipped");
        paper2.style.zIndex = 2;
        console.log(currentLocation);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 3:
        paper3.classList.add("flipped");
        paper3.style.zIndex = 3;
        console.log(currentLocation);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 4: {
        paper4.classList.add("flipped");
        paper4.style.zIndex = 4;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        document.querySelectorAll("button").forEach((btn) => {
          btn.style.display = "none";
        });
        let countdownTime = 120;
        let mouseMoved = false;
        let keyPressed = false;
        // Get the countdown container element
        const countdownElement = document.getElementById("countdown");

        // Update the countdown every second
        const countdownInterval = setInterval(function () {
          // Calculate minutes and seconds
          const minutes = Math.floor(countdownTime / 60);
          const seconds = countdownTime % 60;

          // Display the countdown
          countdownElement.innerHTML = `${minutes < 10 ? "0" : ""}${minutes}:${
            seconds < 10 ? "0" : ""
          }${seconds}`;

          // Decrease the countdown time
          countdownTime--;

          // Check if the countdown is finished
          if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownElement.innerHTML = "Time's up!";
            document.querySelectorAll("button").forEach((btn) => {
              btn.style.display = "block";
            });
          }
          // document.addEventListener("mousemove", (event) => {
          //   if (!mouseMoved) {
          //     mouseMoved = true;
          //     // Xử lý sự kiện khi chuột được di chuyển lần đầu tiên
          //     alert("Mouse moved");
          //   }
          // });
          // document.addEventListener("keydown", (event) => {
          //   if (!keyPressed) {
          //     keyPressed = true;
          //     // Xử lý sự kiện khi chuột được di chuyển lần đầu tiên
          //     alert("Key pressed");
          //   }
          // });
        }, 1000);
        document.getElementById("audio").play();
        break;
      }
      case 5:
        paper5.classList.add("flipped");
        paper5.style.zIndex = 5;
        console.log(currentLocation);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 6:
        paper6.classList.add("flipped");
        paper6.style.zIndex = 6;
        console.log(currentLocation);
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 7:
        paper7.classList.add("flipped");
        paper7.style.zIndex = 7;
        closeBook(false);
        break;
      default:
        throw new Error("unkown state");
    }
    currentLocation++;
  }
}

function goPrevPage() {
  if (currentLocation === 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "block";
  } else if (currentLocation === 7) {
    prevBtn.style.display = "block";
    nextBtn.style.display = "none";
  }
  if (currentLocation > 1) {
    switch (currentLocation) {
      case 2:
        closeBook(true);
        paper1.classList.remove("flipped");
        paper1.style.zIndex = 7;
        prevBtn.style.display = "none";
        nextBtn.style.display = "block";
        break;
      case 3:
        paper2.classList.remove("flipped");
        paper2.style.zIndex = 6;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 4:
        paper3.classList.remove("flipped");
        paper3.style.zIndex = 5;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 5:
        paper4.classList.remove("flipped");
        paper4.style.zIndex = 4;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 6:
        paper5.classList.remove("flipped");
        paper5.style.zIndex = 3;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 7:
        paper6.classList.remove("flipped");
        paper6.style.zIndex = 2;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      case 8:
        openBook();
        paper7.classList.remove("flipped");
        paper7.style.zIndex = 1;
        prevBtn.style.display = "block";
        nextBtn.style.display = "block";
        break;
      default:
        throw new Error("unkown state");
    }

    currentLocation--;
  }
}
