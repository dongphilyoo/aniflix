const API_KEY = process.env.API_KEY

export default {
  fetchTrending: {
    title: 'Trending',
    // url: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    // url: 'https://api.jikan.moe/v4/recommendations/anime',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&status=airing&order_by=score&sort=desc',
  },
  fetchTopRated: {
    title: 'Top Rated',
    url: 'https://api.jikan.moe/v4/top/anime',
  },
  fetchActionAnimes: {
    title: 'Action',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres_exclude=26,49,9,12,35,18&genres=1&order_by=score&sort=desc',
  },
  fetchComedyAnimes: {
    title: 'Comedy',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=4&order_by=score&sort=desc',
  },
  fetchHorrorAnimes: {
    title: 'Horror',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=14&order_by=score&sort=desc',
  },
  fetchRomanceAnimes: {
    title: 'Romance',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=22&order_by=score&sort=desc',
  },
  fetchMysteryAnimes: {
    title: 'Mystery',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=7&order_by=score&sort=desc',
  },
  fetchFantasyAnimes: {
    title: 'Fantasy',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=10&order_by=score&sort=desc',
  },
  fetchSportsAnimes: {
    title: 'Sports',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=30&order_by=score&sort=desc',
  },
  fetchSciFiAnimes: {
    title: 'Sci-Fi',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=24&order_by=score&sort=desc',
  },
  fetchGourmetAnimes: {
    title: 'Gourmet',
    url: 'https://api.jikan.moe/v4/anime?genres_exclude=26,49,9,12,35,18&genres=47&order_by=score&sort=desc',
  },
}
