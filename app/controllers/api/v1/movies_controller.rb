class Api::V1::MoviesController < ApplicationController
   
  def index
    @movies = Movie.get_all_data
    render json: @movies
  end

  def genre
    @genres = Genre.all
    render json: @genres
  end
end
