class Api::V1::MoviesController < ApplicationController
   
  def index
    @movies = Movie.get_all_data
    render json: @movies
  end
end
