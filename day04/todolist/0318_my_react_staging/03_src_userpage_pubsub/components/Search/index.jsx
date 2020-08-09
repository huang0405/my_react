import React,{Component} from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios'

export default class Search extends Component {
  state = {
    keyWord: '' // 输入关键字
  }

  // 向state中保存用户输入的关键字
  saveKeyWord = (event) => {
    // 获取用户的输入
    const {target:{value:keyWord}} = event
    // 维护进入状态
    this.setState({keyWord})
  }

  // 点击搜索的回调
  handleSearch = () => {
    // 获取用户输入
    const {keyWord} = this.state
    // 请求之前展示的loading界面
    PubSub.publish('UPDATE_LIST_STATE',{isLoading:true,isFirst:false})
    // 发起请求
    axios.get(`/api/search/users?q=${keyWord}`).then(
      response => {
        // 请求成功后，存储用户列表，不展示loading
        PubSub.publish('UPDATE_LIST_STATE',{users:response.data.items,isLoading:false})
      },
      error => {
        // 请求失败后，存储错误信息，不展示loading
        PubSub.publish('UPDATE_LIST_STATE',{error:error.message,isLoading:false})
      }
    )
  }

  render () {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
          <div>
            <input onChange={this.saveKeyWord} type="text" placeholder="enter the name you search"/>&nbsp;
            <button onClick={this.handleSearch}>Search</button>
          </div>
      </section>
    )
  }
}
