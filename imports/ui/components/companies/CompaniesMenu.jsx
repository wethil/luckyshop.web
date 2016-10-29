import React, { Component } from 'react';
import { Menu,Button,Icon, Header, Image, Modal,Form  } from 'semantic-ui-react'


 class CompaniesMenu extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	buttonContent:"Get My Location",
 	  	loc:{},
 	  	modal:false
 	  };
 	}

 	componentWillMount(){
 		
 	}


 	getLocation(e){
 		e.preventDefault()
	  if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition((position)=>{
			 var lat =position.coords.latitude
	         var lng =position.coords.longitude
	         loc={type: "Point", coordinates:[lng,lat]}
	        this.setState({loc:loc,buttonContent:"We have your Location"})
		})

	    } else { 
	        this.setState({buttonContent:'Error while getting location'})
	    }
 	}

 	handleSubmit(e){
 		e.preventDefault()
 		branchName = $('#branchName').val()
 		branchAdress = $('#branchAdress').val()
 		console.log(branchName)
 		console.log(branchAdress)
 	Meteor.call('addBranch',branchName,branchAdress,this.state.loc, (error)=> {
 		if (error) {
 			console.log(error)
 		} else {
 		 $('#branchName').val('')
 		 $('#branchAdress').val('')
 		 this.setState({modal:false})
 		}
 	});
 	}

 	handleModal(){
 		this.setState({modal:true})
 	}

	render() {
		return (
			<div>
				 <Menu color='purple' fixed="left" inverted vertical >
			 		  <Menu.Item>
			        	 <Menu.Header>lucky2shop</Menu.Header>
			        </Menu.Item>
			        <Menu.Item > 
			        		<Menu.Header>Home Page</Menu.Header>
			        </Menu.Item>
			         <Menu.Item > 
			        		<Menu.Header>Branches &nbsp; 
			        			<Button basic 
			        		   		size="mini" 
			        		   		icon={ <Icon name='plus' />} 
			        		   		onClick={this.handleModal.bind(this)}
									/>
			        		  </Menu.Header>
			        </Menu.Item>
			        

			 	</Menu>
			 		 <Modal open={this.state.modal}>
									    <Modal.Header>Add a Branch</Modal.Header>
									    <Modal.Content>
									      
									      <Modal.Description>
									        <Header>Branch Information</Header>
									         <Form>
											    <Form.Field>
											      <input id="branchName" placeholder='Branch Name' />
											    </Form.Field>
											    <Form.Field>
											      <input id="branchAdress" placeholder='Branch Adress' />
											    </Form.Field>
											    <Form.Field>
											     <Button onClick={(e)=>this.getLocation(e)} type='submit' primary>
											     		{this.state.buttonContent}
											     </Button>
											    </Form.Field>
											    <Button onClick={this.handleSubmit.bind(this)} type='submit'>Submit</Button>
											  </Form>

									      </Modal.Description>
									    </Modal.Content>
									  </Modal>

			</div>
		);
	}
}
export default CompaniesMenu;


 							 