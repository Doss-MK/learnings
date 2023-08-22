class Manager < ApplicationRecord
    has_one :manger_history
    has_many :developer

    has_one :image, as: :imageable
end
