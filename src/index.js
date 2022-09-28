import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';

//let img = document.getElementById('imgPlace');

function urlChange(){
    let url = document.getElementById('inputUrl').value;
    document.getElementById('imgPlace').src = url;
}

function widthChange(){
    let width = document.getElementById('inputWidth').value;
    let size = width+'px';
    console.log(size);
    document.getElementById('imgPlace').style.width = size;
}

function borderWidth(){
    let border = document.getElementById('inputVastagsag').value;
    let color = document.getElementById('inputColor').value;
    document.getElementById('imgPlace').style.border = border+'px solid'+color;
}

function colorChange(){
    let color = document.getElementById('inputColor').value;
    document.getElementById('imgPlace').style.borderColor = color;
}

function changeMode(){
    let isDark = document.getElementById('mode').innerText=='Sötét mód';
    //console.log(isDark);
    if(isDark){
        document.getElementById('mode').innerHTML="Világos mód";
        document.body.className="dark-mode";
    }else{
        document.body.className="light-mode";
        document.getElementById('mode').innerHTML="Sötét mód";
    }
}

function init(){
    document.getElementById('inputUrl').addEventListener('change',urlChange);
    document.getElementById('inputWidth').addEventListener('input',widthChange);
    document.getElementById('inputVastagsag').addEventListener('input',borderWidth);
    document.getElementById('inputColor').addEventListener('input',colorChange);
    document.getElementById('mode').addEventListener('click',changeMode);
}

document.addEventListener('DOMContentLoaded',init);