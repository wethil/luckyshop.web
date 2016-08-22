import React from 'react';


 const PromoCodeList = React.createClass({
	render() {

		if ( this.props.promoCodes && this.props.promoCodes.length > 0 ) {
		    	var promoCodes = []
		     this.props.promoCodes.forEach( ( promoCode ) =>  {

		     	serverDate = moment(TimeSync.serverTime(new Date, 60000 ))
		     	codeDate =  moment(promoCode.createdAt)
		     	diffMin =  serverDate.diff(codeDate, 'minutes')
		     	if (diffMin<=60) {
		     		isActive ='active'
		     	} else {
		     		isActive ='passive'
		     	}


		      	promoCodes.push( 
					 <li className="list-group-item"> {promoCode._id} earned by {promoCode.owner.username} at  {diffMin}  min ago, so it is  {isActive}  </li>
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

export default PromoCodeList 
