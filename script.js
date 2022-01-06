function checkforblank() {
    if ( document.getElementById('name').value == "") {
        alert('Escribe tu nombre en el recuadro');
        document.getElementById('name').style.borderColor = "red";
        return false;
    }
}


