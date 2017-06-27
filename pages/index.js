import React from 'react'
import 'isomorphic-fetch'
import _ from 'lodash'
import UserList from './user_list'

const github_url_api = 'https://api.github.com/repos/braziljs/weekly/issues/'
const client_id = process.env.CLIENT_ID
const client_secret = process.env.CLIENT_SECRET
const issuesFrom = 161
const issuesTo = 161
const invalidId = 72206

let users = {}
let topUsers = []

async function getGitHubIssueComments(issueNumber) {
	const options =  { headers: {'If-Modified-Since': 'Mon Jun 26 2017 00:00:00 GMT-0300 (-03)'} }
	const res = await fetch(`${github_url_api}${issueNumber}/comments?client_id=${client_id}&client_secret=${client_secret}`, options)
	const comments = await res.json()
	return comments
}

export default class BrazilJSWeeklyTopUsers extends React.Component {

	static async getInitialProps () {
		for (let i = issuesFrom; i <= issuesTo; i++) {
			let comments = await getGitHubIssueComments(i)
			comments.map((comment) => {
				const id = comment.user.id
				if (id !== invalidId) {
					users[id] = users[id] || Object.assign(comment.user, {count: 0})
					users[id].count ++
				}
			})
		}
		let sortedUsers = _.sortBy(users, (o) => -o.count)
		topUsers.push(sortedUsers[0], sortedUsers[1], sortedUsers[2])
		return { users:  topUsers}
	}

	render () {
		return (
			<div>
				<p>BrazilJS Weekly top users</p> 
				<UserList users={this.props.users}/>
			</div>
		)
	}
}