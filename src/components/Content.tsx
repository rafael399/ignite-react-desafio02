import { GenreResponseProps, MovieProps } from '../classes/interfaces';
import { MovieCard } from '../components/MovieCard';

interface ContentProps {
  selectedGenre: GenreResponseProps,
  movies: Array<MovieProps>
}

export function Content({ selectedGenre, movies }: ContentProps) {
  return(
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}