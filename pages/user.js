import React from 'react'

class User extends React.Component {
  render() {
    return <div>
    	<a href={this.props.user.html_url}>@{this.props.user.login}</a>
    	<div><img src={this.props.user.avatar_url} /></div>
    </div>;
  }
}

export default User