const chains = {}
const configs = require.context('.', false, /\.json$/)

configs.keys().forEach(k => {
  const c = configs(k)
  chains[c.chain_name] = c
})

export default {
  namespaced: true,
  state: {
    config: chains,
    selected: {},
    avatars: {},
  },
  getters: {
    getchains: state => state.chains,
    getAvatarById: state => id => state.avatars[id],
  },
  mutations: {
    setup_sdk_version(state, info) {
      state.chains.config[info.chain_name].sdk_version = info.version
    },
    select(state, args) {
      state.chains.selected = state.chains.config[args.chain_name]
    },
    cacheAvatar(state, args) {
      state.chains.avatars[args.identity] = args.url
    },

  },
  actions: {},
}