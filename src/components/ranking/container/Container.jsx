import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd'
import Synopsis from './synopsis/Synopsis'
import Item from './item/Item'
import getMusiclistByIndex from '../../../api/container'
import './Container.css'

class Container extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playList: {
                musicList: [],
                coverImage: null,
            },
            currentId: null,
        }
    }

    componentWillReceiveProps(nextProps){
        console.log('dsdawrwer')
        let currentId = this.state.currentId
        let nextId = nextProps.id
        if (currentId == nextId) {
            return
        } else {
            this.state.currentId = nextId
            this.getData(nextId)
        }
    }

    getData = (id) => {
        const that = this
        getMusiclistByIndex(id, function (res) {
            let data = res.data.playlist.tracks
            let coverImage = res.data.playlist.coverImgUrl
            let musicList = []
            data.forEach(function(item) {
                let music = {}
                music.id = item.id
                music.name = item.name
                music.cover = item.al.picUrl + '?param=50y50&quality=100'
                let s = []

                item.ar.forEach(function(o) {
                    s.push(o.name)
                })
                let singer = s.join(' / ')
                music.singer = singer
                musicList.push(music)
            })
            that.state.playList.musicList = []
            that.setState({
                playList: {
                    musicList: musicList,
                    coverImage: coverImage,
                }
            })
        })
    }

    render() {
        const data = this.state.playList.musicList
        const coverImage = this.state.playList.coverImage
        const musicNumber = this.state.playList.musicList.length
        const list = data.map((d) =>
            <Item id={d.id} name={d.name} singer={d.singer} cover={d.cover} />
        )
        return (
            <Layout>
                <Synopsis src={coverImage} />
                <div>
                    <span>歌曲列表</span>
                    <span>{musicNumber}首歌</span>
                </div>
                <table style={{width: '100%', marginTop: 50}}>
                    <thead>
                        <tr>
                            <th></th>
                            <th>
                                <div>标题</div>
                            </th>
                            <th>
                                <div>时长</div>
                            </th>
                            <th>
                                <div>歌手</div>
                            </th>
                        </tr>
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