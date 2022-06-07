export interface Result {
  poster_path?: any;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: any;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  name: string;
  media_type: string;
}

export interface RootObject {
  page: number;
  results: Result[];
  total_results: number;
  total_pages: number;
}
