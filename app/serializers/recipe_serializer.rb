class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :image, :link, :cuisine, :ingredients, :date, :is_favorite, :has_made
end