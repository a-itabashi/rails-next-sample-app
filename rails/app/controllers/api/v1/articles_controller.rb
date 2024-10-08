class Api::V1::ArticlesController < ApplicationController
  include Pagination

  def index
    articles = Article.published.order(created_at: :desc).page(params[:page] || 1).per(10).preload(:user)
    render json: articles, meta: pagination(articles), adapter: :json
  end

  def show
    article = Article.published.find(params[:id])
    render json: article
  end
end
