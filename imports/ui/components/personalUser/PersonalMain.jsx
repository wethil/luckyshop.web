import React from 'react';
import Logout from '../userAccount/Logout.jsx'
import {UserPromosComposer} from '../../composers/UserPromosComposer.jsx'
 const PersonalMain = React.createClass({
 	getInitialState (){

    return {
        branch: ""
    }
  },
 	createCode(){
			
 
				branchID = this.props.branch._id
	            promotion = 0.10
	            user = Meteor.userId();
	        
	       
	         Meteor.call('createPromoCode',branchID,promotion,user,  function(error,result) {
	            if (error) {
	                console.log('error', error);
	            } else {
	            console.log('added')
	            }     
	        });

	          Meteor.call('decUserCredit',user,  function(error,result) {
	            if (error) {
	                console.log('error', error);
	            } else {
	            console.log('dec credit')
	            }     
	        });
 	},
 	incCredit(){

	            user = Meteor.userId();
	        
	       
	         Meteor.call('incUserCredit',user,  function(error,result) {
	            if (error) {
	                console.log('error', error);
	            } else {
	            console.log('inc credit')
	            }     
	        });
 	},
	render() {


		
		username = this.props.user.username
		credit =this.props.user.profile.credit
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
					hi {username} Your Remain Credit : {credit}  
					<button  onClick={this.createCode} className="btn btn-sm ttn-primary"> create code</button>
					{/*<button  onClick={this.incCredit} className="btn btn-sm ttn-primary"> Add Credit </button>*/}
					<Logout /> 
				</div>

					<div className="row">
						<div className="col-md-12">
								
								<UserPromosComposer />
								
							</div>
					</div>
				</div>
			</div>
		);
	}
});

export default PersonalMain

