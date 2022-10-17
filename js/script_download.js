'use strict';

//ELEMENTS
const currenrAccount = JSON.parse(sessionStorage.getItem('client'));
const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const logOut = document.querySelector('.log_out');

let logged = true;

function loadDownloadableSoft(softArray) {
  softArray.forEach(item =>
    document.querySelector(`.${item}`).classList.remove('hidden')
  );
}

loadDownloadableSoft(currenrAccount.soft);

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
