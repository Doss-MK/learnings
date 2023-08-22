class Admin < ApplicationRecord
    # self.inheritance_column = :is_super_admin
    self.inheritance_column = :type
end
