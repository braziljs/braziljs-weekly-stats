import React from 'react'
import User from './user'

class UserList extends React.Component {
	render() {
		return (
		    <div>
		      {this.props.users.map((user) =>
		        <User user={user} />
		      )}
		    </div>
		  )
	}
}

export default UserList