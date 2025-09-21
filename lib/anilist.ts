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
