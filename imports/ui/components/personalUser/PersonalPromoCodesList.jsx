import React from 'react';

 PersonalPromoCodesList = React.createClass({
	render() {


		if ( this.props.promoCodes && this.props.promoCodes.length > 0 ) {
		    	var promoCodes = []
		     this.props.promoCodes.forEach( ( promoCode ) =>  {
		     	serverDate = moment(TimeSync.serverTime(new Date, 60000 ))
		     	codeDate =  moment(promoCode.createdAt)
		     	diffMin =  serverDate.diff(codeDate, 'minutes')
		     	if (diffMin<=60) {
		     		isActive ='active'
		     		usable= `You can use it on  ${promoCode.branch.name} ${promoCode.branch.city}  ${promoCode.branch.country} `
		     	} else {
		     		isActive ='passive'
		     		usable = 'You can not use it anymore'
		     	}


		      	promoCodes.push( 
					 <li className="list-group-item"> Your promo code is: {promoCode._id} It  earned {diffMin} 
					  min ago, so it is  {isActive}. {usable}
					     </li>
		         ) ;
		    });
		  } else {
		    promoCodes =  <p>No codes yet!</p> ;
		  }

		return (
				<ul className="list-group">
						{promoCodes}
					</ul>
		);
	}
});

export default PersonalPromoCodesList