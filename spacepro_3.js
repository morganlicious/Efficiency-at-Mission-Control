alert("Welcome!");
//countdown starts when user clicks  
if(onclick) {
    var onclick = true; 
    document.getElementById('Start').onclick = true;
    function start();
}
//function starting when clicked
 function start() {
    // start countdown from 10
    var counter = 10;
    if(counter<10) {
        setTimeout(function() {
            counter--;
            document.getElementById('DisplayCountdown').innerHTML = counter; 
            start();
        }, 1000); //timeout is supposed to be a second 
    }
    start(10);
   
//alert supposed to play when interval hits 0
    if (counter == 0) {
        alert('BLASTOFF!');
        clearInterval(counter);
    }
   
}

// if the user chooses so the countdown is supposed to stop when clicking on Stop 

if(click) {
    var onclick = false; 
    document.getElementById('Stop').onclick = false;
    function stopCountdown();
}

function stopCountdown() {
    if(onclick) {clearInterval(setTimeout());
    }
}
