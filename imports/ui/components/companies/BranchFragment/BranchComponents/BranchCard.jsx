import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import { Button, Card, Image } from 'semantic-ui-react'

 class BranchCard extends Component {
 	logOut(){
 		Meteor.logout(function(err) {
 			browserHistory.push('/')
		});
 	}

	render() {
	
		const {branch,company} = this.props
		console.log(branch)
		return (
	 <Card>
      <Card.Content>
        <Image floated='right' size='mini' src={company.profile.avatar} />
        <Card.Header>
          {branch.name}
        </Card.Header>
        <Card.Meta>
          {branch._id}
        </Card.Meta>
        <Card.Description>
          Copy and send this code to your branch for <strong> create a branch in luck2shop </strong>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
          <Button onClick={this.logOut.bind(this)} basic color='red'>Logout</Button>
      </Card.Content>
    </Card>
		);
	}
}
export default BranchCard;


       			
     

