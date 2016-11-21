import React from 'react';

export const LandingBody = React.createClass({
	 getInitialState (){

    return {
        adress:""
    }
  },
	handleAdressChange (e)  {
        this.setState({
            adress: e.target.value
        });
},

	handleSubmit (e) {
		e.preventDefault()
		adress = this.state.adress.trim()
		Meteor.call('addItem', adress, error =>{
			if (error) {
				console.log('error')
			} else {
				console.log('added')
				this.setState({adress:""})
			}
		});

	},


	render() {
		return (
			  <div className="main" style={{backgroundImage: 'url("bg.jpg")'}}>
          {/*    Change the image source 'images/rick.jpg' with your favourite image.     */}
          <div className="cover black" data-color="black" />
          {/*   You can change the black color for the filter with those colors: blue, green, red, orange       */}
          <div className="container">
            <h1 className="logo cursive">
              lucky2shop
            </h1>
            {/*  H1 can have 2 designs: "logo" and "logo cursive"           */}
            <div className="content">
              <h4 className="motto"> Let numbers make you earn your favourite clothes! </h4>
              <div className="subscribe">
                <h5 className="info-text">
                  Join the waiting list for the beta. We keep you posted.
                </h5>
                <div className="row">
                  <div className="col-md-4 col-md-offset-4 col-sm6-6 col-sm-offset-3 ">
                    <form className="form-inline" role="form">
                      <div className="form-group">
                        <label className="sr-only" htmlFor="exampleInputEmail2">Email address</label>
                        <input type="email" value={this.state.adress} onChange={this.handleAdressChange}  ref='adress' className="form-control transparent" placeholder="Your email here..." />
                      </div>
                      <button  onClick={this.handleSubmit} className="btn btn-info btn-fill">Notify Me</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
        </div>
		);
	}
});
