class AddTriedToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :need_try, :boolean
  end
end
