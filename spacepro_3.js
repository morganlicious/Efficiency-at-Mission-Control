alert("Welcome!");
//countdown starts when user clicks  
 function start() {
    var counter = 10; 
    // start countdown from 10
    setTimeout(() => {
         document.getElementById("DisplayCountdown").innerHTML = counter;
        counter = counter - 1;
    }, timeout)
    
    timeout = timeout - 1000;

    setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   timeout = timeout - 1000;

 setTimeout(() => {
         document.getElementById("DisplayCountdown").innerHTML = counter;
        counter = counter - 1;
    }, timeout)
    timeout = timeout - 1000;

    setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   
   timeout = timeout - 1000;
  
   setTimeout(() => {
         document.getElementById("DisplayCountdown").innerHTML = counter;
        counter = counter - 1;
    }, timeout)
    
    timeout = timeout - 1000;
   
    setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   
   timeout = timeout - 1000;
  
     setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   
   timeout = timeout - 1000;

     setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   
   timeout = timeout - 1000;

     setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   
   timeout = timeout - 1000;

     setTimeout(() => {
        document.getElementById("DisplayCountdown").innerHTML = counter;
       counter = counter - 1;
   }, timeout)
   timeout = timeout - 1000;

   
//alert supposed to play when interval hits 0
    if (counter == 0) {
        alert('BLASTOFF!');
        clearInterval(counter);
    }
   
}

// if the user chooses so the countdown is supposed to stop when clicking on Stop 
function stopCountdown() {
    clearInterval(setTimeout());
}
