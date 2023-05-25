function agregarItem(){
    const item = document.querySelector('#nombre');
    var lista = document.querySelector('#lista');
    var nuevonombre = document.createElement("li");
    nuevonombre.appendChild(document.createTextNode(item.value));
    lista.appendChild(nuevonombre);
    document.getElementById("item").value = "";
}