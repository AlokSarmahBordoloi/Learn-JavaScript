// new keyword      (1.0)



function createUser(fName, age){
    this.fName = fName;
    this.age = age;
}
createUser.prototype.about = function(){
    console.log(this.fName, this.age);
}

const user1 = new createUser('alok',87);                 // createUser pa jodi kiba napi tatia prototype goi beari lobo   ai relesion to  new keyword a nija boni lobo 

user1.about();






/* new keyword
 1) create empty object    this = {}        empty object r value this mana this a refer koris empty object k .    
     tar pesot empty object t key value pair add korilu 
 2) return  this    mana empty object to return kori debo . */


//function a amak free sapace dea aru kana kua sapace dea      object dea aru kana kua object dea   prototype .
