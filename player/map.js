/*
**********  MAP CLASS **********
*/


function Map() {
    this.intMap =[]; 
    var myRow= [""];
    this.rollNumber =0;
    this.encEnd = true;

                // Creates all lines:
    for(var i=0; i < 51; i++){

               // Creates an empty line
        this.intMap.push([]);

                // Adds cols to the empty line:
        this.intMap[i].push( new Array(51));

        for(var j=0; j < 51; j++){
                // Initializes:
            this.intMap[i][j] = "";
        }
    }
    
    this.intMap[25][25] = ("nesw");
    this.exitList ="nesw";

    this.generate = function(x,y,dir){                  //Generate Exits
        var howMany = Math.floor(Math.random()*4);
        var exits="";
    
        switch(dir){
            case 1:         //to north
                exits="";
                exits += "s";
            break;
            case 2:         //to east
                exits="";
                exits += "w";
            break;
            case 3:         //to south
                exits="";
                exits += "n";
            break;
            case 4:         //to west
                exits="";
                exits += "e";
            break;
        }                   //end switch

        switch (howMany){
            case 1:
            break;
            case 4:
                exits = "nesw";
            break;
            case 2:
                var myTrue = true;
                while (exits.length<howMany){
                    var n= Math.floor(4*Math.random());
                    var exCheck = this.exitList[n]
                    if (!exits.includes(exCheck)){
                        exits += exCheck;
                    }
                }
            break;
            case 3:
                while (exits.length<howMany){
                    var n= Math.floor(Math.random()*4);
                    if (!exits.includes(this.exitList[n])){
                        exits += this.exitList[n];
                        if (exits.length ==n){
                            myTrue = false;
                        }
                    } 
                };
            break;
        }                               //end switch
    
        this.intMap[y][x]=exits;
    }

this.showMap = function showMap(x,y,rollEnc){
        
        map.hideBG();                   //hide and delete map elements
        
        map.showJBg();                  //show just the background
        
        var coOrds = map.intMap[y][x];
        var exits = coOrds.length;
    
    //determine which exit to show
    
        if (exits ===4 || exits>4){             //all exits 
            $(".playArea").append("<img class='road' src='./background/roads.gif'>")
        
        } else if (exits ===3){      //3 exits
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
                case "nse":
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

    
    //display game

    $(".road").show();
    $(".road").show();

    $(".playArea").append('<button class="buttns goNorth">N</button>');    //north button
    $(".playArea").append('<button class="buttns goEast">E</button>');    //east button
    $(".playArea").append('<button class="buttns goSouth">S</button>');    //south button
    $(".playArea").append('<button class="buttns goWest">W</button>');    //west button
    $(".buttns").show();
    $(".coord").html(player.posX+ ", "+player.posY);
                                    //functions for moving direction and added to NESW buttons
    if (coOrds.includes("n")){
        $(".goNorth").mouseup(function(){
    
            player.posV(-1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,1);
            }
            if (rollEnc){
            map.encounter();
            } else {
            map.showMap(player.posX,player.posY, true);
            }
        })
    }
    if (coOrds.includes("e")){
        $(".goEast").mouseup(function(){
   
            player.posH(1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,2);
            }
            if (rollEnc){
                map.encounter();
            } else {
                map.showMap(player.posX,player.posY, true);
                }
            })
    }
    if (coOrds.includes("s")){
        $(".goSouth").mouseup(function(){
       
            player.posV(1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,3);
            }
            if (rollEnc){
              map.encounter();
            } else {
                map.showMap(player.posX,player.posY, true);
                }
        })
    }
    if (coOrds.includes("w")){
        $(".goWest").mouseup(function(){
      
            player.posH(-1);
            if (!map.intMap[player.posY][player.posX]){
                map.generate(player.posX,player.posY,4);
            }
            if (rollEnc){
                map.encounter();
            } else {
            map.showMap(player.posX,player.posY, true);
            }
        });
    }
  }

this.hideBG = function hideBG(){
    $(".road").hide();
    $(".road").remove();

    $(".buttns").hide();
    $(".buttns").remove();

    $(".bkGnd").hide();
    $(".bkGnd").remove();
}

