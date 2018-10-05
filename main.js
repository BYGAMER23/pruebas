function saluda () {
    alert ("esta pagina es muy guay")
}

function agregarcomentario() {
    console.log ("agregando comentario");

    var textnuevocomentario = document.getElementById("nuevo-comentario")
    console.log(textnuevocomentario);

    var comentarioIngresado = textnuevocomentario.value
    console.log(comentarioIngresado);

    var comentario = document.createElement("p")
    comentario.textContent = comentarioIngresado;
console.log(comentario);
var seccionComentarios = document.getElementById("seccionComentarios")
console.log (seccionComentarios);

seccionComentarios.appendChild(comentario);

textnuevocomentario.value = "";


}
