var val
var val1
var val2
var val3

function func() {
    var comida = document.getElementsByName("comida");
    if (comida[0].checked) {
        val = comida[0].value;
        console.log(val);
    }

    else if (comida[1].checked) {
        val = comida[1].value;
        console.log(val);
    }

    else if (comida[2].checked) {
        val = comida[2].value;
        console.log(val);
    }
    else if (comida[3].checked) {
        val = comida[3].value;
        console.log(val);
    }
}

function func1() {
    var bebida = document.getElementsByName("bebida");
    if (bebida[0].checked) {
        val1 = bebida[0].value;
        console.log(val1);
    }

    else if (bebida[1].checked) {
        val1 = bebida[1].value;
        console.log(val1);
    }

    else if (bebida[2].checked) {
        val1 = bebida[2].value;
        console.log(val1);
    }
    else if (bebida[3].checked) {
        val1 = bebida[3].value;
        console.log(val1);
    }
}
function func2() {
    var bebida = document.getElementsByName("hobbie");
    if (bebida[0].checked) {
        val2 = bebida[0].value;
        console.log(val2);
    }

    else if (bebida[1].checked) {
        val2 = bebida[1].value;
        console.log(val2);
    }

    else if (bebida[2].checked) {
        val2 = bebida[2].value;
        console.log(val2);
    }
    else if (bebida[3].checked) {
        val2 = bebida[3].value;
        console.log(val2);
    }
}
function func3() {
    var bebida = document.getElementsByName("humor");
    if (bebida[0].checked) {
        val3 = bebida[0].value;
        console.log(val3);
    }

    else if (bebida[1].checked) {
        val3 = bebida[1].value;
        console.log(val3);
    }

    else if (bebida[2].checked) {
        val3 = bebida[2].value;
        console.log(val3);
    }
    else if (bebida[3].checked) {
        val3 = bebida[3].value;
        console.log(val3);
    }
}

function descubra() {
var dados = [val,val1,val2,val3]
var url = ''
dados[0] === 'churrasco' && dados[1] === 'cerveja' && dados[2] === 'jogar' && dados[3] === 'engracado' ? url = './images/img6.jpg'  :
dados[0] === 'pizza' && dados[1] === 'refri' && dados[2] === 'musica' && dados[3] === 'engracado' ? url = './images/img1.jpg'  :
dados[0] === 'japa' && dados[1] === 'cerveja' && dados[2] === 'dormir' && dados[3] === 'preguiçoso' ? url = './images/img2.jpg'  :
dados[0] === 'pizza' && dados[1] === 'refri' && dados[2] === 'jogar' && dados[3] === 'preguiçoso' ? url = './images/img8.jpg'  :
dados[0] === 'japa' && dados[1] === 'cerveja' && dados[2] === 'filme' && dados[3] === 'ranzinza' ? url = './images/img3.jpg'  :
dados[0] === 'lasanha' && dados[1] === 'refri' && dados[2] === 'filme' && dados[3] === 'ranzinza' ? url = './images/img5.jpg'  :
dados[0] === 'pizza' && dados[1] === 'refri' && dados[2] === 'dormir' && dados[3] === 'motivado' ? url = './images/joyce.jpg'  :
dados[0] === 'lasanha' && dados[1] === 'suco' && dados[2] === 'filme' && dados[3] === 'engracado' ? url = './images/img9.jpg'  :
dados[0] === 'lasanha' && dados[1] === 'cerveja' && dados[2] === 'musica' && dados[3] === 'engracado' ? url = './images/elder.jpg'  :
dados[0] === 'lasanha' && dados[1] === 'suco' && dados[2] === 'dormir' && dados[3] === 'engracado' ? url = './images/thom.jpg'  :
dados[0] === 'churrasco' && dados[1] === 'suco' && dados[2] === 'filme' && dados[3] === 'ranzinza' ? url = './images/marim.jpg'  :
dados[0] === 'churrasco' && dados[1] === 'cafe' && dados[2] === 'musica' && dados[3] === 'engracado' ? url = './images/img4.jpg'  : alert("Prince Andrews achei você!")





document.getElementById("fieldset")
    .setAttribute("style", `background-image: url(${url});`)


    
}


