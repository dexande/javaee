/**
 * Confirmar a Exclusao de contato
 * @author Professor José de Assis
 * @param idcon 
 */

function confirmar(idcon) {
	let resposta = confirm("Confirma a exclusão deste contato ?");
	if (resposta === true) {
		//alert(idcon)

		// Redirecionamento para a url delete passando o parametro idcon
		window.location.href = "delete?idcon=" + idcon;
	}
}