import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react'
import { List, Button } from 'semantic-ui-react'
import { Item } from 'semantic-ui-react'
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import ItemsForCompanies from '../Items/ItemsForCompanies.jsx'
import CompaniesMenu from './CompaniesMenu.jsx'
import CompaniesFeed from './CompaniesFeed.jsx'
import emitter from '../emitter.js'
import CreateOrBeMemberBranch from './CreateOrMember/CreateOrBeMemberBranch.jsx'
const { Content, Description, Group, Header, Image } = Item




 class CompaniesMain extends Component {
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

company = this.props.company
console.log(company)
if (company.profile.branchId=='null')
		{
			branchFragment = <CreateOrBeMemberBranch />
		} else {
			branchFragment =<span>null</span>
		}

		return (
			<div className="className">
			<CompaniesMenu />
			{branchFragment}


			</div>
		);
	}
}
export default CompaniesMain;

const styles = {
	mapStyle:{
		zIndex:1,
		position:'absolute',		
		top:0,
		left:0,
		top:0,
		bottom:0
	}
};



/*
	<div style={{marginLeft:210, minWidth:550, maxWidth:1150}}>
				<div className="ui padded   grid">
					<div className="five wide column" style={{position:'fixed',height:'100vh'}} >
						<CreateOrBeMemberBranch />
					</div>
					<div className="eleven wide column" style={{marginLeft:'39%'}}>
						<div className="row" style={{width:'100%'}}>
						{winner}
					{items}
						 </div>
						<div className="row"> </div>
					</div>
				</div>
			</div>






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

*/