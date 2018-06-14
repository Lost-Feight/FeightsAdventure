  function Enemy(level) {
    this.HP = Math.floor(10*Math.random())*level;
    this.speed = 1*level; 
    this.level= 1*level;
    this.def = 1*level;
    this.damage = 2*level;
    this.picture ="";
    this.item = [];
    this.typeList =["goblin", "cleric", "spider", "knight"];
    this.attackList = ["attacks for ", "attacks, does ", "swings furiously doing ", "hits doing ", "wildly swings for "];
    
    this.type= this.typeList[Math.floor(Math.random()*this.typeList.length-1)+1 ];

    switch (this.type){
      //goblin
      case this.typeList[0]:
        this.picture = "./background/goblin.png";

      break;
      //cleric
      case this.typeList[1]:
        this.speed *= 2;
        this.picture = "./background/cleric.png";
      
      break;
      //spider
      case this.typeList[2]:
        this.picture = "./background/spider.png";
        this.damage *= 1.5;
      break;
      //knight
      case this.typeList[3]:
        this.picture = "./background/knight.png";
        this.def *=2;
      break;
      
    }
    this.fight = function (enemy){
      player.HP -= enemy.damage;
      var hit = Math.floor(Math.random()*enemy.attackList.length);
      $(".well2").append("<p class='enemy'>" + enemy.type +" "+ enemy.attackList[hit] + enemy.damage +" Damage </p>");
      $(".well2").animate({scrollTop: $('.well2').prop("scrollHeight")}, 200);
    }             // end attack function
  }               /* **** end class **** */