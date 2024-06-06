let en = document.getElementById("enquesta");
let opcio = 0;
let salt = document.createElement("br");
let enques = false;
let divgen =document.createElement("div");
let div = document.createElement("div");
let ti = document.getElementById("titol");
let tit;
let opcions;
let pri = document.getElementById("pri");
let po = document.getElementById("po");
let tib = false;
let opb = false;
function nova() {


    tit = ti.value.trim();

    if (tit.length === 0) {


        if (!tib) {
            tib = true;

            let error = document.createElement("p");
            error.classname = "error";
            error.innerHTML = "el nom del post es obligatori";
            error.style.color = "red";
            ti.classList.add("txterror");
            po.appendChild(error)
        }

    } else {

        let titol = document.createElement("h1");

        titol.innerHTML = tit;
        pri.innerHTML = "";
        emo.innerHTML="";
        en.appendChild(titol);
        generaopcio();
        generaopcio();
        en.appendChild(divgen);
        divgen.appendChild(div);
        let btn = document.createElement("button");
        btn.textContent = "+";
        btn.onclick = function () {

            generaopcio();
        }

        en.appendChild(btn);
        enques = true;

        let post = document.createElement("button");
        post.textContent = "enviar enquesta";
        post.onclick = function () {

            enva();
        }
        let salt = document.createElement("br");
        en.appendChild(salt);
        en.appendChild(post);
        
    }
}



function enva() {


    opcions = [];
    let blanc = false;

    let inputs = document.querySelectorAll('#enquesta input');
    inputs.forEach(function (input) {
     

        if (input.value.trim().length === 0) {
            blanc = true;

            input.classList.add("txterror");

        } else{
            input.classList.remove("txterror");
        }

        
        opcions.push(input.value);
    });
    if (blanc) {

        if (!opb) {
            opb = true;
            let errorop = document.createElement("p");
            errorop.innerHTML = " no es poden deixar opcions en blanc";
            errorop.style.color = "red";
            divgen.appendChild(errorop);
        }

    } else {
        pri.innerHTML = "";
        en.innerHTML = "";
        let titol = document.createElement("h1");
        titol.innerHTML = tit;
        en.appendChild(titol);

        for (let i = 0; i < opcions.length; i++) {
            const o = opcions[i];
            let but = document.createElement("button");
            but.textContent = o;
            but.onclick = function () {
                esta(i);
            }
            en.appendChild(but);
            let salt = document.createElement("br");
            en.appendChild(salt);

        }
        let salt = document.createElement("br");
        en.appendChild(salt);
    }

}


function esta(tri) {

    en.innerHTML = "";
    let titol = document.createElement("h1");
    titol.innerHTML = tit;
    en.appendChild(titol);

    for (let index = 0; index < opcions.length; index++) {
        const o = opcions[index];
        let p = document.createElement("p");
        let conp=document.createElement("div");
        conp.classList.add("contenidor");


        let progres= document.createElement("div");
        progres.classList.add("progres");
        if (index == tri) {
            p.innerHTML = o + ": 100%"; 
            progres.style.width= "100%";

        } else {
            p.innerHTML = o + ": 0%";
            progres.style.width= "2%";
        }
       //conp.appendChild(progres);
        en.appendChild(p);
        en.appendChild(progres);

    }
    let salt = document.createElement("br");
    en.appendChild(salt);
}


function generaopcio() {

    if (opcio < 4) {
        let salt = document.createElement("br");
        div.appendChild(salt);
        let p = document.createElement("label");
        p.id = "pop" + opcio;
        p.innerHTML = "0/25";

        opcio++;
        let teop = document.createElement('input');
        teop.type = 'text';
        teop.id = 'op' + opcio;
        teop.name = 'opcio' + opcio;
        teop.placeholder = 'opcio' + opcio;



        teop.addEventListener("input", () => {

            // Obtenim el contingut del textarea
            var text = teop.value;
            // Comptem el nombre de lletres
            var numLletres = text.length;
            if (numLletres > 25) {

                text = text.substring(0, 25);
                teop.value = text;

            }
            // Mostrem el nombre de lletres


            p.innerHTML = text.length + "/25";

        });


        div.appendChild(teop);
        div.appendChild(p);

       

    }






}