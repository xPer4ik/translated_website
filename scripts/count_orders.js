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
    b16.innerText = 'Order[' + counter + "]";
}

function handleButtonClick(itemToAdd) {
    counter++;
    b16.innerText = 'Order[' + counter + "]";
    localStorage.setItem('counter2', counter);
    
    const storedArrayString = localStorage.getItem('array');
    const storedArray = JSON.parse(storedArrayString) || [];
    storedArray.push(itemToAdd);
    localStorage.setItem('array', JSON.stringify(storedArray));
}

if(b12 !== null)
{
    b12.addEventListener('click', function() {
        handleButtonClick('Delivery - 500rubles.');
    });
    b13.addEventListener('click', function() {
        handleButtonClick('Assembling - 2000rubles.');
    });

    b14.addEventListener('click', function() {
        handleButtonClick('Master`s help - 2500rubles.');
    });
    b15.addEventListener('click', function() {
        handleButtonClick('Measuring a room - 700rubles.');
    });
}
if(b1 !==null){
    b1.addEventListener('click', function() {
        handleButtonClick('Bed Modern - 150.000rubles.');
    });
    b2.addEventListener('click', function() {
        handleButtonClick('Bed Li-dia - 300.000rubles.');
    });
    b3.addEventListener('click', function() {
        handleButtonClick('Bed Mo-de - 100.000rubles.');
    });

    b4.addEventListener('click', function() {
        handleButtonClick('Bed Do-rid - 200.000rubles.');
    });

    b5.addEventListener('click', function() {
        handleButtonClick('Armchair Classic - 30.000rubles.');
    });

    b6.addEventListener('click', function() {
        handleButtonClick('A set of Tea-time - 150.000rubles.');
    });
    b7.addEventListener('click', function() {
        handleButtonClick('Armchair Double-sitting - 88.000rubles.');
    });

    b8.addEventListener('click', function() {
        handleButtonClick('Armchair Rich - 75.000 rubles.');
    });
    b9.addEventListener('click', function() {
        handleButtonClick('Sofa More than modern - 125.000rubles.');
    });

    b10.addEventListener('click', function() {
        handleButtonClick('Sofa Kit-Chen - 45.000rubles.');
    });
    b11.addEventListener('click', function() {
        handleButtonClick('Sofa Family - 80.000rubles');
    });
}
if(b17!==null){
    b17.addEventListener('click', function() {
        localStorage.clear();
        document.getElementById('order').innerHTML = "Order";
        document.getElementById("all_order").innerHTML = '';
    })}
