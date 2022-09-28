import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';


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

function init(){
    document.getElementById('inputUrl').addEventListener('input',urlChange);
    document.getElementById('inputWidth').addEventListener('input',widthChange);
}

document.addEventListener('DOMContentLoaded',init);