'use strict';

class Customer {
  constructor(company, sold, soft) {
    this.company = company;
    this.soldTo = sold;
    //soft dodawany z formularza poprzez push do array
    this.soft = soft;
  }

  addSoft(val) {
    this.soft.push(val);
    return this;
  }

  removeSoft(val) {
    //wymyślić usuwanie
  }
}

//constrctor
// const Account = function (company, sold, [soft]) {
//   this.company = company;
//   this.soldTo = sold;
//   this.soft = [soft];
// };

const account1 = {
  company: 'ZPUE',
  soldTo: 1111,
  soft: ['SE', 'NX'],
};

const account2 = {
  company: 'SaMAsz',
  soldTo: 2222,
  soft: ['SE'],
};

const account3 = {
  company: 'Triggo',
  soldTo: 3333,
  soft: ['NX'],
};

// const account4 = new Account('Trela', 4444, ['NX']);

const accounts = [account1, account2, account3];

//Storing customer account in variable
let currentAccount;

function showingApp() {
  // Hiding Login box
  logWindow.classList.add('hidden');
  // Displaying main page
  appWindow.classList.remove('hidden');
}

function loggingToAccount() {
  currentAccount = accounts.find(
    acc => acc.soldTo === Number(companySoldTo.value)
  );

  //Guard clause
  if (!currentAccount) {
    //Add informaction about wrong soldto
    wrongSoldTo.classList.remove('hidden');
    //delete input field
    companySoldTo.value = '';
    return;
  }

  logged = true;
  sessionStorage.setItem('ifLogged', logged);
  sessionStorage.setItem('client', JSON.stringify(currentAccount));
  companySoldTo.value = '';
}

function hidingApp() {
  // Displaying Login box
  logWindow.classList.remove('hidden');
  // Hiding main page
  appWindow.classList.add('hidden');
}

function showingSettings() {
  document.getElementById('mySidenav').style.width = '250px';
  accountSettings.style.color = '#2b2b2b';
}

function hiddingSettings() {
  document.getElementById('mySidenav').style.width = '0';
  accountSettings.style.color = '#fafafa';
}

function displayingHelpTopic() {
  //showing article
  document.querySelector(`.${this.initials}`).classList.remove('hidden');

  //clearing searchbar
  inputField.value = '';
  //hidding help topics list
  helpTopicList.classList.add('hidden');
}

// let wizards = [
//   {
//     name: 'Merlin',
//     spells: ['dancing teacups', 'talk to animals', 'summon owl', 'teleport'],
//   },
//   {
//     name: 'Gandalf',
//     spells: ['light', 'you shall not pass', 'teleport'],
//   },
//   {
//     name: 'Radagast',
//     spells: ['talk to animals', 'summon owl', 'heal'],
//   },
// ];

// const allSpells = [];
// wizards.forEach(el => allSpells.push(el.spells));
// const spellsFlat = allSpells.flat();
// const uniqueSpells = new Set(spellsFlat);

// spells = {};
// // Loop o
// uniqueSpells.forEach(el => (spells.el = 0));

// uniqueSpells.forEach(el => console.log(el));

// const spells = new Object();

// for (let wizard of wizards) {
//   // Loop through each spell
//   for (let spell of wizard.spells) {
//     if (!spells[spell]) {
//       spells.spell = wizard.name;
//     } else {
//       spells.spell.push(wizard.name);
//     }
//   }
// }
