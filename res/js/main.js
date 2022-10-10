const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const cookieMultiplier = document.getElementById("cookieMultiplier");
const info = document.getElementById("info");
const autoclicker = document.getElementById("autoclicker");

let numberOfCookies = 0;
let cookieIncrease = 1;
let autoClickerPrice = 100;
let autoClickerIncrease = 0;

cookie.onclick = () => {
  counter.innerHTML = numberOfCookies;
  numberOfCookies += cookieIncrease;
};
cookieMultiplier.onclick = () => {
  if (numberOfCookies >= 50) {
    numberOfCookies -= 50;
    cookieIncrease += 1;
    counter.innerHTML = numberOfCookies;
    let t = cookieIncrease - 1;
    info.innerHTML = `You bought an upgrade 1 in amount of ${t} times`;
  }
};
autoClicker.onclick = () => {
  if (numberOfCookies >= autoClickerPrice) {
    numberOfCookies -= autoClickerPrice;
    counter.innerHTML = numberOfCookies;
    autoClickerPrice += 100;
    autoClicker.innerHTML = `Buy Auto Clicker: ${autoClickerPrice}`;
    if ((autoClickerIncrease == 0)) {
      setInterval(() =>{
        numberOfCookies += autoClickerIncrease;
        counter.innerHTML = numberOfCookies;
      }, 1000);
    }
    autoClickerIncrease++;
  }
};
