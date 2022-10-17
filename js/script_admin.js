'use strict';

const optionBtns = document.querySelectorAll('.options_tab_item');
const optionsTab = document.querySelector('.options_tab_items');
const optionsContent = document.querySelectorAll('.options_content');

const removingSoft = function () {
  document.querySelector('.soft_added').innerHTML = '';
};

optionsTab.addEventListener('click', function (e) {
  const clicked = e.target.closest('.options_tab_item');

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  optionBtns.forEach(b => b.classList.remove('item_active'));
  optionsContent.forEach(i => i.classList.remove('options_content_active'));

  // Activate tab
  clicked.classList.add('item_active');

  // Activate content area
  document
    .querySelector(`.options_content_${clicked.dataset.tab}`)
    .classList.add('options_content_active');
});

//Creating clients list
const clientList = document.querySelector('.clients_list');

const generateClientsList = function () {
  clientList.innerHTML = '';
  let html = `<div class="description_row">
  <div class="description_lp td">L.P.</div>
  <div class="description td">Nazwa</div>
  <div class="description td">Sold-to</div>
  <div class="description td">Oprogramowanie</div>
</div>`;

  accounts.forEach(
    (el, index) =>
      (html += `<div class="description_row">
  <div class="description_lp">${index + 1}</div>
  <div class="description">${el.company}</div>
  <div class="description">${el.soldTo}</div>
  <div class="description">${el.soft}</div>
</div>`)
  );
  clientList.insertAdjacentHTML('afterbegin', html);
};

const btnClients = document.querySelector('.btn1');
btnClients.addEventListener('click', function () {
  generateClientsList();
});

generateClientsList();

//Adding Software
const addSoft = document.querySelector('.add_soft');
const removeSoft = document.querySelector('.remove_soft');
const addClientBtn = document.querySelector('.add_client_btn');

addSoft.addEventListener('click', function () {
  const software = `${document.querySelector('#software').value} `;
  document
    .querySelector('.soft_added')
    .insertAdjacentHTML('beforeend', software);
});

removeSoft.addEventListener('click', function () {
  removingSoft();
});

//Adding new client
addClientBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const company = document.querySelector('.company').value;
  const soldTo = Number(document.querySelector('.sold_to_value').value);
  // const soft = document.querySelector('.soft_added').innerHTML.slice(0, -1);

  const softArray = document
    .querySelector('.soft_added')
    .innerHTML.slice(0, -1)
    .split(' ');

  const newCustomer = new Customer(company, soldTo, softArray);
  accounts.push(newCustomer);

  //Deleting values
  document.querySelector('.company').value = document.querySelector(
    '.sold_to_value'
  ).value = '';
  removingSoft();
});
