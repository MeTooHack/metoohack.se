export const state = () => ({
  ideas: [],
  coaches: [],
  showcase: [],
})

export const actions = {
  async nuxtServerInit ({commit}, {app, store}) {
    store.state.ideas = await app.$content('/ideas').getAll()
    store.state.coaches = await app.$content('/coaches').getAll()
    store.state.press = await app.$content('/press').getAll()
    store.state.showcase = await app.$content('/showcase').getAll()
  }
}
