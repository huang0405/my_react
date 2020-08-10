import React,{Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import MyNavLink from '@/components/MyNavLink'
import Message from '../Message'
import News from '../News'

export default class Home extends Component {
  render () {
    return (
      <div>
        <h2>Home组件内容</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">News</MyNavLink>
            </li>
            <li>
              <MyNavLink to="/home/message">Message</MyNavLink>
            </li>
          </ul>
          <Switch>
            <Route path="/home/news" component={News} />
            <Route path="/home/message" component={Message} />
            <Route to="/home/news" />
          </Switch>
        </div>
      </div>
    )
  }
}
