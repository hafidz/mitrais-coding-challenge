require 'rails_helper'

RSpec.describe "Api::V1::Movies", type: :request do
  describe "GET /movies" do
    describe "GET /api/v1/movies" do 
      let(:parsed_response_body) { JSON.parse(response.body) }
      let(:movie_sources) { parsed_response_body }
      before do 
        get '/api/v1/movies'
      end

      it "returns http success " do 
        expect(response).to have_http_status(:success)
      end

      it "JSON body response contains expected recipe attributes" do 
        movie_sources.each { |source| expect(source.keys).to match_array(%w(id name)) }
      end
    end
  end

  describe "GET /genre" do
    describe "GET /api/v1/genre" do 
      let(:parsed_response_body) { JSON.parse(response.body) }
      let(:genre_sources) { parsed_response_body }

      before do 
        get '/api/v1/genre'
      end

      it "returns http success " do 
        expect(response).to have_http_status(:success)
      end

      it "JSON body response contains expected recipe attributes" do 
        genre_sources.each { |source| expect(source.keys).to match_array(%w(id name)) }
      end
    end
  end
end
