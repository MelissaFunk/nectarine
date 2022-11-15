class AddDateToRecipes < ActiveRecord::Migration[7.0]
  def change
    add_column :recipes, :date, :string
  end
end
