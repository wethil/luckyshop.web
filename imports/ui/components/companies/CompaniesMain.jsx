import React, { Component } from 'react';
import { Statistic } from 'semantic-ui-react'
import { List, Button } from 'semantic-ui-react'
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import BranchFragment from './BranchFragment/BranchFragment.jsx'
import MenuFragment from './LeftMenu/MenuFragment.jsx'
import emitter from '../emitter.js'
import CreateOrBeMemberBranch from './CreateOrMember/CreateOrBeMemberBranch.jsx'


 class CompaniesMain extends Component {
 constructor(props) {
   super(props);
 
   this.state = {
   	company:{},
   	branch:{}
   };
 }

 componentDidMount(){
 	emitter.addListener('selectBranch', (branch)=>this.handleSelectBranch(branch));
 	emitter.addListener('mainBranch', ()=> this.setState({branch:this.state.main}) );
 }

 handleSelectBranch(branch){
 	this.setState({branch:branch})

 	console.log(branch)
 }

 componentWillMount(){
	 const {company,branch} = this.props
	 if(!branch || !branch._id){
	 	brnc = {_id:""}
	 } else {
	 	brnc = branch
	 }

	 this.setState({
	 	company:company,
	 	branch:brnc,
	 	main:branch
	 	})
 }

componentWillReceiveProps(nextProps){
		 const {company,branch} = nextProps
	if(!branch || !branch._id){
	 	brnc = {_id:""}
	 } else {
	 	brnc = branch
	 }
		  this.setState({
			 	company:company,
			 	branch:brnc
			 	})
}


	render() {

const {company,branch,content} = this.state
console.log(company)
console.log(branch)
if (company.profile.branchId==false )
		{
			branchFragment = <CreateOrBeMemberBranch />
		} else {
			branchFragment =<BranchFragment  branch={branch} company={company} />
		}

		return (
			<div className="className">
				<MenuFragment company={company} branch={branch} />
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