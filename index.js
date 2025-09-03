// Functionalities for Heart Icons

const hearts = document.querySelectorAll(".heartClick");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let currentLife = parseInt(document.getElementById("heartCount").innerText);
    currentLife += 1;
    document.getElementById("heartCount").innerText = currentLife;
  });
}

// Call Button Section

// Reduce Coin Functionalities

function CallBtnClick(event) {
  let availableCoin = Number(document.getElementById("totalCoin").innerText);

  if (availableCoin < 20) {
    alert("Not enough coins");
    return;
  }
  availableCoin -= 20;
  document.getElementById("totalCoin").innerText = availableCoin;

  //  Call Alert Functionalities

  let divAdder = event.currentTarget;
  const temp = divAdder.id;

  let heading =
    document.getElementById(temp).parentElement.parentElement.children[1]
      .children[0].innerText;
  let paragraph =
    document.getElementById(temp).parentElement.parentElement.children[1]
      .children[2].innerText;

  let alertHeading =
    document.getElementById(temp).parentElement.parentElement.children[1]
      .children[1].innerText;

  alert(" 📞 Calling " + heading + " " + paragraph);

  // Call History section

  let newDiv = document.createElement("div");
  newDiv.innerHTML = `<div
            class="w-full p-2 flex justify-between items-center bg-gray-200 rounded-lg mt-2"
          >
            <div>
              <h2 class="font-semibold">${heading}</h2>
              <p class="font-bold">${paragraph}</p>
            </div>
            <div class="clock"></div>
          </div>  `;

  let A =
    divAdder.parentElement.parentElement.parentElement.children[3].children[1];
  A.appendChild(newDiv);

  const clockDiv = newDiv.querySelector(".clock");

  //
  function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    let time = hours + " : " + minutes + " : " + seconds;
    clockDiv.innerText = time;
  }
  updateClock();
}

document.getElementById("callButton-1").addEventListener("click", CallBtnClick);
document.getElementById("callButton-2").addEventListener("click", CallBtnClick);
document.getElementById("callButton-3").addEventListener("click", CallBtnClick);
document.getElementById("callButton-4").addEventListener("click", CallBtnClick);
document.getElementById("callButton-5").addEventListener("click", CallBtnClick);
document.getElementById("callButton-6").addEventListener("click", CallBtnClick);
document.getElementById("callButton-7").addEventListener("click", CallBtnClick);
document.getElementById("callButton-8").addEventListener("click", CallBtnClick);
document.getElementById("callButton-9").addEventListener("click", CallBtnClick);
