import React from 'react'
import 'isomorphic-fetch'
import _ from 'lodash'
import UserList from '../components/user_list'

const github_url_api = 'https://api.github.com/repos/braziljs/weekly/issues/'
const local_cache_url = 'http://localhost:3000/static/'
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const issuesFrom = 136
const issuesTo = 161
const invalidIds = new Set([72206, 347387]) // jaydson e felipenmoura

async function getGitHubIssueComments(issueNumber, req) {
	const options =  { headers: {'If-Modified-Since': 'Mon Jun 26 2017 00:00:00 GMT-0300 (-03)'} }
	//const res = await fetch(`${github_url_api}${issueNumber}/comments?client_id=${client_id}&client_secret=${client_secret}`, options)
	const res = await fetch(`http://${req.headers.host}/static/${issueNumber}.json`)
	const comments = await res.json()
	return comments
}

export default class BrazilJSWeeklyTopUsers extends React.Component {

	static async getInitialProps ({ req }) {
		let users = {}
		let topUsers = []

		for (let i = issuesFrom; i <= issuesTo; i++) {
			let comments = await getGitHubIssueComments(i, req)
			comments.map((comment) => {
				const id = comment.user.id
				if (!invalidIds.has(id)) {
					users[id] = users[id] || Object.assign(comment.user, {count: 0})
					users[id].count ++
				}
			})
		}
		let sortedUsers = _.sortBy(users, (o) => -o.count)
		topUsers.push(...sortedUsers)
		return { users:  topUsers}
	}

	render () {
		return (
			<div className='wrapper'>
                <style global jsx>{`
*, *:before, *:after { box-sizing: border-box; }
body, html {
  margin: 0;
  padding: 0;
  min-height: 100%;
//  margin-top: -8px;
  background-color: #FBFCFF;
  font-family: Sans-serif, Arial, Tahoma;
}
body {
  padding-top: 40px;
  background-image: url('/static/bg2.jpg');
  background-size: cover;
  background-attachment: fixed;
}
.wrapper {
  width: 90%;
  height: 100%;
  max-width: 400px;
  margin: auto;
}
                `}</style>
                {
                  this.props.users
                    ? <UserList users={this.props.users}/>
                    : <div>Loading.</div>
                }
			</div>
		)
	}
}
