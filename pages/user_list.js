import React from 'react'
import User from './user'
import Champion from './champion.js'

class UserList extends React.Component {
	render() {
        let added = new Set() // this.props.users.map(cur => cur.id))
		return (
          <div>
            <style jsx>{`
.sorted-list {
  width: calc(100% - 20px);
  margin: auto;
  margin-top: -10px;
  padding: 10px;
  background: #fbfbff;
  box-shadow: 0 0 10px #9c9ce8;
  border-radius: 0 0 5px 5px;
  margin-bottom: 20px;
}
.credits {
  text-align: center;
  margin-bottom: 40px;
  font-style: italic;
  color: #559;
  margin-bottom: 50px;
}
            `}</style>
            <Champion user={this.props.users[0]} />
            <div className='sorted-list'>
              {
                this.props.users.slice(1).map((user, i) => {
                  if (!added.has(user.id)) {
                    added.add(user.id)
                    return <User key={i} user={user} i={i} />
                  }
                  return null
                })
              }
            </div>
            <div className='credits'>
              Made with &lt;3 by <a href='https://braziljs.org/' target='_blank'>BrazilJS</a>
            </div>
          </div>
		  )
	}
}

export default UserList