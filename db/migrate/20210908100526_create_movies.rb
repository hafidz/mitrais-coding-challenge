class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :name
      t.float :rating
      t.text :overview
      t.string :poster_path
      t.string :popularity
      t.date :first_air_date
      t.string :backdrop_path
      t.string :media_type
      t.boolean :adult
      t.date :release_date

      t.timestamps
    end
  end
end
