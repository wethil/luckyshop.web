import React, { Component } from 'react';

 class Items extends Component {
	render() {

		cards = []
		for (i=0; i<10; i++) {
			cards.push(	<div key={i} className="four wide column animated fadeIn ">
						<div className="ui card">
					  <div className="content">
					    <div className="right floated meta">%x</div>
					    <img className="ui avatar image" src="https://pbs.twimg.com/profile_images/543749686226456577/e3g8uJRD.jpeg" /> Store Name
					  </div>
					  <div className=" ui small image">
					    <img  src="https://s-media-cache-ak0.pinimg.com/736x/40/b6/48/40b648cd53a45a3dae9647f0c92b959c.jpg" />
					  </div>
					  <div className="content">
					    <a className="header">Grey Skirt</a>
					  </div>
					    <div className="ui bottom attached button">
					      Get It !
					    </div>
					</div>
			</div>)
		}
		return (
			<div className="ui  stackable grid"  >
				{cards}

			</div>
		);
	}
}
export default Items;


