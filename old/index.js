// document.querySelector("button").addEventListener("click", (event) => {
//   const name = document.querySelector("#name").value;
//   const email = document.querySelector("#email").value;
//   const address = document.querySelector("#address").value;
//   const phoneNumber = document.querySelector("#phone").value;
//   if (!name || !email || !address || !phoneNumber) {
//     alert("Please fill in all fields");
//     return;
//   }
//   if (!"/^[w-.]+@([w-]+.)+[w-]{2,4}$/".test(email)) {
//     alert("Please enter a valid email address");
//     return;
//   }
// });

document.addEventListener("DOMContentLoaded", async () => {
  // Set the countdown time in seconds
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
});
