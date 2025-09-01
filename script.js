var playerC;
var computerC;
function play(){
    num = (Math.floor(Math.random) * 3 + 1)
    switch (num){
        case 1:
            computerC = "stone";
            break;
        case 2:
            computerC = "paper";
            break;
        case 3:
            computerC = "scissor";
            break;

        default:
            console.log("looping hammourage")
            break;

    }
}
play();
pnum= parseInt(prompt("enter choice : 1 stone , 2 paper , 3 scissor"));
switch (pnum){
    case 1:
        playerC = "stone";
        break;
    case 2:
        computerC = "paper";
        break;
    case 3:
        computerC = "scissor";
        break;

    default:
        console.log("looping hammourage")
        break;
}
if (playerC == computerC){
    alert("draw")
}
else if (computerC == "stone" && playerC == "scissor" || computerC == "paper" && userC == "stone" || computerC == "scissor" && userC == "paper"){
    alert("computer wins")
}
else {alert("user wins")}
