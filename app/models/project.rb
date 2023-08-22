class Project < ApplicationRecord
    has_and_belongs_to_many :developers

    # has_many :project_submission
    # has_many :developers, through: :project_submission
  end
