'use strict';

//ELEMENTS
const logWindow = document.querySelector('.log_window');
const btnLog = document.querySelector('.btn_log');
const companySoldTo = document.querySelector('.sold_to');
const wrongSoldTo = document.querySelector('.wrong_sold_to');
const appWindow = document.querySelector('.main_container');
const inputField = document.getElementById('mySearch');
const searchBtn = document.querySelector('.search_btn');
const helpTopicList = document.getElementById('myMenu');
const helpSubject = helpTopicList.getElementsByTagName('li');
const helpTopics = document.querySelectorAll('.help_topic');
const accountSettings = document.querySelector('.nav_account_settings');
const accountSettingsClose = document.querySelector('.closebtn');
const logOut = document.querySelector('.log_out');
let logged = sessionStorage.getItem('ifLogged');

const checkLog = function () {
  logged = logged === 'true';
  if (logged) {
    showingApp();
    // return;
  } else {
    hidingApp();
    hiddingSettings();
  }
};

// LOGGING TO SYSTEM (Button)
btnLog.addEventListener('click', function (e) {
  e.preventDefault();
  // Checking Sold to (if correct)

  loggingToAccount();
  showingApp();
});

// LOGGING TO SYSTEM (ENTER)
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && companySoldTo.value.length !== 0) {
    loggingToAccount();
    showingApp();
  }
});

//Searching bar topics
function serchFilter() {
  let filter, a;

  // Displaying topic list
  helpTopicList.classList.remove('hidden');

  //Hidding list when input field is empty
  if (inputField.value.length === 0) {
    helpTopicList.classList.add('hidden');
  }

  filter = inputField.value.toUpperCase();

  //Leaving only matching elements
  for (let i = 0; i < helpSubject.length; i++) {
    a = helpSubject[i].getElementsByTagName('a')[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      helpSubject[i].style.display = '';
    } else {
      helpSubject[i].style.display = 'none';
    }
  }
}

//

//Opening account settings
accountSettings.addEventListener('click', function () {
  showingSettings();
});

//Closing accounts settings
accountSettingsClose.addEventListener('click', function () {
  hiddingSettings();
});

//displaying Help topics in main section after clicking on topic
helpTopicList.addEventListener('click', function (e) {
  const clicked = e.target.closest('.help_topic_li').innerHTML.toLowerCase();

  //hiding all help topics

  helpTopics.forEach(topic => topic.classList.add('hidden'));

  //hidding help topics list
  helpTopicList.classList.add('hidden');

  //clearing searchbar
  inputField.value = '';

  //Creating initials
  const initials = clicked
    .split(' ')
    .map(word => word[0])
    .join('');

  //showing article
  document.querySelector(`.${initials}`).classList.remove('hidden');
});

//displaying Help topics in main section after clicking on btn
searchBtn.addEventListener('click', function () {
  //Guard clause
  if (inputField.value.length === 0) {
    return;
  }

  //Creating initials
  const initials = inputField.value
    .split(' ')
    .map(word => word[0])
    .join('');

  displayingHelpTopic();
});

//hidding quick links arrow

//Logging out
logOut.addEventListener('click', function (e) {
  e.preventDefault();
  logged = false;
  sessionStorage.setItem('ifLogged', logged);
  // hidingApp();
  // hiddingSettings();
});

checkLog();
