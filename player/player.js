/*
**********  Chara class (character) **********
*/
function Chara() {
    this.HP = 20;
    this.exp= 0;
    this.posX = 25;
    this.posY = 25;
    this.inv = [];
    this.level = 1;
    this.spd=1;
    this.str=1;
    this.end=1;
    this.bkGround = 0;
    this.def=0;
    this.name = "Fighter";

    this.bio = function() {
      alert(this.hp + 'HP- Level: ' +this.level);
    };
    //player position change
    this.posH = function(num){
      this.posX += num;
    };
    this.posV = function(num){
      this.posY += num;
    };
    //player inventory change
    this.addInv = function(item){
      this.inv.push(item);
    };
    this.removeInv = function(item){
      //TODO remove item from inventory
    };
    //player stats change
    this.chStr = function(num){
      this.str += num;
    };
    this.chSpd = function(num){
      this.spd += num;
    };
    this.chEnd = function(num){
      this.end += num;
    };

  };




/*
**********  MAP CLASS **********
*/


  function Map() {
    this.intMap =[];// = new Array(11);
    var myRow= [""];
  
  // Creates all lines:
  for(var i=0; i < 51; i++){

    // Creates an empty line
    this.intMap.push([]);

    // Adds cols to the empty line:
    this.intMap[i].push( new Array(101));

    for(var j=0; j < 51; j++){
      // Initializes:
      this.intMap[i][j] = "";
    }
}
    
    this.intMap[25][25] = ("nesw");
    this.exitList ="nesw";

    this.generate = function(x,y,dir){
      var howMany = Math.floor(Math.random()*3)+1;
      var exits="";
      switch(dir){
        case 1:     //to north
        exits="";
        exits += "s";
        break;
        case 2:     //to east
        exits="";
        exits += "w";
        break;
        case 3:     //to south
        exits="";
        exits += "n";
        break;
        case 4:     //to west
        exits="";
        exits += "e";
        break;
      }

      switch (howMany){
        case 1:
        break;
        case 4:
          exits = "nesw";
        break;
        case 2:
        var myTrue = true;
          while (exits.length<howMany){
            var n= Math.floor(4*(Math.random()));
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
      }
      this.intMap[y][x]=exits;
    }
  };

