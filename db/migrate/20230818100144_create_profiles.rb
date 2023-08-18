class CreateProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :profiles do |t|
      t.string :avatar
      t.text :avatar_url

      t.timestamps
    end
  end
end
