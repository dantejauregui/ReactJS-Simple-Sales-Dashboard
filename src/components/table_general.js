import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import TableDetail from './table_detail';

// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {fetchData} from '../actions/index';

class TableGeneral extends Component{
	// componentWillMount(){
	// 	this.props.fetchData;
	// }


	render () {
		return <Table striped>
			      <Table.Header>
			        <Table.Row>
			          <Table.HeaderCell></Table.HeaderCell>
			          <Table.HeaderCell></Table.HeaderCell>
			          <Table.HeaderCell>Monto</Table.HeaderCell>
			          <Table.HeaderCell>Nro Pedido</Table.HeaderCell>
			          <Table.HeaderCell>Cliente</Table.HeaderCell>
			          <Table.HeaderCell>Marca</Table.HeaderCell>
			          <Table.HeaderCell>Tarjeta</Table.HeaderCell>
			          <Table.HeaderCell>Estado</Table.HeaderCell>
			          <Table.HeaderCell>Fecha y Hora</Table.HeaderCell>
			          <Table.HeaderCell>Fraude</Table.HeaderCell>
			        </Table.Row>
			      </Table.Header>

			      <Table.Body>
			        
			        <TableDetail props/>
			        <TableDetail props/>
			        
			      </Table.Body>
			    </Table>
	};
}


// function mapDispatchToProps (dispatch){
// 	return bindActionCreators({fetchData}, dispatch);
// }

// export default connect(null, mapDispatchToProps)(TableGeneral);


export default TableGeneral;