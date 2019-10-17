import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Container from './container/Container'
import './Ranking.css'
const { Header, Sider, Content } = Layout

class Ranking extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        }
    }

    render() {
        return (
            <Layout className="ranking">
                <Sider trigger={null} collapsible>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <span>nav 1</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <span>nav 2</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <span>nav 3</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    {/* 排行榜中的内容 */}
                    <Container />
                </Layout>
            </Layout>
        )
    }
}

export default Ranking