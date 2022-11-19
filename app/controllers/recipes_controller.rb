class RecipesController < ApplicationController

  def index
    render json: Recipe.all, status: :ok
  end

  def show
    render json: Recipe.find(params[:id]), status: :ok
  end

  def create
    render json: Recipe.create(recipe_params), status: :created
  end

  def update
    recipe = Recipe.find_by(id: params[:id])
    recipe.update(recipe_params)
    render json: recipe, status: :accepted
  end

  def destroy
    recipe = Recipe.find_by(id: params[:id])
    recipe.destroy
    head :no_content
  end

  private

  def recipe_params
    params.permit(:user_id, :name, :image, :link, :cuisine, :ingredients, :date, :cook_time, :is_favorite, :has_made)
  end

end
