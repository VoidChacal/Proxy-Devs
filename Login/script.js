
            
    // var campos = document.getElementsByClassName("campo");
    // var equipe = document.getElementsByClassName("equipe");

    // var opc = document.getElementsByClassName("opc");
    // var confirmar = document.getElementById("confirmar");

    
        
        /*campos.style.display = "inline";
        equipe.style.display = "block";
        opc.style.display = "none";
        confirmar.style.display = "none";

        var slc = document.getElementById(source.id);
        var opcaoTexto = slc.options[slc.selectedIndex].text;
*/

function showInput(value){
    
    if(value == "Futsal"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')  
    }
    if(value == "Voleibol"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('integrante6').classList.remove('hidden')
    }
    if(value == "Handball"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('integrante6').classList.remove('hidden')
        document.getElementById('integrante7').classList.remove('hidden')
    }
    if(value == "Basquete"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')
    }
    if(value == "Tênis de Mesa"){
        document.getElementById('drop1').classList.remove('hidden')
        document.getElementById('integrante6').classList.add('hidden')
        document.getElementById('integrante7').classList.add('hidden')
    }
}






/* function showInput(value) {
    if(Selection == 'Futsal') {
        document.getElementById('drop1').classList.remove('hidden')
        alert("teste")
    } else {
        document.getElementById('drop2').classList.add('hidden')    
    }
}
    */
