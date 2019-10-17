import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Menu } from 'antd'

class Bar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                style={{ lineHeight: '32px' }}
            >
                <Menu.Item key="1">推荐</Menu.Item>
                <Menu.Item key="2">排行榜</Menu.Item>
                <Menu.Item key="3">歌单</Menu.Item>
                <Menu.Item key="4">主播电台</Menu.Item>
                <Menu.Item key="5">歌手</Menu.Item>
                <Menu.Item key="6">新碟上架</Menu.Item>
            </Menu>
        )
    }
}

export default Bar