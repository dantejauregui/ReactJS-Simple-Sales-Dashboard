import React, { Component } from 'react';
import HeaderBar from './header_bar';
import ResultsBar from './results_bar';
import TableGeneral from './table_general';
import { Container } from 'semantic-ui-react';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchData} from '../actions/index';

class ListIndex extends Component {
  componentWillMount(){
		this.props.fetchData();
		
  };

  render() {
  	
  	//console.log(this.props.posts.data);
  	
  	let data = this.props.posts.data;

  	let monto = function () {if (data) {
  		return data.map(m => {return `<Table.Cell key=${m.id} > ${m.amount} </Table.Cell>`});
  	}
  }
    //console.log(monto);


  	//probando lo que aprendi en UDEMY para preparar el envio por PROPs:
  	let codReferencia = "dante";
  // 	function () {if (data) {
  // 		data.map(cod => <Table.HeaderCell key={cod.id}>{cod.reference_code}</Table.HeaderCell>);
  // 	}
  // }

  	let cliente = function () {if (data) {
  		return data.map(cl => `${cl.client.first_name} ${cl.client.last_name}`);
  	}
  }

  	let marca = function () {if (data) {
  		console.log(data.map(marc => marc.token.iin.brand));
  	}
  }

  	let tarjeta = function () {if (data) {
  		console.log(data.map(t => t.token.card_number));
  	}
  }

  	let estado = function () {if (data) {
  		console.log(data.map(e => e.state));
  	}
  }

  	//help translating milliseconds date to normal date:
  	let fecha = function () {if (data) {
  		console.log(data.map(f => f.date));
  	}
  }

  	//convertir si es NULL a un simbolo de 0% de fraude:
  	let fraude = function () {if (data) {
  		console.log(data.map(fr => fr.fraud_score));
  	}
  }
  	




    return ( <Container>
    			      <HeaderBar />
    			      <ResultsBar />
    			      <TableGeneral cod={codReferencia} amount={monto}/>
      		   </Container>
    );
  }
  
}

function mapStateToProps (state){

	//llame "data" a mi Reducer:
	return {posts : state.data.all};
}

function mapDispatchToProps (dispatch){
	return bindActionCreators({fetchData}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListIndex);
