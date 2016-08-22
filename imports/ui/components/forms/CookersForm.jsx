import React from 'react';
import { Meteor } from 'meteor/meteor';

 const CookersForm = React.createClass({

 	handleSubmit(e){
 		e.preventDefault()
 		fullName = this.refs.fullName.value.trim();
 		inf = this.refs.inf.value.trim()
 		photo = this.refs.photo.value.trim()
 	
 		Meteor.call('addCooker', fullName,inf,photo, error => {
            if (error) {
                console.log('error', error);
            } else {
            	console.log('cooker added')
            	this.refs.fullName.value="";
            	this.refs.inf.value="";
            	this.refs.photo.value="";

            } 
             
        });
 	},
	render() {
		return (
			
				<form className="ui form">
				  <div className="field">
				    <input type="text" 
				    	name="fullName" 
				    	placeholder="Aşçı ismi"
				    	ref="fullName"	/>
				  </div>
				  <div className="field">  
				    <input 
				    	type="text" 
				    	name="inf" 
				    	placeholder="Aşçı Açıklaması"
				    	ref="inf" />
				  </div>
				  <div className="field">
				    <input 
				    	type="text" 
				    	name="photo" 
				    	placeholder="Fotoğraf linki"
				    	ref="photo" />
				  </div>
				  	<button 
				  		className="ui button" 
				  		type="submit"
				  		onClick={this.handleSubmit} >Submit</button>
				</form>
		);
	}
});


export default CookersForm;