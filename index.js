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
}
