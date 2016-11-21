import React, { Component } from 'react';
import { Button,Form  } from 'semantic-ui-react'
const options = [
  { text: 'Skirt', name: 'Skirt', value: 0 },
  { text: 'Shoe', name: 'Shoe', value: 1 },
  { text: 'T-shirt', name: 'T-shirt', value: 2 },
]


 class CreateItem extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {clothesType:""};
 	}
 	saveItem(e){
 		e.preventDefault()
 		cName = $('#cName').val()
 		quantity = $('#quantity').val()
 		photo = $('#picLink').val()
		additionalDiscount = $('#disc').val()
		clothesType = this.state.clothesType
		branchId = this.props.company.profile.branchId
		console.log(this.state.clothesType)
		
		Meteor.call('addItem',cName,quantity,photo,branchId,clothesType,additionalDiscount,  (error)=> {
			if (error) {
				console.log(error)
			}else {
				 $('#cName').val("")
		 		 $('#quantity').val("")
		 		 $('#picLink').val("")
				 $('#disc').val("")
			}
		});
 	}
	render() {
		return (
			<div className="five wide column" style={{position:'fixed',height:'100vh'}} > 
				<Form>			
				<Form.Field>
				      <Form.Group widths='equal'>
						 <input id='cName' placeholder='Clothes Name' />
				           <input id="quantity" placeholder='Quantity' />
				        </Form.Group>
				    </Form.Field>
				    <Form.Field>
				      <input id="picLink" placeholder='Clothes Pic Link' />
				    </Form.Field>
				    <Form.Field>
				     <Form.Group widths='equal'>
				          <Form.Select onChange={(e,obj)=>this.setState({clothesType:obj.value})}  options={options} placeholder='Clothe Type' />
				           <input id="disc" placeholder='Additional Disc Percentage' />
				        </Form.Group>
				    </Form.Field>
				    <Button onClick={this.saveItem.bind(this)} type='submit'>Submit</Button>
				  </Form>
			</div>
		);
	}
}
export default CreateItem;

			
					