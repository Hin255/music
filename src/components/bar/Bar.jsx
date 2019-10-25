import React, { Component } from "react"
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import Ranking from '../ranking/Ranking'
import RecommendPage from '../recommend/recommendPage/RecommendPage'
import './Bar.css'

class Bar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentIndex: 0,
        }
    }

    handleClick = (e) => {
        let currentIndex = this.state.currentIndex
        let nextIndex = e.key
        if (nextIndex && nextIndex == currentIndex) {
            return
        } else {
            this.setState({
                currentIndex: nextIndex
            })
        }
    }

    render() {
        const currentIndex = this.state.currentIndex
        return (
            <div> 
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['0']}
                    style={{ lineHeight: '32px' }}
                    onClick={this.handleClick}
                >
                    <Menu.Item key="0">推荐</Menu.Item>
                    <Menu.Item key="1">排行榜</Menu.Item>
                    <Menu.Item key="2">歌单</Menu.Item>
                    <Menu.Item key="3">主播电台</Menu.Item>
                    <Menu.Item key="4">歌手</Menu.Item>
                    <Menu.Item key="5">新碟上架</Menu.Item>
                </Menu>
                <div className={currentIndex == 0 ? 'show' : 'hidden'}>
                    <RecommendPage />
                </div>
                <div className={currentIndex == 1 ? 'show' : 'hidden'}>
                    <Ranking />
                </div>
            </div>

        )
    }
}

export default Bar