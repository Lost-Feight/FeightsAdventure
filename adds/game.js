$(function(){
    player=[];
    area=[];
    area[0]=[];
    player.push(["positionX", 0]);
    player.push(["positionY", 0]);
    area[0][0] = ["nesw"];

    /*$(".playArea").html('');    
    
    $(".playArea").append('');*/
    $(".playArea").append("<img class='buttns' src='./background/buttons.gif'></img>");
    $(".playArea").append("<img class='road' src='./background/roads.gif' usemap='#compass'>");
});

function move(x,y){

}
function attack(){

}
function get(){

}
function sell(){

}

function show(x,y){

}

$(".goNorth").mouseup(function(){
    console.log("clickN")
  
})

$(".goEast").mouseup(function(){
    console.log("clickE")
  
})

$(".goSouth").mouseup(function(){
    console.log("clickS")
  
})

$(".goWest").mouseup(function(){
    console.log("clickW")
  
})