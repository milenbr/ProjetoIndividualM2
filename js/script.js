const escolha = document.querySelector(".selecao");/* parte cesar e base64*/
const radio = document.querySelector(".radios");/* codificar e decodificar*/
const incremento = document.querySelector(".chaveC");/* incremento*/
const codificar = document.querySelector("#cod");
const decodificar = document.querySelector("#decod");
const botao = document.querySelector("button");

/* Mudança no nome do botão a partir do click no radio*/
radio.addEventListener("click", function () {
    if (cod.checked) {
      botao.innerHTML = "Codificar";
    } else if (decod.checked) {
      botao.innerHTML = "Decodificar";
    }
  });
  
/* açoes do botão*/
botao.addEventListener("click", function (event) {
    event.preventDefault();
    if (escolha.value === "base64") {
      resultado.innerText = base64();
    } else if (escolha.value === "cesar") {
      resultado.innerText = cifraCesar();
    }
  });   
  
/* Parte da seleção de cesar e incremento*/
escolha.addEventListener("click", function () {
  if (escolha.value == "cesar") {
    incremento.style.display = "block";
  } else {
    incremento.style.display = "none";
  }
})

/*Base64
atob - decodifica
btoa - codifica*/

function base64() {
  let texto = document.querySelector("#base").value;

  if (cod.checked) {
    let codificado = btoa(texto);
    return codificado;
  } else if (decod.checked) {
    let decodificado = atob(texto);
    return decodificado;
  }
}

/* Cifra de Cesar
122 - 97 z+25 quatidade de letras
65 a
*/

function cifraCesar() {
  let msg = document.querySelector("#base").value;
  let chave = parseInt(document.querySelector("#chaveN").value);
  let result = '';

  if (cod.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === msg[i].toUpperCase()) {
        result += String.fromCharCode((msg.charCodeAt(i) + chave - 65) % 26 + 65); 
      } else {
        result += String.fromCharCode((msg.charCodeAt(i) + chave - 97) % 26 + 97);
      }
    }
    return result;

  } else if (decod.checked) {
    for (let i = 0; i < msg.length; i++) {
      if (msg.charCodeAt(i) >= 97 && msg.charCodeAt(i) <= 122) {
        result += String.fromCharCode((msg.charCodeAt(i) - 97 -  chave + 26) % 26 + 97);
      } else if (msg.charCodeAt(i) >= 65 && msg.charCodeAt(i) <= 90) {
        result += String.fromCharCode((msg.charCodeAt(i) - 65 - chave + 26) % 26 + 65);
      } else {
        result += String.fromCharCode(msg.charCodeAt(i));
      }
    }
    return result;
  }
}




