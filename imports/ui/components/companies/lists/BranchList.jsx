import React from 'react';
import {PromoListComposer} from '../../../composers/PromoListComposer.jsx'

const BranchList = React.createClass({
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
	

	render() {

		if ( this.props.branches && this.props.branches.length > 0 ) {
		    	var branches = []
		     this.props.branches.forEach( ( branch ) =>  {

		      	branches.push( 
					<div className="className">
						<h3> {branch.name} {branch.city} {branch.country} </h3>
						
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

 