import React, { Component } from 'react';
import { Menu,Button,Icon, Header, Image, Modal,Form  } from 'semantic-ui-react'
import emitter from '../../emitter.js'
import {BranchesListComposer} from './BranchesListComposer.jsx' 


 class MenuFragment extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	buttonContent:"Get My Location",
 	  	loc:{},
 	  	content:"home"
 	  };
 	}

 	componentWillMount(){}


 	

 	changeBFContent(content){
 		this.setState({content:content})
 		emitter.emit('mainBranch')
 		emitter.emit('changeBFContent',content)
 	}

	render() {
		const {branch,company} = this.props
		const {content} = this.state 
		if (branch && branch.headQuarter || branch._id != company.profile.branchId) {
			branchesList =  <BranchesListComposer branch={company.profile.branchId} />
		} else {
			branchesList = <span></span>
		}
 


		return (
			<div>
				 <Menu color='purple' fixed="left" inverted vertical >
			 		  <Menu.Item>
			        	 <Menu.Header>lucky2shop</Menu.Header>
			        </Menu.Item>
			         <Menu.Item> 
						<Menu.Menu>
							<Menu.Item name="Home Page" active={content == 'home'} onClick={()=>this.changeBFContent('home')}  />
							<Menu.Item name="Items"  active={content == 'items'} onClick={()=>this.changeBFContent('items')}/>
						</Menu.Menu>
					</Menu.Item>
				     {branchesList}
			 	</Menu>
			</div>
		);
	}
}
export default MenuFragment;


 							 