import React, {Component} from 'react';
import { Table } from 'semantic-ui-react';
import TableDetail from './table_detail';

class TableGeneral extends Component{

	render () {
		//console.log(this.props.amount() );

		//const cod1 = this.props.cod;

		return <div className="row">
					<div className="table-responsive">
						<table className="table table-bordered">
							 <thead>
								 <tr>
								   <th></th>
								   <th></th>
								   <th>Monto</th>
								   <th>{this.props.cod}</th>
								   <th>Cliente</th>
								   <th>Marca</th>
								   <th>Tarjeta</th>
								   <th>Estado</th>
								   <th>Fecha y Hora</th>
								   <th>Fraude</th>
								 </tr>  
							 </thead>
							 <tbody>
							 	<TableDetail cod2={this.props.cod} amount2={this.props.amount}/>
							 </tbody>
  						</table>
					</div>
			   </div>


	};
}


export default TableGeneral;