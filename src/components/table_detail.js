import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';

class TableDetail extends Component{

	render () {
	//console.log(this.props.amount2() );


	return <tr>
				<td>PC</td>
				<td>Venta</td>
				<td>{this.props.amount2() } </td>
				<td>No</td>
				<td>No</td>
				<td>{this.props.cod2}</td>
				<td>No</td>
				<td>No</td>
				<td>No</td>
				<td>No</td>

		   </tr>
   
	};		    
};

export default TableDetail;