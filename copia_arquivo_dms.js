
//buscando data
var date = new Date(); 
var dia = date.getDate();
var mes = date.getMonth();
var ano = date.getYear();
var d = dia -1
var m = mes +1
var a = ano -100
//console.log(a)

const fs = require('fs');

// copia dm37 miscelaneas
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0037_Miscelaneas_Aplicados_Click_20"+a+"_0"+m+"_"+d+".xlsx", "C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\atualizar\\DM0037_Miscelaneas_Aplicados_Click_20"+a+"_0"+m+"_"+d+".txt", (err) => {
  if (err) throw err;
  console.log('copiou dm37 miscelaneas');
});

// copia antenas
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0039_Antenas_Aplicadas_Baixa_20"+a+"_0"+m+"_"+d+".csv", "C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\atualizar\\DM0039_Antenas_Aplicadas_Baixa_20"+a+"_0"+m+"_"+d+".txt", (err) => {
  if (err) throw err;
  console.log('copiou antenas');
});

//copia decoders
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0039_Decoders_Aplicados_Baixa_20"+a+"_0"+m+"_"+d+".csv", "C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\atualizar\\DM0039_Decoders_Aplicados_Baixa_20"+a+"_0"+m+"_"+d+".txt", (err) => {
  if (err) throw err;
  console.log('copiou decoders');
});

//copia lnbf
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0039_LNBF_Aplicados_Baixa_20"+a+"_0"+m+"_"+d+".csv", "C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\atualizar\\DM0039_LNBF_Aplicados_Baixa_20"+a+"_0"+m+"_"+d+".txt", (err) => {
  if (err) throw err;
  console.log('copiou lnbf');
});

//copia dm40
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0040_Materiais_Aplicados_Click_DTH_20"+a+"_0"+m+"_"+d+".xlsx", "C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\atualizar\\DM0040_Materiais_Aplicados_Click_DTH_20"+a+"_0"+m+"_"+d+".txt", (err) => {
  if (err) throw err;
  console.log('copiou dm40');
});

//copia decoders
fs.copyFile("C:\\Users\\tr642633\\Documents\\rodrigo\\dms\\ftp\\DM0039_Decoders_Aplicados_Baixa_20"+a+"_0"+m+"_"+d+".csv", "C:\\Users\\tr642633\\Documents\\rodrigo\\saldo volante decoder novo\\DM0039_Decoders_Aplicados_Baixa.txt", (err) => {
  if (err) throw err;
  console.log('copiou decoders para saldo volante');
});






