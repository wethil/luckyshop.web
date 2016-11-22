import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react'
import { List, Button } from 'semantic-ui-react'
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Items from '../Items/Items.jsx'
import { browserHistory } from 'react-router'
const { Group, Label, Value } = Statistic

const items = [
  { label: 'Tries', value: '45', color:"teal"},
  { label: 'Winning', value: '12', color:"green" },
  { label: 'Loosing', value: '33', color:"red" },
]
position = [23.07973, 11.60156]

const promoCodes = ["Z09jTr2bZXBXcxj","lTQjcKra0NFJHwp,","oy2nPaM21q99O8Z","HK1MUNuJXcyKOya","t8PSNGDMWBIHiuW"]
 class MainPageContent extends Component {
	logOut(){
 		Meteor.logout(function(err) {
 			browserHistory.push('/')
		});
 	}

	render() {
		return (
			<div style={{marginLeft:210, minWidth:550, maxWidth:1150}}>
				<div className="ui padded   grid">
					<div className="five wide column" style={{position:'fixed',height:'100vh'}} >
						<div className="leaflet-container">
									<Map center={position}
								  		//onMoveend={this.handleMove}
								  		ref="map"
								  		style={styles.mapStyle}
								  		 zoom={2} >
								 		  <TileLayer
								      url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
								      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
								    />
											

						      	</Map>
							</div>
						<Group items={items} />

						 	<List > 
							 	<List.Header>Promo Codes</List.Header>
							 	<List.Item as='a'>Z09jTr2bZXBXcxj</List.Item>
							    <List.Item as='a' >lTQjcKra0NFJHwp</List.Item>
							    <List.Item as='a' >oy2nPaM21q99O8Z</List.Item>
							    <List.Item as='a' >HK1MUNuJXcyKOya</List.Item>
							    <List.Item as='a' >t8PSNGDMWBIHiuW</List.Item>
							    <List.Item > Credit : 10 </List.Item>
						 	</List>
						 	  <Button fluid basic color='teal'>Add Credit</Button>
						 	  <Button onClick={this.logOut.bind(this)} fluid basic color='red'>Logout</Button>
						
					




					</div>
					<div className="eleven wide column" style={{marginLeft:'39%'}}>
						<div className="row" style={{width:'100%'}}>
							<Items />
						 </div>
						<div className="row"> </div>
					</div>
				</div>
			</div>
		);
	}
}
export default MainPageContent;

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