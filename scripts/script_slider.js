nextButton = document.getElementById('nextButton');
backButton = document.getElementById('backButton');
allItems = document.getElementById('allItems');
const numItem = document.querySelectorAll('.numItem');
var tmpMar = 0;
var rightOrLeft = true

nextButton.addEventListener('click', function(e) {
    NextButton(1);
})
backButton.addEventListener('click', function(e) {
    BackButton(1);
})

function BackButton(n) {
    clearInterval(refreshInterval)
    tmpMar = (tmpMar - n) % 4;
    if (tmpMar == -1) 
        tmpMar = 3
    allItems.style.marginLeft = (tmpMar * -100) + '%'

    newTmpMar = (tmpMar + n) % 4
    numItem[newTmpMar].style.backgroundColor = "rgba(255, 255, 255, 0)"
    numItem[tmpMar].style.backgroundColor = "rgba(255, 255, 255, 0.664)"
    rightOrLeft = false;

    refreshInterval = setInterval(Interval, 10000)
}
function NextButton(n) {
    clearInterval(refreshInterval)
    tmpMar = (tmpMar + n) % 4;
    allItems.style.marginLeft = (tmpMar * -100) + '%'

    newTmpMar = tmpMar - n
    if (newTmpMar == -1)
        newTmpMar = 3
    numItem[newTmpMar].style.backgroundColor = "rgba(255, 255, 255, 0)"
    numItem[tmpMar].style.backgroundColor = "rgba(255, 255, 255, 0.664)"
    rightOrLeft = true;
    
    refreshInterval = setInterval(Interval, 10000)
}

var refreshInterval = setInterval(Interval, 10000)
function Interval() {
    if (rightOrLeft) {
        NextButton(1);
    }
    else BackButton(1);
}

numItem.forEach((item) => {
    item.addEventListener('click', (e) => {
        var i = 3
        while (i >= 0) {
            if (numItem[i % 4] == item) {
                break
            }
            i--;
        }
        if (numItem[tmpMar] == item) {
            clearInterval(refreshInterval)
            refreshInterval = setInterval(Interval, 10000)
        }
        else {
            if (tmpMar < i) {
                NextButton(i - tmpMar)
            }
            else {
                BackButton(tmpMar - i)
            }
        }
    });
});