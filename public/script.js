window.onload= function(){



}
function muestra(x){
    var info = document.getElementById("avatarinfo");
    var habilidades = document.getElementById("habilidades");
    var experiencia = document.getElementById("experiencia");
    var estudios = document.getElementById("estudios");
    var recompensa = document.getElementById("recompensa");
    var y= x;
    switch(y){
        case "1":   
            habilidades.style.display = "none";
            experiencia.style.display="none";
            estudios.style.display="none";
            recompensa.style.display="none";
            if(info.style.display=="block"){
                info.style.display = "none";
            }else{
                info.style.display = "block";
            }            
            break;            
        case "2":          
            info.style.display = "none";
            estudios.style.display="none";            
            experiencia.style.display="none";
            recompensa.style.display="none";
            if(habilidades.style.display=="block"){
                habilidades.style.display = "none";
            }else{
                habilidades.style.display = "block";
            }
            break;
        case "3":          
            info.style.display = "none";
            habilidades.style.display = "none";
            estudios.style.display="none";
            recompensa.style.display="none";
            if(experiencia.style.display=="block"){
                experiencia.style.display = "none";
            }else{
                experiencia.style.display = "block";
            }
            break;
        case "4":        
            info.style.display = "none";
            habilidades.style.display = "none";
            experiencia.style.display="none";
            recompensa.style.display="none";
            if(estudios.style.display=="block"){
                estudios.style.display = "none";
            }else{
                estudios.style.display = "block";
            }
            break;
        case "5":          
            info.style.display = "none";
            habilidades.style.display = "none";
            experiencia.style.display="none";
            estudios.style.display="none";
            if(recompensa.style.display=="block"){
                recompensa.style.display = "none";
            }else{
                recompensa.style.display = "block";
            }
            break;
    }
}
function confirmation_reset() 
{
    if(confirm("Esta seguro que desea volver a empezar el formulario?"))
    {
        return true;
    }
    else
    {
        return false;
    }
}
function confirmation_submit() 
{
    if(confirm("Esta seguro que desea enviar el formulario de contacto?"))
    {
        window.location.href = "mailto:aaronbellesbeltran@gmail.com";
        return true;
    }
    else
    {
        return false;
    }
}