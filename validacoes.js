let pedrasSortidas = document.getElementById("tipo_pedras_sortidas");
let pedraSelecionada = document.getElementById("tipo_pedras");

pedrasSortidas.checked = true;
pedraSelecionada.disabled = true;

const tipoPedras = ['marroada', 'ametista', 'topazio', 'espinela'];

pedrasSortidas.addEventListener('click', function (ev){

	var pedraSorteada = Math.floor((Math.random() * tipoPedras.length));

	if (pedrasSortidas.checked){
		pedraSelecionada.disabled = true;
		pedraSelecionada.options[pedraSorteada].selected = true;
	} else {
		pedraSelecionada.disabled = false;
		pedraSelecionada.options[0].selected = true;
	}
	
});

function letras(){
	tecla = event.keyCode;
	if ((tecla >= 65 && tecla <= 90) || (tecla >= 97 && tecla <= 122)){ 
	    return true;
	}else{
	   return false;
	}
}