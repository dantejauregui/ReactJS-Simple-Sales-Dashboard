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

  	//Nao entendo esto:
  	console.log(this.props.posts.data);
  	
  	//let data = this.props.posts.data;

  	// if (data) {
  	// 	console.log(data[0].amount);
  	// }

    return ( <Container>
			      <HeaderBar />
			      <ResultsBar />
			      <TableGeneral />
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
