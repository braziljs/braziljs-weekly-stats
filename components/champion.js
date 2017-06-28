import React from 'react'

class Champion extends React.Component {
  
  render() {
    return <div className='header'>
      <style jsx>{`
.header {
  background: #1B8BFF;
  text-align: center;
  width: calc(100% - 20px);
  margin: auto;
  border-radius: 10px 10px 0 0;
  background-image: url(/static/header-bg.jpg);
  background-size: cover;
  padding-top: 20px;
  margin-bottom: 10px;
  margin-top: 60px;
  box-shadow: 0 0 10px #5959a0;
}
.champion-container {
  
}
.champion-container img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid 2px #fff;
}
.champion-link {
  background: #2c93ff; //#51a6ff;
  width: calc(100% + 20px);
  margin-left: -10px;
  margin-top: 20px;
  height: 55px;
  display: flex;
  color: #fff;
  font-weight: bold;
  justify-content: space-around;
  align-items: center;
  border-radius: 4px;
  box-shadow: 0px -3px 4px -2px #0761bf;
  position: relative;
  border-bottom: solid 1px #0761bf;
}
  .champion-link:before,
  .champion-link:after {
    content: '';
    position: absolute;
    color: #000;
    border: solid 5px transparent;
    bottom: -6px;
  }
.champion-link:before { border-left-color: #195390; left: 4px; transform: rotate(-45deg); }
.champion-link:after { border-right-color: #195390; right: 4px; transform: rotate(45deg); }
.champion-link a {
  color: #fff;
  text-decoration: none;
}
.champion-link a:hover {
  text-decoration: underline;
}

.champion-header {
  display: flex;
//  justify-content: space-between;
//  align-items: center;
  margin: -10px 0px 10px 0px;
}
.champion-header div {
  flex: 0 0 40px;
}
.champion-header .ranking-title {
  flex: 2 2 40px;
  color: #fff;
  font-weight: bold;
}
`}</style>
      <div className='champion-header'>
        <div>
          <a href="https://braziljs.org/blog/braziljs-weekly-historico-e-ranking-de-contribuidores"
             target='_blank'>
            <img src='/static/info.png' />
          </a>
        </div>
        <div className='ranking-title'>RANKING</div>
        <div>
          <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A//braziljs.org/"
             target='_blank'>
            <img src='/static/facebook.png' />
          </a>
          <a href="https://twitter.com/home?status=Ranking%20de%20contribuidores%20da%20%23BrazilJS!%20https%3A//braziljs.org/"
             target='_blank'>
            <img src='/static/twitter.png' />
          </a>
        </div>
      </div>
      <div className='champion-container'>
        <img src={this.props.user.avatar_url} /><br />
      </div>
      <div className='champion-link'>
        <span>1</span>
        <a href={this.props.user.html_url}>{this.props.user.login}</a>
        <span>{this.props.user.count}pts</span>
        <img src='/static/trophy.png' />
      </div>
    </div>;
  }
}

export default Champion