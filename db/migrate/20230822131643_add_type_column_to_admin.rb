class AddTypeColumnToAdmin < ActiveRecord::Migration[7.0]
  def change
    add_column :admins, :type, :string, index: true
  end
end
