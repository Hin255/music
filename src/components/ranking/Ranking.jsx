import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Container from '../container/Container'
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
    }

    componentDidMount() {
        const that = this
        let menus = this.state.menus
        getMusicMenu(function(r){
            let list = r.data.list
            for (let i = 0; i < list.length; i++) {
                let item = list[i]
                let m = <MenuItem className="menu-item" key={i} onClick={that.getMusicIndex} >
                            <img src={item.coverImgUrl} style={{height:30, width:30}} alt=""/>
                            <span tyle={{ fontSize: 18,}}>{item.name}</span>
                            <span style={{fontSize: 14, color: '#ccc',}}>{item.updateFrequency}</span>
                        </MenuItem>
                menus.push(m)
            }
            that.setState({
                menus: menus
            })
        })
    }

    render() {
        const menus = this.state.menus
        const index = this.state.index
        return (
            <Layout className="ranking">
                <Sider className="sider" trigger={null} collapsible>
                    <Menu className="menu" defaultSelectedKeys={['1']}>
                        {menus}
                    </Menu>
                </Sider>
                    {/* 排行榜中的内容 */}
                <Container id={index} />
            </Layout>
        )
    }
}

export default Ranking