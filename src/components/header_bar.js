import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import Buttons from './buttons';

const HeaderBar = () => {
	return 	<div className="row">
				<div style={{padding: 0}} className="pull-left col-md-3">
					<h1 >Ventas</h1>
				</div>

				<div className="pull-right col-md-2">
					<button type="button" className="btn btn-default">Exportar</button>
					<button type="button" className="btn btn-default">Filtrar</button>
				</div>
			</div>




};


// const styles = StyleSheet.create({

// 	title: {
// 		display: 'inline',
// 		color: '#2b2b2b'
// 	}
// });



export default HeaderBar;