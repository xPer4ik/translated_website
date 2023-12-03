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
const b17 = document.getElementById('deleting');
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
        handleButtonClick('Доставка - 500руб.');
    });
    b13.addEventListener('click', function() {
        handleButtonClick('Сборка - 2000руб.');
    });

    b14.addEventListener('click', function() {
        handleButtonClick('Помощь мастера - 2500руб.');
    });
    b15.addEventListener('click', function() {
        handleButtonClick('Замер комнаты - 700руб.');
    });
}
if(b1 !==null){
    b1.addEventListener('click', function() {
        handleButtonClick('Кровать Modern - 150.000руб.');
    });
    b2.addEventListener('click', function() {
        handleButtonClick('Кровать Li-dia - 300.000руб.');
    });
    b3.addEventListener('click', function() {
        handleButtonClick('Кровать Mo-de - 100.000руб.');
    });

    b4.addEventListener('click', function() {
        handleButtonClick('Кровать Do-rid - 200.000руб.');
    });

    b5.addEventListener('click', function() {
        handleButtonClick('Кресло Classic - 30.000руб.');
    });

    b6.addEventListener('click', function() {
        handleButtonClick('Набор Tea-time - 150.000руб.');
    });
    b7.addEventListener('click', function() {
        handleButtonClick('Кресла Double-sitting - 88.000руб.');
    });

    b8.addEventListener('click', function() {
        handleButtonClick('Кресло Rich - 75.000 руб.');
    });
    b9.addEventListener('click', function() {
        handleButtonClick('Диван More than modern - 125.000руб.');
    });

    b10.addEventListener('click', function() {
        handleButtonClick('Диван Kit-Chen - 45.000руб.');
    });
    b11.addEventListener('click', function() {
        handleButtonClick('Диван Family - 80.000руб');
    });
}
if(b17!==null){
    b17.addEventListener('click', function() {
        localStorage.clear();
        document.getElementById('order').innerHTML = "Заказ";
        document.getElementById("all_order").innerHTML = '';
    })}
