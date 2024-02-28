//Variables globales
var textoResultado = ""; //Variable resultante del encriptado
var texto = "";

function limpiarValores()
{
    textoResultado = "";
    texto = "";
}

function asignaTexto()
{
    document.getElementById("resultado").innerHTML = textoResultado;
}

function bucleEncriptar(clave)
{
    textoResultado = textoResultado + clave;
}

function encriptar()
{
    //Reseteamos el valor de las variables en caso de haberse encriptado algo anteriormente
    limpiarValores();
    
    //Obtenemos el texto del input y determinamos la longitud de la cadena para el bucle
    texto = document.getElementById("textoPrincipal").value;
    var longitudTexto = texto.length;

    //Usando un bucle recorremos la cadena y en caso de encontrar una vocal se llama a una funcion generl para que las reemplace (encripte)
    for(var i=0; i<longitudTexto; i++)
    {
        if(texto[i] == "a") { bucleEncriptar("ai"); }
        else if (texto[i] == "e") { bucleEncriptar("enter"); }
        else if (texto[i] == "i") { bucleEncriptar("imes"); }
        else if (texto[i] == "o") { bucleEncriptar("ober"); }
        else if (texto[i] == "u") { bucleEncriptar("urat"); }
        else{ textoResultado = textoResultado + texto[i]; }
    }
    asignaTexto();
}

function bucleDesencriptar(vocal, valor)
{
    textoResultado = textoResultado.replaceAll(valor, vocal);
}

function desencriptar()
{
    limpiarValores();
    //Reseteamos el valor de la variable en caso de haberse encriptado algo anteriormente
    texto = document.getElementById("textoPrincipal").value;
    textoResultado = texto;
    //Buscaremos si los cifrados están INCUIDOS en la palabra que recibimos del input, de ser asi se reemplazaran en la funcion
    if (texto.includes("ai") == true) { bucleDesencriptar("a", "ai"); }
    if (texto.includes("enter") == true) { bucleDesencriptar("e", "enter"); }
    if (texto.includes("imes") == true) { bucleDesencriptar("i", "imes"); }
    if (texto.includes("ober") == true) { bucleDesencriptar("o", "ober"); }
    if (texto.includes("urat") == true) { bucleDesencriptar("u", "urat"); }
    asignaTexto();
}

function copiarResultado() 
{        
    // Crea un campo de texto "oculto"
    var aux = document.createElement("input");
    
    // Asigna el contenido del elemento especificado al valor del campo
    aux.setAttribute("value", document.getElementById("resultado").innerHTML);
    
    // Añade el campo a la página
    document.body.appendChild(aux);
    
    // Selecciona el contenido del campo
    aux.select();
    
    // Copia el texto seleccionado al portapapeles
    document.execCommand("copy");
    
    // Elimina el campo de la página
    document.body.removeChild(aux);
    alert("Se copió el texto al portapapeles: " + contenidoCopiado);
}
//Se puede adaptar la parte del encriptado con un replaceAll como el desencriptado pero lo dejaré así como un alternativa sin uso de funciones propias de JS