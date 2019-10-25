import React, { Component } from 'react'
import PropTypes from 'prop-types'


const MusicCount = function({number}) {
    return (
        <div>
            <span>歌曲列表</span>
            <span>{number}首歌</span>
        </div>
    )
}

MusicCount.protoTypes = {
    number: PropTypes.string.isRequired,
}

export default MusicCount