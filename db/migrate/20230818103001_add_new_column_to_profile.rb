class AddNewColumnToProfile < ActiveRecord::Migration[7.0]
  def change
    add_column :profiles, :file_name, :text
  end
end
