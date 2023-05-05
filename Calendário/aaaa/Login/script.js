function Verificar(bt, id) {
    var Modalidade = document.getElementById('modalidade').value;
    let drop = document.querySelector(id)
            
    // var campos = document.getElementsByClassName("campo");
    // var equipe = document.getElementsByClassName("equipe");

    // var opc = document.getElementsByClassName("opc");
    // var confirmar = document.getElementById("confirmar");

    if(Modalidade == "Futsal") {
        
        drop.style.display = 'contents';
        
        /*campos.style.display = "inline";
        equipe.style.display = "block";
        opc.style.display = "none";
        confirmar.style.display = "none";
*/

    }
    if(Modalidade == "Volei"){
        var y = document.getElementById('drop2')    
    
       y.innerHTML="<input id=integrante6 class=campo type=text name=integrante6>";
}   
    
    let onclick = "drop(this, '"+id+"')";
    bt.setAttribute('onclick', onclick);
}


function showInput(source){
    var slc = document.getElementById(source.id);
    var opcaoTexto = slc.options[slc.selectedIndex].text;
    if(opcaoTexto == "Futsal"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('equipes').classList.remove('hidden')
        document.getElementById('enviar').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')
        
    }
    if(opcaoTexto == "Voleibol"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('equipes').classList.remove('hidden')
        document.getElementById('enviar').classList.remove('hidden')
        document.getElementById('integrante6').classList.remove('hidden')
    }
    if(opcaoTexto == "Handball"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('equipes').classList.remove('hidden')
        document.getElementById('enviar').classList.remove('hidden')
        document.getElementById('integrante7').classList.remove('hidden')
    }
    if(opcaoTexto == "Basquete"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('equipes').classList.remove('hidden')
        document.getElementById('enviar').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')
    }
    if(opcaoTexto == "Tênis de Mesa"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('equipes').classList.remove('hidden')
        document.getElementById('enviar').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')
    }
}

