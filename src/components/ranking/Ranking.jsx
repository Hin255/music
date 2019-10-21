import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Container from './container/Container'
import './Ranking.css'
import { MenuItem } from 'rc-menu'
import getMusicMenu from '../../api/ranking'
const { Header, Sider, Content } = Layout

class Ranking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            menus: [],
            musicList: [],
            index: 0,
        }
    }

    getMusicIndex = (e) => {
        this.setState({
            index: e.key,
        })
        console.log(e.key)
    }

    componentDidMount() {
        const that = this
        let menus = this.state.menus
        getMusicMenu(function(r){
            let list = r.data.list
            console.log('data', list.length)
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                let m = <MenuItem key={i} onClick={that.getMusicIndex} >
                    <img src={item.coverImgUrl} style={{height:30, width:30}} alt=""/>
                    <span>{item.name}</span>
                    <span>{item.updateFrequency}</span>
                    </MenuItem>
                menus.push(m)
            }
            that.setState({
                menus: menus
            })
        })
    }

    render() {
        let menus = this.state.menus
        let index = this.state.index
        return (
            <Layout className="ranking">
                <Sider trigger={null} collapsible>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {menus}
                    </Menu>
                </Sider>
                    {/* 排行榜中的内容 */}
                <Container id={index}/>
            </Layout>
        )
    }
}

export default Ranking