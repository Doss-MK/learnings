class CreateParents < ActiveRecord::Migration[7.0]
  def change
    create_table :parents do |t|
      t.string :fname
      t.string :mname
      t.references :developer, null: false, foreign_key: true

      t.timestamps
    end
  end
end
