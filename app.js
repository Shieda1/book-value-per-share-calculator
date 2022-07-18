// https://calculator.swiftutors.com/book-value-per-share-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const bookValueRadio = document.getElementById('bookValueRadio');
const equityRadio = document.getElementById('equityRadio');
const sharesRadio = document.getElementById('sharesRadio');

let bookValue;
let equity = v1;
let shares = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

bookValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Total stockholder\'s equity ($)';
  variable2.textContent = 'Number of shares';
  equity = v1;
  shares = v2;
});

equityRadio.addEventListener('click', function() {
  variable1.textContent = 'Book value per share ($)';
  variable2.textContent = 'Number of shares';
  bookValue = v1;
  shares = v2;
});

sharesRadio.addEventListener('click', function() {
  variable1.textContent = 'Book value per share ($)';
  variable2.textContent = 'Total stockholder\'s equity ($)';
  bookValue = v1;
  equity = v2;
});


btn.addEventListener('click', function() {
  
  if(bookValueRadio.checked)
    result.textContent = `Book value per share = $${computeBookValue().toFixed(2)}`;

  else if(equityRadio.checked)
    result.textContent = `Total stockholder's equity = $${computeEquity().toFixed(2)}`;

  else if(sharesRadio.checked)
    result.textContent = `Number of shares = ${computeShares().toFixed(2)}`;
})

// calculation

function computeBookValue() {
  return Number(equity.value) / Number(shares.value);
}

function computeEquity() {
  return Number(bookValue.value) * Number(shares.value);
}

function computeShares() {
  return Number(equity.value) / Number(bookValue.value);
}