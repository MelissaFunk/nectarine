class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :name, :image, :link, :cuisine, :ingredients, :date, :cook_time, :is_favorite, :has_made
end