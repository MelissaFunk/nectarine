class RemoveNeedTryFromRecipes < ActiveRecord::Migration[7.0]
  def change
    remove_column :recipes, :need_try, :boolean
  end
end
