class MovieWorker
  include Sidekiq::Worker

  def perform(*args)
    Movie.get_data_movie
  end
end
