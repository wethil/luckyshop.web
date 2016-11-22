import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react'
import emitter from '../../emitter.js'

 class BranchesList extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {content:""};
 	}

 	selectBranch(branch){
 		this.setState({content:branch})
		emitter.emit('selectBranch',branch)
		emitter.emit('changeBFContent','home')
		console.log(branch)
 	}
 	goMainPage(){
 		emitter.emit('mainBranch')
 		emitter.emit('changeBFContent','home')
 	}

	render() {
		const {content} = this.state
		branchesList=[]
	branches = this.props.branches
	if (branches && branches.length>0){
			this.props.branches.forEach((branch)=> {
			branchesList.push(
					<Menu.Item name={branch.name} active={content == branch._id} onClick={()=>this.selectBranch(branch)}  />
				)
			});
		} else {
			branchesList=<span></span>
		}

		return (
		
			<Menu.Item> 								
				<Menu.Header>
					Branches &nbsp;
					<button onClick={this.goMainPage.bind(this)} className="ui mini basic violet icon button">
				  <i className="home icon"></i>
				</button>
				</Menu.Header>
					<Menu.Menu>
							{branchesList}
						</Menu.Menu>
			</Menu.Item>	
		
		);
	}
}
export default BranchesList;

