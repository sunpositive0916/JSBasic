console.log('in the JS');

const bodyEl = document.querySelector('body');
console.dir(bodyEl);

const h2El = document.querySelector('h2');
const pEl = document.querySelector('p');

function replaceH2Text(){
    h2El.innerText = '안녕하세요';
}

pEl.addEventListener('click', replaceH2Text);