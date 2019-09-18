import React,{Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Eventos from './components/Eventos';

class App extends Component {

	state = {
		categorias : [],
		eventos : []
	}

	token = '3N2TIJPZCYMIC2FHSQPJ';
	ordenar = 'date';

	componentDidMount() {
		this.obtenerCategorias();
	}

	obtenerCategorias = async () =>{
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
		await fetch(url).then(response => {
			return response.json();
		}).then(categorias => {

			this.setState({
				categorias: categorias.categories
			})
		})
	}

	obtenerEventos =  async (busqueda) =>{
		let url = `https://www.eventbriteapi.com/v3/events/search/?q=${busqueda.nombre}&sort_by=${this.ordenar}&categories=${busqueda.categoria}&token=3N2TIJPZCYMIC2FHSQPJ`;

		await fetch(url).then(response => {
			return response.json();
		}).then(eventos => {
			this.setState({eventos : eventos.events})
		})
	}
	render(){
		return (
			<div className="app">
				<Header title = "Eventos"/>
				<div className = "uk-container">
				<Formulario 
					categorias = {this.state.categorias}
					obtenerEventos = {this.obtenerEventos}
					/>

					<Eventos eventos = {this.state.eventos}/>
				</div>
			</div>
		);
	}
}

export default App;