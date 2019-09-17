import React,{Component } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

class App extends Component {

	state = {
		categorias : []
	}

	token = '3N2TIJPZCYMIC2FHSQPJ';

	componentDidMount() {
		this.obtenerCategorias();
	}

	obtenerCategorias = async () =>{
		let url = `https://www.eventbriteapi.com/v3/categories/?token=${this.token}&locale=es_ES`;
		await fetch(url).then(response => {
			return response.json();
		}).then(categorias => {
			console.log(categorias.categories);
			this.setState({
				categorias: categorias.categories
			})
		})
	}

	obtenerEventos =  async (busqueda) =>{
		console.log(busqueda);
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
				</div>
			</div>
		);
	}
}

export default App;