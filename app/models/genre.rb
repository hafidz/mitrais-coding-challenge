class Genre < ApplicationRecord
  has_and_belongs_to_many :movies

  def self.get_data_genre
    request = res = RestClient.get 'https://api.themoviedb.org/3/genre/movie/list?api_key=d90e430a19e15325653e0520e310e424&language=en-US'
    response = JSON.parse(request.body)
    response["genres"].each do |data|
      Genre.create(
          id: data["id"],
          name: data["name"])
    end
  end
end
