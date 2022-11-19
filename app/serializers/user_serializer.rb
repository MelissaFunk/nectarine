class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password, :image, :groceries

  def groceries
    self.object.recipes.map(&:ingredients).join(", ").split(", ").uniq
  end
end
