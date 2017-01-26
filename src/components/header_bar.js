import React from 'react';
import { Button, Grid } from 'semantic-ui-react';
import Buttons from './buttons';

const HeaderBar = () => {
	return <Grid>
		    <Grid.Column floated='left' width={5}>
		      <h1 style={{display: 'inline'}}>Ventas</h1>
		    </Grid.Column>
		    <Grid.Column floated='right' width={4}>
		      <Buttons />	
		    </Grid.Column>
		  </Grid>

};


// const styles = StyleSheet.create({

// 	title: {
// 		display: 'inline',
// 		color: '#2b2b2b'
// 	}
// });



export default HeaderBar;