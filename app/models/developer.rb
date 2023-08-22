class Developer < ApplicationRecord
  belongs_to :manager
  has_one :manager_history, through: :manager
  has_one :parent

  has_and_belongs_to_many :projects # many-to-many association using third model using join table

  # has_many :project_submission
  # has_many :projects, through: :project_submission # many-to-many association using third model without join

  has_one :image, as: :imageable
end
