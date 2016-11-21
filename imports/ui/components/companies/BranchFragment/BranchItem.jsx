import React, { Component } from 'react';
import emitter from '../../emitter.js'
import ItemsForCompanies from '../../Items/ItemsForCompanies.jsx'
import { Item } from 'semantic-ui-react'
const { Content, Description, Group, Header, Image } = Item
 class BranchItem extends Component {
 		constructor(props) {
		 	  super(props);
		 	
		 	  this.state = {
		 	  	title:"",
		 	  	description:"",
		 	  	image:"",
		 	  	price:"",
		 	  };
 	}

 	componentDidMount(){
 		emitter.addListener('selectWinner', (value)=>this.handleSelect(value));
 	}

 	handleSelect(value){
 		console.log(value)
 		this.setState({
 			title:value.title,
 			description:value.description,
 			image:value.image,
 			price:value.price
 		})
 	}

	render() {
			const {title,description,image,price} = this.state
		if(this.state.title!=""){
			winner =	<Group>
						 <Item>
					      <Image className="ui" size='small' src={image} shape='circular' ui={true} />
					      <Content>
					        <Header as='a'>{title}</Header>
					        <Description>
					          <p>{description}</p>
					          <p>
					           win discount with this code <a>{price}</a>
					          </p>
					        </Description>
					      </Content>
   					 </Item>
   					 </Group>
   					items =  <ItemsForCompanies />
		} else {
			winner = <h2>please choose a winner</h2>
			items = ""
		}
		return (
			
					<div className="eleven wide column" style={{marginLeft:'39%'}}>
						<div className="row" style={{width:'100%'}}>
					{winner}
					{items}
						 </div>
						<div className="row"> </div>
					</div>
		);
	}
}
export default BranchItem;