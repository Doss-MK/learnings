class CreateDevelopers < ActiveRecord::Migration[7.0]
  def change
    create_table :developers do |t|
      t.string :name
      t.string :email
      t.references :manager, null: false, foreign_key: true

      t.timestamps
    end
  end
end
