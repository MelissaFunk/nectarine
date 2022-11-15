class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :image, :link, :category, :ingredients, :date
end
