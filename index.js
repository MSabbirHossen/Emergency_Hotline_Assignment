// Functionalities for Heart Icons

const hearts = document.querySelectorAll(".heartClick");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    const currentLife = document.getElementById("heartCount").innerText;
    const lifeIncrease = Number(currentLife) + 1;
    document.getElementById("heartCount").innerText = lifeIncrease;
  });
}
