function media()

{
    var numero1, numero2,numero3,numero4,numero5,numero6,numero7, suma, media;
    numero1=parseInt(document.miFormulario2.numero1.value);
    numero2=parseInt(document.miFormulario2.numero2.value);
    numero3=parseInt(document.miFormulario2.numero3.value);
    numero4=parseInt(document.miFormulario2.numero4.value);
    numero5=parseInt(document.miFormulario2.numero5.value);
    numero6=parseInt(document.miFormulario2.numero6.value);
    numero7=parseInt(document.miFormulario2.numero7.value);
    


    if (isNaN(numero1)||numero1==""||numero1<0||numero1>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero1.focus();
        return 0;
    }

    if (isNaN(numero2)||numero2==""||numero2<0||numero2>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero2.focus();
        return 0; 
    }

    
    if (isNaN(numero3)||numero3==""||numero3<0||numero3>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero3.focus();
        return 0; 
    }

    if (isNaN(numero4)||numero4==""||numero4<0||numero4>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero4.focus();
        return 0; 
    }

    if (isNaN(numero5)||numero5==""||numero5<0||numero5>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero5.focus();
        return 0; 
    }

    if (isNaN(numero6)||numero6==""||numero6<0||numero6>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero6.focus();
        return 0; 
    }

    if (isNaN(numero7)||numero7==""||numero7<0||numero7>10) {
        alert("ERROR, formato incorrecto, vuelva a escribirlo");
        document.miFormulario2.numero7.focus();
        return 0; 
    }


    
    suma=parseInt(numero1+numero2+numero3+numero4+numero5+numero6+numero7);
    media=parseFloat(suma/7);
    document.miFormulario2.resultado.value=media;


}

