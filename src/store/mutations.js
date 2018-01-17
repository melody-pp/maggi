export default {
  setUserInfo (state, userInfo) {
    state.userInfo = userInfo
  },
  setLikeLog (state, likeLog) {
    state.likeLog = likeLog
  },
  upVote (state, openId) {
    const item = state.likeLog.find(item => item.openId === openId)

    if (item) {
      item.likeCount += 1
    } else {
      state.likeLog.push({openId, likeCount: 1})
    }
  },
  setOpenIdPk (state, openIdPk) {
    state.openIdPk = openIdPk
  },
  moveTo (state, current) {
    state.current = current
  },
  moveDown (state) {
    if (state.current < 9) {
      state.current++
    }
  },
  moveUp (state) {
    if (state.current > 0) {
      state.current--
    }
  }
}