this.showJBg = function showJBg(){
    
    switch (player.bkGround){
        case 0:         //red
            $(".playArea").replaceWith('<div class="playArea col-sm-10 col-md-6"><img class="bkGnd" src="./background/redBg.png"></img>');
            $(".playArea").hide();
            $(".playArea").show();
        break;
        case 1:         //Yellow
            $(".playArea").replaceWith('<div class="playArea col-sm-10 col-md-6"><img class="bkGnd" src="./background/YellowBg.png"></img>');
            $(".playArea").hide();
            $(".playArea").show();
        break;
        case 2:         //purple
            $(".playArea").replaceWith('<div class="playArea col-sm-10 col-md-6"><img class="bkGnd" src="./background/PurpleBg.png"></img>');
            $(".playArea").hide();
            $(".playArea").show();
        break;
        case 3:         //Grey
            $(".playArea").replaceWith('<div class="playArea col-sm-10 col-md-6"><img class="bkGnd" src="./background/GreyBg.png"></img>');
            $(".playArea").hide();
            $(".playArea").show();
        break;
        case 4:         //Green
            $(".playArea").replaceWith('<div class="playArea col-sm-10 col-md-6"><img class="bkGnd" src="./background/GreenBg.png"></img>');
            $(".playArea").hide();
            $(".playArea").show();
        break;
    }
}
            // Encounter
this.encounter = function encounter(){
    map.hideBG();
    map.showJBg();
    var enemy = new Enemy(player.level);
    $(".well2").append("<p class='enemy'>You are fighting a " + enemy.type + "</p><br>");
    $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
    $(".playArea").append("<div class='fight row'><div class='playerImg xs-col-6'><img src='./player/player.png'</div><div class='enemyImg'></div>");
    $(".fight").append("<div class='enemyImg xs-col-6'> <img class= 'enemyImg' src=" + enemy.picture + "></img></div></div>");
    
    $(".enemyImg").mouseup(function(){
        console.log("fight");
        player.fight(enemy);
    });
    $(".playerImg").mouseup(function (){
        console.log("heal");
        player.defend();
    });    

    //roll for nothing & encounter % item
        
    //while (rollNumber < 2){ // continue to roll for EIN's (Enemy, Item, Nothing)
    /*
        var roll = Math.floor(Math.random()*100); //new roll each time
            var rates = 10 *(map.rollNumber+1);
        if (roll < rates){
                                 //fight
            var enemy = new Enemy(player.level);
            // map.showJBg();
            if (enemy.HP <=0){
                map.encEnd = true;
            }   else if (player.HP <=0){
                map.GameOver();
            }
            $(".playerImg").mouseup(player.defend()); 

        } else if (roll < (rates)*2){
                                //item
            map.encEnd = true;
            $(".well2").append("<p> You found an item </p><br>");
            $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
        } else if (roll >= (rates)*2){
                               // nothing
            map.encEnd=true;
            $(".well2").append("<p>You pass into the next room, uneventfully</p><br>");
            $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
            map.showMap(player.posX,player.posY, true);
            break;
        }
            if (player.exp > player.level*1000){
                console.log("LevelUP");
                player.exp = 0;
                player.level++;
                player.maxHp += Math.floor(Math.random()*15);
                map = new Map();
                player.posX = 25;
                player.posY = 25;
                
                var maths = (Math.floor(Math.random()*100))%5;
                while (player.bkGround ==maths){
                    maths = (Math.floor(Math.random()*100))%5;
                }
                player.bkGround = maths;
                $(".well2").append("<p> You Descend to a new level </p>");
                $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
                map.showMap(player.posX, player.posY, false);
                map.updateChar(player);
            

        }*/
    
    
/*
    player.HP = player.maxHp;
    map.updateChar(player);
    if (encEnd){
    map.showMap(player.posX,player.posY, true);
    };
    /*console.log(map.intMap);*/


}               //End encounter

this.updateChar = function updateChar(player){
    $(".charName").replaceWith('<h3 class= "charName">'+ player.name +'<span class="charLevel"></span></h3>')
    $(".charLevel").replaceWith('<span class="charLevel"> ('+ player.level +')</span>')
    $(".playerHealth").replaceWith('<span class="playerHealth">'+ Math.floor(player.HP) +'</span>');
    $(".playerExp").replaceWith('<span class="playerExp">'+ Math.floor(player.exp) +'</span>');
}



    this.GameOver = function GameOver(){
        //insert GAME OVER stuff
        console.log("game over");
        player = new Chara;
    //  map.showMap(player.posX,player.posY, false);
        map.updateChar(player);
        $(".well2").html("<p>Game Over</p><p>Welcome Back to Feights Adventure</p><p>Use the Compass Points to move around</p>");

    }
}                           //****end class****
