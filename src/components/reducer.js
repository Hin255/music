let initState = {
    music: null,
}
const reducer = function(state=initState, action) {
    console.log('reducer', action)
    let newState = null
    switch(action.type) {
        case 'PASS_MUSIC':
            newState = {
                music: action.music
            }
            break

        default:
            newState = state
            break
    }

    return newState
}

export default reducer