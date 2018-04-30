var player = new Chara();
var map = new Map();
$(function(){  //on load window
    showMap(player.posX,player.posY);
});

function attack(){

}
function get(){

}
function sell(){

}

function showMap(x,y){
    $(".road").hide();
    $(".road").remove();

    $(".buttns").hide();
    $(".buttns").remove();

    var coOrds = map.intMap[y][x];
    var exits = coOrds.length;

    if (exits ==4){             //all exits
        $(".playArea").append("<img class='road' src='./background/roads.gif'>");
    } else if (exits ==3){      //3 exits
        switch (coOrds){
            case "new":
            case "nwe":
            case "ewn":
            case "enw":
            case "wen":
            case "wne":
                $(".playArea").append("<img class='road' src='./background/road3.gif'>");
            break;

            case "nes":
            case "nes":
            case "esn":
            case "ens":
            case "sen":
            case "sne":
                $(".playArea").append("<img class='road rotate-1' src='./background/road3.gif'>");
            break;
            
            case "esw":
            case "ews":
            case "sew":
            case "swe":
            case "wes":
            case "wse":
                $(".playArea").append("<img class='road rotate-2' src='./background/road3.gif'>");
            break;
            
            case "nsw":
            case "nws":
            case "swn":
            case "snw":
            case "wns":
            case "wsn":
                $(".playArea").append("<img class='road rotate-3' src='./background/road3.gif'>");
            break;
        }
    } else if (exits==2){       //2 exits
        switch (coOrds){
            case "ns":
            case "sn":
                $(".playArea").append("<img class='road' src='./background/roads2.gif'>");
            break;
            case "ew":
            case "we":
                $(".playArea").append("<img class='road rotate-1' src='./background/roads2.gif'>");
            break;
            case "ne":
            case "en":
                $(".playArea").append("<img class='road' src='./background/roads2c.gif'>");
            break;
            case "es":
            case "se":
                $(".playArea").append("<img class='road rotate-1' src='./background/roads2c.gif'>");
            break;
            case "sw":
            case "ws":
                $(".playArea").append("<img class='road rotate-2' src='./background/roads2c.gif'>");
            break;
            case "wn":
            case "nw":
                $(".playArea").append("<img class='road rotate-3' src='./background/roads2c.gif'>");
            break;
        }

    } else {                    //dead end
        if (coOrds=="n"){
            $(".playArea").append("<img class='road ' src='./background/road1.gif'>");
        } else if (coOrds[0]=="e"){
            $(".playArea").append("<img class='road rotate-1' src='./background/road1.gif'>");
        } else if (coOrds[0]=="s"){
            $(".playArea").append("<img class='road rotate-2' src='./background/road1.gif'>");
        } else {
            $(".playArea").append("<img class='road rotate-3' src='./background/road1.gif'>");
        }
    }
    var NME = new Enemy();
    
    
    
    $(".road").show();

    $(".playArea").append('<button class="buttns goNorth">N</button>');    //north button
    $(".playArea").append('<button class="buttns goEast">E</button>');    //east button
    $(".playArea").append('<button class="buttns goSouth">S</button>');    //south button
    $(".playArea").append('<button class="buttns goWest">W</button>');    //west button
    $(".buttns").show();
    $(".coord").html(player.posX+ ", "+player.posY);
    if (coOrds.includes("n")){
        $(".goNorth").mouseup(function(){
     //       console.log("clickN")
            player.posV(1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,1);
            }
            showMap(player.posX,player.posY);
        })
    }
    if (coOrds.includes("e")){
        $(".goEast").mouseup(function(){
   //         console.log("clickE");
            player.posH(-1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,2);
            }
            showMap(player.posX,player.posY);
            })
    }
    if (coOrds.includes("s")){
        $(".goSouth").mouseup(function(){
       //     console.log("clickS");
            player.posV(-1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,3);
            }
            showMap(player.posX,player.posY);
        })
    }
    if (coOrds.includes("w")){
        $(".goWest").mouseup(function(){
      //      console.log("clickW")
            player.posH(1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,4);
            }
            showMap(player.posX,player.posY);
        })
    }
}
// useful functions
