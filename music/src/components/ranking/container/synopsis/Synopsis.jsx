import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Avatar, Button } from 'antd'
import leftPad from 'left-pad'
const { Header, Sider, Content } = Layout


class Synopsis extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return (
            <div style={{ display: 'flex', alignItems: 'center', margin: '0 auto', marginTop: 50,}}>
                <div style={{ display: 'inline-block' }}>
                    <Avatar style={{ backgroundColor: '#001529', height: 150, width: 150, }} shape="square">
                        {this.state.user}
                    </Avatar>
               </div>
                <div style={{ display: 'inline-block' }}>
                    <span style={{display:'block'}}>云音乐电音榜</span>
                    <span style={{display:'block'}}>更新时间</span>
                    <div style={{ marginLeft: 50 }}>
                        <Button>播放</Button>
                        <Button>+</Button>
                        <Button>收藏</Button>
                        <Button>分享</Button>
                        <Button>下载</Button>
                    </div>
                </div>
           </div>
        )
    }
}

export default Synopsis