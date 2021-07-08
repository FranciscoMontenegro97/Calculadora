//DISPLAY
window.onload = function(){
    pantalla=document.getElementById('Display');
}
//CONTROL DE PANTALLA
let x=0; //Colocamos 0 en base al valor generico en pantalla, lo utlizamos como medio de sustitucin a la hora se insertar nuevos valores.
let xi=1; //En esta variable se colcoca como asemejansa a un valor tipo booleano, estara en 1 cuando debamos escribir un nuevo numero en pantalla yestaran en 0 cuando al escribir en la pantalla estemos añaniendo cifras para completar un numero.
let coma=0; //Esta variable nos permite controlar los numeros decimales.
//FUNCIONES PARA VISUALIZAR LOS NUMEROS
function numero(xx){
    if(x=="0" || xi==1){
        pantalla.innerHTML=xx;
        x==xx;
    }else{
        pantalla.innerHTML+=xx;
        x+=xx;
    }
    xi=0
}
function numero(xx){
    if (x=="0" || xi==1) { 
       pantalla.innerHTML=xx;
       x=xx;
       if (xx=="."){
          pantalla.innerHTML="0.";
          x=xx;
          coma=1;
          }
      }
      else {
          if(xx=="." && coma==0) {
            pantalla.innerHTML+=xx;
            x+=xx;
            coma=1; 
          }else if (xx=="." && coma==1) {} 
            else{
            pantalla.innerHTML+=xx;
            x+=xx
          }
       }
    xi=0
    }
//Operar
function operar(s){
    ni=x;
    op=s;
    xi=1;
}
//Igual
function igualar(){
    if(op=="no"){
        pantalla.innerHTML=x;
    }else{
        sl=ni+op+x;
        sol=eval(sl);
        pantalla.innerHTML=sol;
        x=sol;
        op="no";
        xi=1;
    }
}
//FUNCION CLEAR PARCIAL
function borradoParcial() {
    pantalla.innerHTML=0;
    x=0;
    coma=0;					
    }
//FUNCION CLEAR TOTAL
function totalClear() {
    pantalla.innerHTML=0;
    x="0";
    coma=0;
    ni=0;
    op="no"
    }    