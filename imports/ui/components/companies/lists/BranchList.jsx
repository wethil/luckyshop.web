import React from 'react';
import {PromoListComposer} from '../../../composers/PromoListComposer.jsx'

const BranchList = React.createClass({
	getInitialState (){

    return {
        branch: "branch"
    }
  },

	componentDidMount(){ 
	$('.btn-tooltip').tooltip();
},


	setFirstPackage(e) {
		e.preventDefault()
		plan = {
	desc:'free', 
    shop_name_visib:1,
    shop_dis_visib:0,
    L2S_discount:1,
    L2S_discount_update:2,
    include_link:0,
    include_website:0,
    include_web_update:0,
    include_oSu:0,
    include_ads_update:0,
    include_fly_sheet:0,
    include_googleAd:0,
    voucher_code_availability:0,
    fourMonthsPrice:0,
    twelweMonthsPrice:0
		}


		Meteor.call('addPlan', plan, this.state.branch, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change free' )
			}
		});
	},
	setSecondPackage(e) {
		e.preventDefault()

			plan = {
				desc:'silver', 
			    shop_name_visib:1,
			    shop_dis_visib:0,
			    original_disc:0.10,
			    L2S_discount:0.4,
			    L2S_discount_update:4,
			    include_link:1,
			    include_website:1,
			    include_web_update:2,
			    include_oSu:0,
			    include_ads_update:0,
			    include_fly_sheet:1,
			    include_googleAd:0,
			    voucher_code_availability:1, //hour
			    fourMonthsPrice:500,
			    twelweMonthsPrice:1500
					}

			Meteor.call('addPlan', plan, this.state.branch, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change silver' )
			}
		});
	},
	setThirdPackage(e) {
		e.preventDefault()
		plan = {
				desc:'gold', 
			    shop_name_visib:1,
			    shop_dis_visib:1,
			    original_disc:0.4,
			    L2S_discount:0.5,
			    L2S_discount_update:6,
			    include_link:1,
			    include_website:1,
			    include_web_update:4,
			    include_oSu:0,
			    include_ads_update:0,
			    include_fly_sheet:1,
			    include_googleAd:1,
			    voucher_code_availability:1.5, //hour
			    fourMonthsPrice:750,
			    twelweMonthsPrice:2200
					}
		
			Meteor.call('addPlan', plan, this.state.branch, error => {
			if (error) {
				console.log(error)
			} else {
				console.log('change gold' )
			}
		});
	},
	setFourthPackage(e) {
		e.preventDefault()
		plan = {
				desc:'Platinium', 
			    shop_name_visib:1,
			    shop_dis_visib:1,
			    L2S_discount:1,
			    L2S_discount_update:8,
			    include_link:1,
			    include_website:1,
			    include_web_update:8,
			    include_oSu:1,
			    include_ads_update:1,
			    include_fly_sheet:1,
			    include_googleAd:1,
			    voucher_code_availability:4, //hour
			    fourMonthsPrice:900,
			    twelweMonthsPrice:2850
					}
		
			Meteor.call('addPlan', plan, this.state.branch, function (error, result) {
			if (error) {
				console.log(error)
			} else {
				console.log('change Platinium' )
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
				<button
					 	
					 	onClick={()=> this.setState({
					 		branch:branch._id
					 	})}
					 	title="choose this branch"  
					 	className="btn btn-primary btn-tooltip" >choose</button>

				 <button
					 	dataToggle="tooltip" 
					 	dataPlacement="top" 
					 	onClick={this.setFirstPackage}
					 	title="Free"  
					 	className="btn btn-primary btn-tooltip" >Free</button>

				    <button dataToggle="tooltip" 
					 		dataPlacement="top" 
					 		title="Silver"
					 		onClick={this.setSecondPackage}
					 		className="btn btn-info btn-tooltip">Silver</button>

				    <button dataToggle="tooltip" 
					 		dataPlacement="top"
					 		onClick={this.setThirdPackage} 
					 		title="Gold"  
					 		className="btn btn-success btn-tooltip">Gold</button>
					    <button dataToggle="tooltip" 
					 		dataPlacement="top"
					 		onClick={this.setFourthPackage} 
					 		title="Platinium"  
					 		className="btn btn-success btn-tooltip">Platinium</button>	

						
						<PromoListComposer branch={branch._id} />

					</div>

		         ) ;
		    });
		  } else {
		    branches =  <p>Create a branch for your store!</p> ;
		  }
		return (
			<div>
			<hr/><hr/>{this.state.branch}
						<h5> Map limit :  {company.profile.mapLimit} | If you want to change your map limit, choose another package   </h5>
	


				total : {this.props.b_count}
				{branches}
			</div>
		);
	}
});

export default BranchList






