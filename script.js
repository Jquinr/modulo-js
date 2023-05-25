function agregarItem(){
   const item = document.querySelector('#nombre');
    var lista = document.querySelector('#lista');
    var nuevonombre = document.createElement("ol");
    nuevonombre.appendChild(document.createTextNode(item.value));
    lista.appendChild(nuevonombre);
    
    const precio = document.querySelector('#precio');
     var valor = document.querySelector('#valor');
     var nuevovalor = document.createElement("ol");
     nuevovalor.appendChild(document.createTextNode(precio.value));
    valor.appendChild(nuevovalor);
    
    document.getElementById("item").value = "";
    document.getElementById("precio").value = "";  
   
}

function total({
    
})
