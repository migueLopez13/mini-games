class ProverbApi {
  constructor() {}

  async getProverb() {
    const proverbList = await fetch('./mock/proverb-list.json')
      .then(async response => await response.json())
      .then(data => data)

    return proverbList[Math.floor(Math.random() * proverbList.length)]
  }
}

export default new ProverbApi()