function startGame(){
    for(var i=1; i<=9;i=i+1)
    { 
        clearBox(i);
        console.log(i)
    }

    document.turn="X";
    if (Math.random() <0.5){
        document.turn="O";
    }
    document.winner=null;
    setMessage(document.turn +  "  "+ " `s turn's ");
}

function setMessage(msg)
{
    document.getElementById('message').innerText=msg;
}

function nextMove(square){
    if(square.innerText ==""){
    square.innerText = document.turn;
    switchTurn();
}else{
    setMessage("Learn to play");
}
}

function switchTurn()
{
    if(checkForWinner(document.turn)){
        setMessage(" Good Job, " + document.turn +" You win ");
    }else if(document.turn=="X"){
        document.turn="O";
        setMessage(document.turn +" `s turn ");
    }else{
        document.turn="X";
        setMessage(document.turn +" `s turn ");
    }

}

function checkForWinner(move)
{
    var result=false;
    if(checkRow(1,2,3,move) ||
        checkRow(4,5,6,move) ||
        checkRow(7,8,9,move) ||
        checkRow(1,4,7,move) ||
        checkRow(2,5,8,move) ||
        checkRow(3,6,9,move) ||
        checkRow(1,5,9,move) ||
        checkRow(3,5,7,move))
        {
            result=true;
        }

       return result;

}

function checkRow(a,b,c,move){
    var result=false;
    if(getBox(a)== move && getBox(b)== move && getBox(c)==move){
        result=true;
    }
    return result;
}

function getBox(number){
    return document.getElementById("s" + number).innerText;
    

}

function clearBox(number){
    console.log(number);
    document.getElementById("s" + number).innerText= "";
    
}
