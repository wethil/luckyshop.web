import React, { Component } from 'react';
import { Button, Image, List } from 'semantic-ui-react'
import Forms from './Forms.jsx'


 class CreateOrBeMemberBranch extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	branchType:'null'
 	  };
 	}
	render() {
		return (
		
	<div style={{marginLeft:210, minWidth:550, maxWidth:1150}}>
				<div className="ui padded   grid">
					<div className="five wide column" style={{position:'fixed',height:'100vh'}} >
						<List  verticalAlign='middle'>
					    <List.Item>
					      <List.Content floated='left'>
					        <Button onClick={()=>this.setState({branchType:'store'})} basic color='teal' >Click if you are a headquarter</Button>
					      </List.Content>
					    </List.Item>
					    <List.Item>
					      <List.Content  floated='left'>
					        <Button onClick={()=>this.setState({branchType:'branch'})} basic color='teal' >Click if you are a branch of headquarter</Button>
					      </List.Content>
					    </List.Item>
					  </List>
					</div>
					<div className="eleven wide column" style={{marginLeft:'39%'}}>
						<div className="row" style={{width:'100%'}}>
					<Forms branchType={this.state.branchType} />
						 </div>
						<div className="row"> </div>
					</div>
				</div>
			</div>
		);
	}
}
export default CreateOrBeMemberBranch;


