const fav="after";
let guessmovie=prompt("guess my fav movie guys");

while((guessmovie !=fav) && (guessmovie!="quit,i'm loser")){
    guess=prompt("ydk me,idiot");
}
if(guessmovie == fav){
    console.log("hey darling, you guessed it right");
}
else{
    console.log("bye,fuckoff");
}