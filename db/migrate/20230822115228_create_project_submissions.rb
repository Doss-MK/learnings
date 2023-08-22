class CreateProjectSubmissions < ActiveRecord::Migration[7.0]
  def change
    create_table :project_submissions do |t|
      t.date :submission_date
      t.references :developer, null: false, foreign_key: true
      t.references :project, null: false, foreign_key: true

      t.timestamps
    end
  end
end
