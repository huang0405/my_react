import React, { Component } from 'react'
import qs from 'qs'

export default class Detail extends Component {

  state = {
    detailArr: [
      {id:'001',content:'加油！中国',star:10,date:'2020-08-10 10:44'},
      {id:'002',content:'加油！北京',star:60,date:'2020-08-10 11:44'},
      {id:'003',content:'加油！大同',star:80,date:'2020-08-10 12:44'},
    ]
  }

  render() {
    // 获取params参数
    // const {id,title} = this.props.match.params
    // 获取search参数
    let {search} = this.props.location
    // 借助qs库，解析search参数
    search = search.split('?')[1]
    const {id,title} = qs.parse(search)

    // 检索数据
    const result = this.state.detailArr.find((detailObj) => {
      return detailObj.id === id
    })
    return (
      <div>
        <div>ID: {id}</div>
        <div>标题: {title}</div>
        <div>内容: {result.content}</div>
        <div>点赞数: {result.star}</div>
        <div>日期: {result.date}</div>
      </div>
    )
  }
}
