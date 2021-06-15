import UrlParser from '../../routes/url-parser';
import TheMovieDbSource from '../../data/themoviedb-source';

const Detail = {
  async render() {
    return `
      <h2>Detail Page</h2>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    // eslint-disable-next-line no-console
    console.log(movie);

    // TODO: tampilkan movie di dalam DOM
  },
};

export default Detail;
