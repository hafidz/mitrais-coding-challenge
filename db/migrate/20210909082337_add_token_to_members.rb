class AddTokenToMembers < ActiveRecord::Migration[6.0]
  def change
    add_column :members, :token, :string
  end
end
