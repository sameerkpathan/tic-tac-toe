let sign = "X";

//to show op meance who win whos next turn so we select 
let display = document.getElementById("player");


// get td 

function printx(number){
    let tabledata = document.getElementById("r"+number);
    console.log(tabledata);
    //when we click it show X and O
    // we used if consition for not accespt double input
    if(tabledata.innerText==""){
        tabledata.innerText=sign;
        winner();

        checksign();
    }
//   to display which has next turn 
   display.innerHTML="<center>" + `${sign} Turn` + "</center>"; 
}

// to print X and O alternatively
function checksign(){
    if(sign === "X"){
        sign = "O";
    }else{
        sign = "X";
    }
}

// Winner Logic 
function getbox(no){
    return document.getElementById("r"+no).innerHTML;
}
function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m)
    return true;
    else return false;
}

function winner(){
    if(checkmove(1,2,3,sign) || checkmove(4,5,6,sign) || checkmove(7,8,9,sign) || checkmove(1,4,7,sign) || checkmove(2,5,8,sign) || checkmove(3,6,9,sign) || checkmove(1,5,9,sign) || checkmove(7,5,3,sign)) {
    // to display winner
        display.innerHTML="<center>" + "Congratulation " + sign +" is winner"+ "</center>";
// once a winner declared it can cleared input 
     for(let i=1;i<=9;i++){
         document.getElementById("r"+i).innerHTML="";
     }
     show();
     throw "game end";
    } else if(getbox(1)!="" && getbox(2)!="" && getbox(3)!="" && getbox(4)!="" && getbox(5)!="" && getbox(6)!="" && getbox(7)!="" && getbox(8)!="" && getbox(9)!=""){
        display.innerHTML="<center>" + " its a tie "+ "</center>";
        for(let i=1;i<=9;i++){
            document.getElementById("r"+i).innerHTML="";
        }
        throw "its a tie";
        
    }

}
// for reload function 


let setgame = document.getElementById("newgame");
setgame.addEventListener("click",gameload);

function gameload() {
    window.location.reload(true);
}

// for change theme 

let background = document.getElementById("changebg");

background.addEventListener("click",bgchange);
function bgchange(){
    let totalbody = document.body;
    if(totalbody.className == "day"){
        totalbody.className = "classic"
    }else {
        totalbody.className = "day";
    }
}

// confetti


function show(){

    confetti.start();
    setTimeout(()=>{
        confetti.stop();
    },3000);
}
