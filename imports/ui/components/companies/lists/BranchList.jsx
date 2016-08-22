import React from 'react';
import {PromoListComposer} from '../../../composers/PromoListComposer.jsx'

const BranchList = React.createClass({
	componentDidMount(){ 
	$('.btn-tooltip').tooltip();
},
	createPromoCode()  {
	 nth=	Math.floor(Math.random() * this.props.b_count);
	 console.log(nth)
	 console.log(this.props.branches[nth])
	 branchID = this.props.branches[nth]._id
	 promotion = 0.25
	 Meteor.call('createPromoCode', branchID,promotion, function(error,result) {
	            if (error) {
	                console.log('error', error);
	            } else {
	            console.log(result)
	          console.log('code added')

	            } 
	             
	        });

	 
	
	},

	setFirstPackage(e) {
		e.preventDefault()
		Meteor.call('changeStoreMapLimit', Meteor.userId(), 1, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change map limit to 1' )
			}
		});
	},
	setSecondPackage(e) {
		e.preventDefault()
			Meteor.call('changeStoreMapLimit', Meteor.userId(), 3, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change map limit to 3' )
			}
		});
	},
	setThirdPackage(e) {
		e.preventDefault()
			Meteor.call('changeStoreMapLimit', Meteor.userId(), 5, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change map limit to 5' )
			}
		});
	},
	

	render() {

		company=this.props.company
		if ( this.props.branches && this.props.branches.length > 0 ) {
		    	var branches = []
		     this.props.branches.forEach( ( branch ) =>  {

		      	branches.push( 
					<div className="className">
						<h3> {branch.name} {branch.city} {branch.country} </h3>
						<hr/><hr/>
						<h5> Map limit :  {company.profile.mapLimit} | If you want to change your map limit, choose another package   </h5>
					
					 <button
					 	dataToggle="tooltip" 
					 	dataPlacement="top" 
					 	onClick={this.setFirstPackage}
					 	title=" 1 Branch on Map"  
					 	className="btn btn-primary btn-tooltip" >Package 1</button>

				    <button dataToggle="tooltip" 
					 		dataPlacement="top" 
					 		title="3 Branch on Map"
					 		onClick={this.setSecondPackage}
					 		className="btn btn-info btn-tooltip">Package 2</button>

				    <button dataToggle="tooltip" 
					 		dataPlacement="top"
					 		onClick={this.setThirdPackage} 
					 		title="5 Branch on Map"  
					 		className="btn btn-success btn-tooltip">Package 3</button>

						
						<PromoListComposer branch={branch._id} />

					</div>

		         ) ;
		    });
		  } else {
		    branches =  <p>Create a branch for your store!</p> ;
		  }
		return (
			<div>
				total : {this.props.b_count}
				{branches}

			</div>
		);
	}
});

export default BranchList

 