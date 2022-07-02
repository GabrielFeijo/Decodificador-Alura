
var keys = 
{
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat"
    
};

let titulo = document.querySelector('.titleInfo'); 
let local = document.querySelector('.right');
let result = "";

function criptoMessage(){
  let texto = document.querySelector('.input').value;

  if (texto == ""){
    titulo.innerHTML = "Informe um texto para ser criptografado";
    return
  }

  let  novaString = "";
  for(i=0; i<texto.length; i++){
        if (keys[texto[i]] ){
            novaString += keys[texto[i]];
        }else{
            novaString += texto[i];
        }      
    }
    //console.log(novaString);
    result = wordWrap(novaString, 40)
  
    addText(result);
    createButton();

}

function decriptoMessage(){
    let texto = document.querySelector('.input').value 

    if (texto == ""){
        titulo.innerHTML = "Informe um texto para ser descriptografado";
        return
    }
    for (var key in keys){
        palavra = keys[key]
        var regex = new RegExp(palavra, "gi");
        texto = texto.replace(regex, key);
    }
    result = wordWrap(texto, 30);
   
    addText(result);
    createButton();
}


async function copyText() {
  let text = result;
  await navigator.clipboard.writeText(text);
  document.querySelector('.buttonCopy').innerHTML = "Texto Copiado"
}

function wordWrap(str, maxWidth) {
    var newLineStr = "\n"; done = false; res = '';
    while (str.length > maxWidth) {                 
        found = false;
        // Inserts new line at first whitespace of the line
        for (i = maxWidth - 1; i >= 0; i--) {
            if (testWhite(str.charAt(i))) {
                res = res + [str.slice(0, i), newLineStr].join('');
                str = str.slice(i + 1);
                found = true;
                break;
            }
        }
        // Inserts new line at maxWidth position, the word is too long to wrap
        if (!found) {
            res += [str.slice(0, maxWidth), newLineStr].join('');
            str = str.slice(maxWidth);
        }

    }

    return res + str;
}

function testWhite(x) {
    var white = new RegExp(/^\s$/);
    return white.test(x.charAt(0));
};

function addText(result){
    local.innerHTML = result;
    local.classList.add('pt');
}

function createButton(){
    const btn = document.createElement("button");
    btn.innerHTML = "Copiar";
    btn.classList.add('buttonCopy');
    local.appendChild(btn);
    document.querySelector('.buttonCopy').addEventListener('click', copyText)
}

document.querySelector('.buttonCripto').addEventListener('click', criptoMessage);
document.querySelector('.buttonDecripto').addEventListener('click', decriptoMessage);