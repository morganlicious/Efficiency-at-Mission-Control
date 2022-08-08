alert("Welcome!");
//countdown starts when user clicks  
var Start = document.getElementById('Start');
Start.addEventListener('click', function() {
    var counter = 10;
    if(counter) {
        setInterval(function() {
            counter--;
            document.getElementById('DisplayCountdown').innerHTML = counter; 
            if (counter == 0) {
                alert('BLASTOFF');
                clearInterval(counter);
            }
        }, 1000); //timeout is supposed to be a second 
    }
}, true);


// if the user chooses so the countdown is supposed to stop when clicking on Stop 
var Stop = document.getElementById('Stop');
Stop.addEventListener('click', function(){
    clearInterval();
}, true);

