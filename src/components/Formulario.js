import React, { Component } from 'react';

class Formulario extends Component {

	state = {  }

	render() { 
		return (
				<form>
					<fieldset className = "uk-fieldset uk-margin">
						<legend className="uk-legend uk-text-center">
							Busca tu evento por nombre o categoria
						</legend>
					</fieldset>
				</form>
		);
	}
}
 
export default Formulario;