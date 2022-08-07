alert("Welcome!");
// game starts playing once user clicks 
function play() {
    var slots1 = 5;
    var slots2 = 2;
    var sum = slots1+slots2;
    document.write("Slot 1 = " + slots1);
    document.write("<br/>");
    document.write("Slot 2 = " + slots2);
    document.write("<br/>");
    document.write("Sum = " + sum);
    document.write("<br/>");

    //so far, this is what is given to the player 
if (sum == 7 || sum == 11) {
    document.write("CRASH - you lose")
    document.write("<br/>")
}
else if (slots1 == slots2 && slots1%2 == 0) {
    document.write("BLASTOFF! - you win")
    document.write("<br/>")
}}
document.write("<br/>");
//figure out how to make this have a style ID compared to the rest 
document.write("UAT Space Program");
document.write("<br/>");