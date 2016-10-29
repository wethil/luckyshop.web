import React, { Component } from 'react';
import _ from 'lodash'
import Chance from 'chance'
import { Search, Grid, Header,Icon,Feed } from 'semantic-ui-react'
import faker from 'faker'
import emitter from '../emitter.js'
var chance = new Chance();

const source = _.times(5, () => ({
  title: chance.name(),
  description: chance.email({domain: 'yahoo.com'}),
  image: faker.internet.avatar(),
  price:  chance.hash({length: 16})
}))
myFeed = []

source.forEach(function (user){
	myFeed.push(
	

	    <Feed.Event key={user.title}>
      <Feed.Label>
        <img src={user.image} />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>
          	 <span onClick={()=> emitter.emit('selectWinner',user)}> {user.title}</span> 
           </Feed.User> win this code <a onClick={()=> emitter.emit('selectWinner',user)}>{user.price}</a>
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>


		)
});





 class CompaniesFeed extends Component {
 	componentWillMount() {
   		 this.resetComponent()

  }

    resetComponent () {
    	this.setState({ isLoading: false, results: [], value: '' })
    }

      handleChange (e, result)  {
      	this.setState({ value: result.title })
  }

    handleSearchChange (e, value) {
    this.setState({ isLoading: true, value })

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
      const isMatch = (result) => re.test(result.title)

      this.setState({
        isLoading: false,
        results: _.filter(source, isMatch),
      })
    }, 500)
  }

  handleSelect(value) {
  	console.log(value)
  	emitter.emit('selectWinner',value)
  }



	render() {
		 $(".ui.input").addClass("fluid");
		const { isLoading, value, results } = this.state
		return (
			<div>
        
          <Search
          	fluid={true}
            loading={isLoading}
            onChange={this.handleChange.bind(this)}
            onSearchChange={this.handleSearchChange.bind(this)}
            results={results}
            value={value}
        onChange={(e,value)=> this.handleSelect(value)}
            placeholder="Search users by name,username or code"
           
            {...this.props}
          />

<Feed>
{myFeed}
</Feed>
  
        
      </div>
		);
	}
}
export default CompaniesFeed;

