export default function createMarkup(films) {
  return films
    .map(film => {
      return `
      
      <li class="card-set__item" id="${film.id}">
      <a href='#' id='${film.id}' class="card-link">
      <img id="${film.id}
          loading="lazy"
          src="${film.base_url}w342/${film.poster_path}"
          alt="${film.title}"
          class="card-set__img "
          
      />
      </div>
      <h3 class="card-set__title">${film.title} id="${film.id}</h3>
      <div class="card-set__description" id="${film.id}>
      <ul class="card-set__genre" id="${film.id}>
          ${film.filmGenreList}
      </ul>
      <span class="card-set__genre">&nbsp| ${film.releaseYear} id="${film.id}</span>
      <div>
      </a>
      </li>
      `;
    })
    .join('');
}
