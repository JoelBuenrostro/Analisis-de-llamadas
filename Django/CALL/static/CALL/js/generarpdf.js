function pdf(clicked_id){
    console.log("hola");
    var nombrearchivo=clicked_id;
    var apellido = localStorage.getItem("nombre_audio");
    console.log(JSON.parse(apellido))

    var quitarextension=nombrearchivo.split(".");
    console.log(quitarextension)

var doc = new jsPDF()

doc.setFontSize(40)
doc.text(35, 25, `$Audio: {quitarextension}`)
doc.save(`${quitarextension[0]}`);

}
/* 
var longitud=document.getElementById('obtenerlongitud').innerHTML;
console.log(longitud)
console.log(`1:${longitud.length}`)
var res = longitud.split(",");
console.log(res[0])
console.log(res[1])

console.log(typeof longitud) */
