import store from '@/store'
export default function playFn (id) {
  store.commit('getIdMusic', id)
}
