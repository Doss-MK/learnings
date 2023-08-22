class CreateMangerHistories < ActiveRecord::Migration[7.0]
  def change
    create_table :manger_histories do |t|
      t.string :exp
      t.references :manager, null: false, foreign_key: true

      t.timestamps
    end
  end
end
