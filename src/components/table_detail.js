import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';

class TableDetail extends Component{

	render () {
	//console.log(this.props.amount2() );


	return <Table.Row>
		          <Table.Cell>PC</Table.Cell>
		          <Table.Cell>Venta</Table.Cell>
		          {this.props.amount2() }
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>{this.props.cod2}</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		   </Table.Row>
   
	};		    
};

export default TableDetail;