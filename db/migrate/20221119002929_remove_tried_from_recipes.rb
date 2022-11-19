class RemoveTriedFromRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :has_tried, :boolean
  end
end
