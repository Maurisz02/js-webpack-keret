import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import './style.css';


function urlChange(){
    let url = document.getElementById('inputUrl').value;
    document.getElementById('imgPlace').src = url;
}

function init(){
    document.getElementById('inputUrl').addEventListener('input',urlChange);
}

document.addEventListener('DOMContentLoaded',init);