class CreateJoinTableDeveloperProject < ActiveRecord::Migration[7.0]
  def change
    create_join_table :developers, :projects
  end
end
