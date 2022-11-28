class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :image, :groceries

  def groceries
    non_made = self.object.recipes.select { |r| r.has_made === false && r.date === nil }
    non_made.map(&:ingredients).join(", ").split(", ").uniq.sort
  end
end
