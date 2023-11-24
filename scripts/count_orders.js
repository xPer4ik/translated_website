const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');
const b4 = document.getElementById('b4');
const b5 = document.getElementById('b5');
const b6 = document.getElementById('b6');
const b7 = document.getElementById('b7');
const b8 = document.getElementById('b8');
const b9 = document.getElementById('b9');
const b10 = document.getElementById('b10');
const b11 = document.getElementById('b11');
const b12 = document.getElementById('b12');
const b13 = document.getElementById('b13');
const b14 = document.getElementById('b14');
const b15 = document.getElementById('b15');
const b16 = document.getElementById('order');
counter = localStorage.getItem('counter2');
if(counter !==null){
    b16.innerText = 'Заказ[' + counter + "]";
}

function handleButtonClick(itemToAdd) {
    counter++;
    b16.innerText = 'Заказ[' + counter + "]";
    localStorage.setItem('counter2', counter);
    
    const storedArrayString = localStorage.getItem('array');
    const storedArray = JSON.parse(storedArrayString) || [];
    storedArray.push(itemToAdd);
    localStorage.setItem('array', JSON.stringify(storedArray));
}

if(b12 !== null)
{
    b12.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b13.addEventListener('click', function() {
        handleButtonClick('seven');
    });

    b14.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b15.addEventListener('click', function() {
        handleButtonClick('six');
    });
}
if(b1 !==null){
    b1.addEventListener('click', function() {
        handleButtonClick('seven');
    });
    b2.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b3.addEventListener('click', function() {
        handleButtonClick('seven');
    });

    b4.addEventListener('click', function() {
        handleButtonClick('six');
    });

    b5.addEventListener('click', function() {
        handleButtonClick('seven');
    });

    b6.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b7.addEventListener('click', function() {
        handleButtonClick('seven');
    });

    b8.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b9.addEventListener('click', function() {
        handleButtonClick('seven');
    });

    b10.addEventListener('click', function() {
        handleButtonClick('six');
    });
    b11.addEventListener('click', function() {
        handleButtonClick('seven');
    });

}