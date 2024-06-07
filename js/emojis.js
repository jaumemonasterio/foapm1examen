let emo = document.getElementById("emo");
let divemo = document.createElement("div");
//let text=document.getElementById("emoji");
let btnemo = document.getElementById("btnemo");
let con;
let text;


let data = {
    "Emoticons i persones": ["😀", "😁", "😂", "🤣", "😎", "🤓", "🤠", "🫤", "🫡"],
    "Animals i natura": ["🐶", "🐱", "🐭", "🐹", "🐧", "🐦", "🐦‍⬛", "🦓", "🐝", "🦄", "🦫"],
    "Menjar i beguda": ["🍏", "🍎", "🍐", "🍊"],
    "Actvitats": ["🥊", "🥋", "🏋️‍♂️", "🏋️", "🏋️‍♀️", "🏊‍♀️", "🏅", "🥇", "🥈", "🥉"]
};



btnemo.onclick = function () {
    creacio(emo);

}




function creacio(contenidor) {

    con = contenidor;
    //text=tex;
    contenidor.innerHTML = "";
    let categorye;
    let i = 0;
    for (const category in data) {
        if (i === 0) {
            categorye = category;
            i++;
        }
        const buto = document.createElement('button');
        buto.textContent = category;
        buto.onclick = function () {
            mostrarem(category);
        }
        contenidor.appendChild(buto);
    }
    contenidor.appendChild(divemo);
    mostrarem(categorye);

}


function escriureem(emoji) {
    ti.value += emoji;


}
function mostrarem(category) {

    divemo.innerHTML = ""; // borrem si hiha emogis

    data[category].forEach(emoji => {


        let emobu = document.createElement('button');
        emobu.innerHTML = emoji;
        emobu.classList.add('emobut');
        divemo.appendChild(emobu);
        emobu.onclick = function () {

            escriureem(emoji);
        }


    });
    
}

