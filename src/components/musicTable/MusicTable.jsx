import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './MusicTable.css'

const MusicTable = function({body}) {
    return (
        <table className="music-table">
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
                {body}
            </tbody>
        </table>
    )
}

MusicTable.propTypes = {
    body: PropTypes.array,
}

export default MusicTable
