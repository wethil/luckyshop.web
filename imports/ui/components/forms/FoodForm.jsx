import React from 'react';
import { Meteor } from 'meteor/meteor';
 const FoodForm = React.createClass({

 	handleSubmit(e){
 		e.preventDefault()
 		foodName = this.refs.foodName.value.trim();
 		desc = this.refs.desc.value.trim()
 		photo = this.refs.photo.value.trim()
 		cooker = this.refs.cookerId.value.trim()
 		foodDay =this.refs.day.value.trim()
 		foodType = this.refs.foodType.value.trim()
 		Meteor.call('addFood', foodName,desc,photo,cooker,foodDay,foodType, error => {
            if (error) {
                console.log('error', error);
            } else {
            	console.log('food added')
            	this.refs.foodName.value="";
            	this.refs.desc.value="";
            	this.refs.photo.value="";
            

            } 
             
        });
 	},
	render() {
		return (
			
				<form className="ui form">
				  <div className="field">
				    <input type="text" 
				    	name="foodName" 
				    	placeholder="Yemek ismi"
				    	ref="foodName"	/>
				  </div>
				  <div className="field">  
				    <input 
				    	type="text" 
				    	name="desc" 
				    	placeholder="Yemek Açıklaması"
				    	ref="desc" />
				  </div>
				    <div className="field">  
				    <input 
				    	type="text" 
				    	name="day" 
				    	placeholder="Yemek Günü"
				    	ref="day" />
				  </div>
				    <div className="field">  
				    <input 
				    	type="text" 
				    	name="tür" 
				    	placeholder="Yemek türü"
				    	ref="foodType" />
				  </div>
				  <div className="field">
				    <input 
				    	type="text" 
				    	name="photo" 
				    	placeholder="Fotoğraf linki"
				    	ref="photo" />
				  </div>
				    <div className="field">
				    <input 
				    	type="text" 
				    	name="cookerId" 
				    	placeholder="Aşçı Id"
				    	ref="cookerId" />
				  </div>
				  	<button 
				  		className="ui button" 
				  		type="submit"
				  		onClick={this.handleSubmit} >Submit</button>
				</form>
		);
	}
});


export default FoodForm;