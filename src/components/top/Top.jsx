import React, { Component } from "react"
import { ReactDOM } from "react-dom"
import PropTypes from 'prop-types'
import { Layout, Menu, Input } from 'antd'
import Login from '../login/Login'
import Bar from '../bar/Bar'
import './Top.css'
const { Header, Footer, Content } = Layout
const { Search } = Input

class Top extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFirstItem: true,
        }
    }

    handleClick = (e) => {
        if(e.key != 1) {
            this.setState({
                isFirstItem: false,
            })
        } else {
            this.setState({
                isFirstItem: true,
            })
        }
    }

    render() {
        const isFirstItem = this.state.isFirstItem
        return (
            <div className="">
                <Layout>
                    <Header>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                            onClick={this.handleClick}
                        >
                            <Menu.Item key="1">发现</Menu.Item>
                            <Menu.Item key="2">我的</Menu.Item>
                            <Menu.Item key="3">朋友</Menu.Item>
                            <Menu.Item key="4">发现者</Menu.Item>
                            <Menu.Item key="5">client</Menu.Item>
                            <Menu.Item key="6">
                                <Search
                                    placeholder="音乐/视频/电台/用户"
                                    onSearch={value => console.log(value)}
                                    style={{ width: 200, }}
                                />
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Login />
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <div className={isFirstItem ? 'show' : 'hidden'}>
                        <Bar />
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Top