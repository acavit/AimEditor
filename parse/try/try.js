
/*
function Person (name, street){
  this.name=name;
  this.street=street;
  this.info = function(){
    return "my name is " + this.name ;
  };
}
var bob = new Person("cav","233");
document.write(bob.info()+"<br/>");

function Coordinates (){
  this.lengti=0;
  this.longti=0;
}
Object.__defineGetter__.call(
  Coordinates.prototype, "getCoords",
  function(){
      return "lat :" + this.lengti + " lot" + this.longti;
  }
);

Object.__defineSetter__.call(
  Coordinates.prototype, "setCoords" ,
    function (myVal){
      this.lengti = myVal;
    }
)

var cor = new Coordinates();
document.write(cor.getCoords+"<br/>");
cor.setCoords=15;
document.write(cor.getCoords+"<br/>");

function extend (Child, Parent){
  var Temp = function(){}
  Temp.prototype = Parent.prototype;
  Child.prototype = new Temp();
  Child.prototype.constructor = Child;
}
function Animal (){
    var name = "animal";
    this.toString = function(){
      return "my name is " + this.name;
    };
}
function Deer(){
  var name = "Deer";
  var sound = "snort";
}
Animal.prototype.sound="grr";
Animal.prototype.getsound=function (){
  return this.name +" says "+ this.sound;
}
extend(Deer,Animal);
var elk = new Deer();
document.write(elk.getsound()+"<br/>");






class Point {

  constructor (xPos, yPos){
    this.xPos = xPos;
    this.yPos = yPos;
  }

  getPos(){
    return "x " + this.xPos;
  }
}

var po = new Point (100,200);
po.xPos = 400;
document.write(po.getPos());


//**************************************
var user = function (name){
 var name = name ;
 var getName = function (){
    return name ;
 }

 return {
   getName: getName,
   setName: function (n){
     name =n;
 }
 };
}

var brad = new user("cav");
brad.setName("mav");
document.write(brad.getName()+"<br/>");

//*******************************
var peopleFactory = function (name,age,state){
    var temp = {};
    temp.age = age;
    temp.name=name;
    temp.state=state;

    temp.printPerson= function(){

        document.write(this.name+"  "+this.age+"  "+this.state+"<br/>");
    };
    return temp;

};
var person1 = peopleFactory("joshn" ,23 , "ca");
var person2 = peopleFactory("kim" ,27 , "sc");
person1.printPerson();
person2.printPerson();
//******************************
var peopleConstructor = function(name , age , state){
  this.name = name ;
  this.printPerson = function(){
    document.write(this.name+"<br/>");
  };

};
var person3 = new peopleConstructor('ter',10,'ca');
person3.printPerson();

//**********************************

var peopleProto = function (){

};

peopleProto.prototype.age=0;
peopleProto.prototype.printPerson=function(){
    document.write(this.age+"<br/>");
};

 var person4 = new peopleProto();
 person4.age=22;
 person4.printPerson();
 //**********************************

 var peopleDynamicProto = function (name){
 this.name = name;

    if (typeof this.getTheName !=="function" ){
        peopleDynamicProto.prototype.getTheName= function(){
            document.write(this.name+"<br/>");
        };
    }

    if (typeof this.setTheName !=="function" ){
        peopleDynamicProto.prototype.setTheName= function(myVarName){
            this.name=myVarName;
        };
    }
 };

var meOb = new peopleDynamicProto("german");
var meOba = new peopleDynamicProto("fr");
meOb.getTheName();
meOba.getTheName();
meOb.getTheName();
meOba.setTheName("instead of fr");
meOba.getTheName();

//****************
//function calling method1
function (){
  console.log("method 1");
}
foo();

var obj={};

obj.foo = function (){
  console.log("method 2");
};

obj.foo();


new foo();// 3 way to call function

//forth mthod
*/
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    //super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
