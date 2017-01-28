import React from 'react';
import { Table } from 'semantic-ui-react';

const TableDetail = ({ cod2, action }) => {
	return <Table.Row>
	{action}
		          <Table.Cell>PC</Table.Cell>
		          <Table.Cell>Venta</Table.Cell>
		          <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>{cod2}</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		          <Table.Cell>No</Table.Cell>
		   </Table.Row>
		        
		        
		        
		   
		    
};

export default TableDetail;