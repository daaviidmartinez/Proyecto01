var columna= Number(prompt("Cual es tu columna"))
var fila= Number(prompt("Cual es tu fila"))

if ((fila>=1)&&(fila<=6)&&(columna>=1)&&(columna<=6)) {
alert("Todo ok");}

if((1>fila)||(fila>6)){
  
alert("Fallastes en fila="+ fila);}

if((1>columna)||(columna>6)){
alert("Fallates en columna="+ columna);}
