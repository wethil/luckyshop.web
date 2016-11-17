import React, { Component } from 'react';
import { Button,Form  } from 'semantic-ui-react'
const options = [
  { text: 'Plan1', name: 'Plan1', value: 1 },
  { text: 'Plan2', name: 'Plan2', value: 2 },
  { text: 'Plan3', name: 'Plan3', value: 3 },
]


 class Forms extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	buttonContent:"Get My Location",
 	  	loc:{}
 	  };
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

 	addBranchAsHeadQuarter(e){
 		e.preventDefault()
 		name = $('#branchName').val()
 		adress = $('#branchAdress').val()
 		plan = this.state.plan
 		paymentInf = $('#creditCard').val()
 		loc={type:'Point',coordinates:[30,30]}
 		console.log(`${branchName} ${branchAdress} ${plan} ${paymentInf} `)

 		Meteor.call('addBranchAsHeadQuarter', name,adress,loc,plan,paymentInf,  (error)=> {
 			if (error) {
 				console.log(error)
 			}else{
 				console.log('addBranchAsHeadQuarter done')
 			}
 		});
 	
 	}

 	addBranchAsBranch(e){
 		e.preventDefault()
 		headQuarterId = $('#storeId').val()
 		name = $('#branchName').val()
 		adress = $('#branchAdress').val()
 		plan = this.state.plan
 		paymentInf = $('#creditCard').val()
 		loc={type:'Point',coordinates:[30,30]}
 		console.log(`${storeId} ${branchName} ${branchAdress} ${plan} ${paymentInf} `)

		Meteor.call('addBranchAsBranch', name,adress,loc,plan,paymentInf,headQuarterId,  (error)=> {
		if (error) {
			console.log(error)
		}else{
			console.log('addBranchAsBranch done')
		}
	});

 	}


	render() {

		switch(this.props.branchType){
			case 'store':
			content=  <Form>
				    <Form.Field>
				      <input id="branchName" placeholder='Store Name' />
				    </Form.Field>
				    <Form.Field>
				      <input id="branchAdress" placeholder='Store Adress' />
				    </Form.Field>
				     <Form.Select onChange={(e,obj)=>this.setState({plan:obj.value})}  options={options} placeholder='Plan' />
				     <Form.Field>
				      <input id="creditCard" placeholder='Credit Card' />
				    </Form.Field>
				    <Form.Field>
				     <Button onClick={(e)=>this.getLocation(e)} type='submit' primary>
				     		{this.state.buttonContent}
				     </Button>
				    </Form.Field>
				    <Button onClick={this.addBranchAsHeadQuarter.bind(this)} type='submit'>Submit</Button>
				  </Form>
			break;
			case 'branch':
			content =<Form>
					 <Form.Field>
				      <input id="storeId" placeholder='Enter your HeadQuarters code' />
				    </Form.Field>
				    <Form.Field>
				      <input id="branchName" placeholder='Branch Name' />
				    </Form.Field>
				    <Form.Field>
				      <input id="branchAdress" placeholder='Branch Adress' />
				    </Form.Field>
				      <Form.Select onChange={(e,obj)=>this.setState({plan:obj.value})}  options={options} placeholder='Plan' />
				     <Form.Field>
				      <input id="creditCard" placeholder='Credit Card' />
				    </Form.Field>
				    <Form.Field>
				     <Button onClick={(e)=>this.getLocation(e)} type='submit' primary>
				     		{this.state.buttonContent}
				     </Button>
				    </Form.Field>
				    <Button onClick={this.addBranchAsBranch.bind(this)} type='submit'>Submit</Button>
				  </Form>
			break;
			default:
			content = <span></span>	  
		}


		return (
			   <span> {content} </span>
		);
	}
}
export default Forms;

