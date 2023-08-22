class ProjectSubmission < ApplicationRecord
  belongs_to :developer
  belongs_to :project
end
