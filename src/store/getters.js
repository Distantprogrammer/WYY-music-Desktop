const getters = {
  profile: state => state.user.userInfo.profile ?? '',
  userId: state => state.user.userInfo.account.id
}
export default getters
