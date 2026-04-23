export const ANILIST_BY_ID = `
query ($id: Int) {
  Media(id: $id, type: MANGA) {
    id
    averageScore
    title { romaji english native }
  }
}`

export const ANILIST_SEARCH = `
query ($search: String) {
  Page(perPage: 12) {
    media(search: $search, type: MANGA) {
      id
      title { romaji english native }
      coverImage { large }
      genres
      averageScore
      description(asHtml:false)
    }
  }
}`
