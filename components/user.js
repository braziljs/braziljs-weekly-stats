import React from 'react'

class User extends React.Component {
  
  render() {
    return <div className={'user-container ' + (this.props.i < 2 ? 'among-first': '') }>
      <style jsx>{`
.user-container {
  margin: 0;
  padding: 0;
  height: 100%;
  margin-top: -8px;
  background-color: #fefeff;
  display: flex;
  align-items: center;
  color: #2c93ff;
  text-align: left;
  margin: 5px 0;
  border-radius: 4px;
  box-shadow: 1px 3px 10px #dadaf7;
  height: 60px;
}
.user-container img {
  max-width: 40px;
}
.user-container div {
//  flex: 0 0 ;
}
.user-position {
//  width: 40px;
  text-align: center;
  flex: 0 0 40px;
}
.user-image {
  text-align: center;
//  width: 40px;
  flex: 0 0 40px;
}
.user-login {
  flex: 2 2 40px;
  padding: 0 5px;
}
.user-login a {
  color: inherit;
  text-decoration: none;
}
.user-login a:hover {
  text-decoration: underline;
}
.user-points {
  flex: 0 0 40px;
  font-weight: bold;
}
.user-trophy {
  flex: 0 0 40px;
}
.user-trophy img {
  height: 30px;
}
.among-first {
  background-color: #ffbd26;
  color: #fff;
}
.user-image img {
  border-radius: 50%;
  border: solid 2px #fff;
}
`}</style>
      <div className='user-position'>{this.props.i + 2}</div>
      <div className='user-image'><img width='100%' src={this.props.user.avatar_url} /></div>
      <div className='user-login'><a href={this.props.user.html_url}>{this.props.user.login}</a></div>
      <div className='user-points'>{this.props.user.count}pts</div>
      {
        this.props.i < 2
          ? <div className='user-trophy'>
            <img src={
              '/static/trophy-' + (this.props.i === 0 ? 'silver' : 'bronze') + '.png'
            } />
          </div>
          : <div className='user-trophy' />
      }
    </div>;
  }
}

export default User