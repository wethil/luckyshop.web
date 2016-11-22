import React, { Component } from 'react';
import BranchFeed from './BranchMainFragment/BranchFeed.jsx'
import {BranchItemsComposer} from './BranchMainFragment/BranchItemsComposer.jsx'
import ItemsFragment from './ItemsFragment/ItemsFragment.jsx'
import emitter from '../../emitter.js'
 class BranchFragment extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	content:'home'
 	  };
 	}

 

 		componentDidMount(){
			emitter.addListener('changeBFContent', (content)=> this.changeBFContent(content))
		}

		changeBFContent(content){
			this.setState({content:content})
			console.log(content)
		}
	render() {
		const {company,branch} = this.props
		console.log(company)
		switch(this.state.content) {
			case 'home':
				content=<div className="ui padded   grid">
									<BranchFeed branch={branch} company={company}/>
									<BranchItemsComposer branch={branch._id} company={company} />
					</div>
			break;
			case 'items':
				content = <ItemsFragment company={company} />
			break;
		}
		

	
		return (
			<div style={{marginLeft:210, minWidth:550, maxWidth:1150}}>
							
					{content}
					
			</div>	
			);

	}
}
export default BranchFragment;