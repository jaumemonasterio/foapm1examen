let emo = document.getElementById("emo");
let divemo= document.createElement("div");
//let text=document.getElementById("emoji");
let btnemo = document.getElementById("btnemo");
let con;
let text;


let data = {
    "Emoticons i persones": ["😀", "😁", "😂", "🤣" , "😎" , "🤓", "🤠", "🫤", "🫡"],
    "Animals i natura": ["🐶", "🐱", "🐭", "🐹" , "🐧", "🐦", "🐦‍⬛", "🦓", "🐝" , "🦄", "🦫"],
    "Menjar i beguda": ["🍏", "🍎", "🍐", "🍊"],
    "Actvitats" :[ "🥊", "🥋", "🏋️‍♂️", "🏋️","🏋️‍♀️" , "🏊‍♀️", "🏅", "🥇", "🥈", "🥉" ]
};



btnemo.onclick= function(){
    creacio(emo  ,ti);

}




function creacio(contenidor,tex){

    con=contenidor;
    //text=tex;
contenidor.innerHTML="";
    let categorye;
    let i =0;
    for (const category in data) {
        if (i===0){
            categorye=category;
            i++;
        }
        const buto = document.createElement('button');
        buto.textContent= category;
        buto.onclick= function () {
            mostrarem(category, tex);
        }
         contenidor.appendChild(buto);     
}
contenidor.appendChild(divemo);
mostrarem (categorye, tex);

}


 function escriureem (emoji, tex ){
    ti.value += emoji;
   

 }
function mostrarem(category,tex ){

   divemo.innerHTML=""; // borrem si hiha emogis

   
//let conemo= document.createElement("div");
    data[category].forEach(emoji => {
        console.log(emoji);

        let emobu= document.createElement('button');
        emobu.innerHTML= emoji;
        emobu.classList.add('emobut');
        divemo.appendChild(emobu);
        emobu.onclick= function (){

            escriureem(emoji);
        }
    

    });
con.appendChild(conemo);
   
}

