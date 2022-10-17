'use strict';

const softDropDown = document.querySelector('.software');
const currenrAccount = JSON.parse(sessionStorage.getItem('client'));

const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const logOut = document.querySelector('.log_out');
const submitBtn = document.querySelector('#submit');

let logged = true;

const ticketList = [];

const data = JSON.parse(localStorage.getItem('tickets'));

function softwareType(softArray) {
  softDropDown.innerHTML = `<option value="">Wybierze oprogramowania</option>`;
  softArray.forEach(
    item =>
      (softDropDown.innerHTML += `<option value="${item}">${item}</option>`)
  );
}

softwareType(currenrAccount.soft);

//adjusting software type and version
softDropDown.addEventListener('change', function () {
  const value = softDropDown.value;
  const softVersion = document.querySelectorAll('.soft_version');
  softVersion.forEach(item => item.classList.add('hidden'));
  document.querySelector(`.${value}`).classList.remove('hidden');
});

//Opening account settings
accountSettings.addEventListener('click', function () {
  document.getElementById('mySidenav').style.width = '250px';
  accountSettings.style.color = '#2b2b2b';
});

//Closing accounts settings
accountSettingsClose.addEventListener('click', function () {
  document.getElementById('mySidenav').style.width = '0';
  accountSettings.style.color = '#fafafa';
});

//Logging out
logOut.addEventListener('click', function (e) {
  // e.preventDefault();
  logged = false;
  sessionStorage.setItem('ifLogged', logged);
  hidingApp();
  hiddingSettings();
  window.location.replace(index.html);
});

submitBtn.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('working');
  const actualTicket = [];
  actualTicket.push(document.querySelector('.software').value);
  //Dodać regułe wybierającą odpowiednią listę(niektóre ukryte)
  actualTicket.push(document.querySelector('.soft_version').value);
  actualTicket.push(document.querySelector('#typ_zgloszenia').value);
  actualTicket.push(document.querySelector('#temat').value);
  actualTicket.push(document.querySelector('#zgloszenie').value);

  ticketList.push(actualTicket);

  localStorage.setItem('tickets', JSON.stringify(ticketList));
});

// localStorage.removeItem('tickets');

class CarCl {
  constructor(car, speed) {
    this.car = car;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`This car is driving at ${this.speed}`);
    return this;
  }

  brake() {
    this.speed -= 5;
    console.log(`This car is driving at ${this.speed}`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(car, speed, charge) {
    super(car, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    chargeTo > 100 ? (this.#charge = 100) : (this.#charge = chargeTo);
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 20;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Link the prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  if (chargeTo > 100) {
    this.charge = 100;
    console.log(`You can only charge to 100%`);
    return;
  }
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};
