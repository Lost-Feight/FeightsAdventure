/*
**********  Chara class (character) **********
*/
function Chara() {
    this.maxHp = 40;
    this.HP = this.maxHp;

    this.exp= 0;
    this.posX = 25;
    this.posY = 25;
    this.inv = [];
    this.level = 1;
    this.speed=1;
    this.str=1;
    this.end=1;
    this.bkGround = 0;
    this.def=0;
    this.PDamage=3;
    this.name = "Fighter";
    this.inventory = [];
    this.attackList = ["attack for ", "attack, doing ", "swing furiously doing ", "hit doing ", "wildly swing for "];

    this.bio = function() {
      alert( this.HP + 'HP- Level: ' + this.level );
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

    this.start = function start(){
      //map.showJBg();
      $(".playArea").append("<div class = 'startinput'><input type='text' name='CharacterName' id='CharName'></input><br><button class='Charname'>Name your character</button></div>");
      $( "input" ).keyup(function() {
        this.name = $( this ).val();
        $( ".charName" ).text( this.name );
      }).keyup();
      

    $(".Charname").mouseup(function(){
    	player.name = $("input").val();
    	map.updateChar(player);
        map.showMap(player.posX,player.posY, false);
        })
        
      
    }
   
  this.fight= function fight(enemy){

    var damage = enemy.damage *Math.random();
    enemy.HP -= damage;
    var eHit = Math.floor(Math.random()*enemy.attackList.length);
                        //PLAYER attacks
    $(".well2").append("<p class='player'> You " + this.attackList[eHit] + this.PDamage +" Damage </p>");
    $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
						//NME attacks
	if (enemy.HP <=0){
		player.HP = player.maxHp;
		player.exp+= Math.floor(Math.random()*100);
		if (player.exp >500*player.level){
			player.exp = 0;
			player.level++;
			var newBkGround = Math.floor(Math.random()*4);
			while (this.bkGround == newBkGround){
				newBkGround = Math.floor(Math.random()*4);
			}
			player.bkGround = newBkGround;
			map = new Map;
			player.posX = 25;
			player.posY = 25;
			map.updateChar(player);
			map.showMap(player.posX,player.posY,false);	
		} else {
    	map.updateChar(player);
		map.showMap(player.posX,player.posY,false);
		}
	} else if (enemy.HP >0){
	enemy.fight(enemy);
    map.updateChar(player);
	}
	if (player.HP <=0){
		$(".playArea").html("<img class= 'gameover' src='./background/Gameover.png' > </img><h2> Reload the page to start again</h2>");
		
	}

    
  }           //end fight() function

  this.defend = function defend(){
	player.HP += (Math.floor(Math.random()*this.level*this.end*10));
	if (player.HP > player.maxHp){
		player.HP = player.maxHp;
	}
	map.updateChar(player);
  } //end defend function

}; //end Chara class

