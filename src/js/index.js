/*
    This is your main stylesheet, you should use it only
    to include other styles into your web app.
*/
//include jquery into the bundle and store its contents into the $ variable
import $ from "jquery";
//include bootstrap npm library into the bundle
import 'bootstrap';
//include your own styles
import '../style/index.scss';

window.onload = function(){
    console.log('Hello Rigo from the console!');
    document.querySelector('.error').style.display = "none";
    
    var first = 'A ';
    var adj = ['two headed ','nuclear ', 'angry ', 'lonely ', 'crazy ','glowing ','smelly ','slow ','old '];
    var noun = ['jogger ','racoon ','dog ', 'merchant ', 'driver ', 'comedian ','pinecone '];
    var action = ['took my ','threw my ','yelled at my ','hit me '];
    var possetion = ['toe ', 'car ','watch ','shoe ','wallet ','shirt ','keys ','computer '];
    var where = ['on the street','in my house','in my drive way','in front of the office','near the mall'];
    
    var rdm1 = Math.floor((Math.random() * adj.length ) );
    var rdm2 = Math.floor((Math.random() * noun.length) );
    var rdm3 = Math.floor((Math.random() * action.length) );
    var rdm4 = Math.floor((Math.random() * possetion.length) );
    var rdm5 = Math.floor((Math.random() * where.length) );
    
    var finalSentence =  "A "+adj[rdm1]+noun[rdm2]+action[rdm3]+possetion[rdm4]+where[rdm5];

    document.querySelector("#excuse").innerHTML = finalSentence;
};