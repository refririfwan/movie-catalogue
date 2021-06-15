import TheMovieDbSource from '../../data/themoviedb-source';

const NowPlaying = {
  async render() {
    return `
      <h2>Now Playing Page</h2>
    `;
  },

  async afterRender() {
    const movies = await TheMovieDbSource.nowPlayingMovies();
    // eslint-disable-next-line no-console
    console.log(movies);

    // TODO: tampilkan movies di dalam DOM
  },
};

export default NowPlaying;
