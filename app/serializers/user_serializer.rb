class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :image, :groceries

  def groceries
    no_date = self.object.recipes.select { |r| r.date != nil }
    no_date.map(&:ingredients).join(", ").split(", ").uniq.sort
  end
end
