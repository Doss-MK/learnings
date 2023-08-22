class CreateAdmins < ActiveRecord::Migration[7.0]
  def change
    create_table :admins do |t|
      t.string :name
      t.text :email
      t.boolean :is_super_admin

      t.timestamps
    end
  end
end
