export const state = () => ({
  ideas: []
})

export const actions = {
  async nuxtServerInit ({commit}, {app, store}) {
    store.state.ideas = await app.$content('/ideas').getAll()
    store.state.press = await app.$content('/press').getAll()
  }
}
