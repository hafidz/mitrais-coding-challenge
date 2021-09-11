class Movie < ApplicationRecord
  has_and_belongs_to_many :genres

  def self.get_data_movie
    request = RestClient.get 'https://api.themoviedb.org/3/trending/all/week?api_key=d90e430a19e15325653e0520e310e424'
    response = JSON.parse(request.body)
    response["results"].each do |data|
      movie = Movie.create(
          name: data["name"].present? ? data["name"] : data["title"] ,
          rating: data["vote_average"].to_f, 
          overview: data["overview"], 
          poster_path: "https://image.tmdb.org/t/p/original#{data['poster_path']}", 
          first_air_date: data["first_air_date"], 
          backdrop_path: "https://image.tmdb.org/t/p/original#{data['backdrop_path']}", 
          release_date: data["release_date"],
          media_type: data["media_type"])
      data["genre_ids"].each do |genre|
        GenresMovie.create(movie_id: movie.id, genre_id: genre)
      end
    end
  end

  def self.get_all_data
    movies = Movie.includes(:genres)
    data = []
    movies.each do |movie|
      data << {
          id: movie.id, 
          name: movie.name, 
          rating: movie.rating, 
          overview: movie.overview,
          poster_path: movie.poster_path, 
          backdrop_path: movie.backdrop_path,
          media_type: movie.media_type,
          first_air_date: movie.first_air_date,
          release_date: movie.release_date,
          genres: movie.genres.map{|a| {id: a.id, name: a.name}}
        }
    end
    return data
  end
end
