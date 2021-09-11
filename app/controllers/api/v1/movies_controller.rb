class Api::V1::MoviesController < ApplicationController
   
  def index
    @movies = Movie.get_all_data
    render json: @movies, status: 200
  end

  def genre
    @genres = Genre.select(:id, :name)
    render json: @genres, status: 200
  end
end
