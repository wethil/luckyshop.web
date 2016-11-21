import React, { Component } from 'react';
import { Menu,Button,Icon, Header, Image, Modal,Form  } from 'semantic-ui-react'
import emitter from '../emitter.js'


 class CompaniesMenu extends Component {
 	constructor(props) {
 	  super(props);
 	
 	  this.state = {
 	  	buttonContent:"Get My Location",
 	  	loc:{},
 	  	content:"home"
 	  };
 	}

 	componentWillMount(){}

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

 	

 	changeBFContent(content){
 		this.setState({content:content})

 		emitter.emit('changeBFContent',content)
 	}

	render() {
		const {content} = this.state
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
					<Menu.Item>
				          <Menu.Header>Branches</Menu.Header>
				        </Menu.Item>
			 	</Menu>
			</div>
		);
	}
}
export default CompaniesMenu;


 							 