import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { Avatar, Button } from 'antd'
import Synopsis from './synopsis/Synopsis'
import Item from './item/Item'
import getMusiclistByIndex from '../../../api/container'
const { Header, Sider, Content } = Layout

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: []
        }
    }

    componentDidMount() {
        const that = this
        console.log('guagua', that.props.id)
        getMusiclistByIndex(that.props.id, function(res){
            console.log(res )
            let tracks = res.data.playlist.tracks
            console.log(tracks)
            let person = []
            tracks.ar.forEach(function (o) { person.push(o.name) })
            console.log('sdfsdfsdf', person)
            tracks.person = person
            that.setState({
                tracks: tracks
            })
        })
    }

    render() {
        const data = this.state.tracks
        const list = data.map((d) =>
            <Item name={d.name} time={d.time} person={d.person} src={d.src} />
        )
        return (
            <Layout>
                <Synopsis />
                <div>
                    <span>歌曲列表</span>
                    <span>100首歌</span>
                </div>
                <table style={{width: '100%', marginTop: 50}}>
                    <thead>
                        <th class="first w1"></th>
                        <th>
                            <div class="wp">标题</div>
                        </th>
                        <th class="w2-1">
                            <div class="wp">时长</div>
                        </th>
                        <th class="w3-1">
                            <div class="wp">歌手</div>
                        </th>
                    </thead>
                    <tbody>
                        {list}
                    </tbody>
                </table>
            </Layout>
        )
    }
}

export default Container