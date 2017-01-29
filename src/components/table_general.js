import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import TableDetail from './table_detail';

class TableGeneral extends Component{

	render () {
		console.log(this.props.amount() );

		//const cod1 = this.props.cod;

		return <Table striped>
			      <Table.Header>
			        <Table.Row>
			          <Table.HeaderCell></Table.HeaderCell>
			          <Table.HeaderCell></Table.HeaderCell>
			          <Table.HeaderCell>Monto</Table.HeaderCell>


			          <Table.HeaderCell>{this.props.cod}</Table.HeaderCell>


			          <Table.HeaderCell>Cliente</Table.HeaderCell>
			          <Table.HeaderCell>Marca</Table.HeaderCell>
			          <Table.HeaderCell>Tarjeta</Table.HeaderCell>
			          <Table.HeaderCell>Estado</Table.HeaderCell>
			          <Table.HeaderCell>Fecha y Hora</Table.HeaderCell>
			          <Table.HeaderCell>Fraude</Table.HeaderCell>
			        </Table.Row>
			      </Table.Header>

			      <Table.Body>
			        
			        <TableDetail cod2={this.props.cod} amount2={this.props.amount}/>
			       	
			        
			      </Table.Body>
			    </Table>
	};
}


export default TableGeneral;