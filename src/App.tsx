import { useState } from 'react';

import { GenreResponseProps, MovieProps } from './classes/interfaces';

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenre={setSelectedGenre} setMovies={setMovies} />
      <Content selectedGenre={selectedGenre} movies={movies} />
    </div>
  )
}