# frozen_string_literal: true
Rails.application.routes.draw do
  # get 'root#index'
  root 'root#index'
  # get "/greetings", to: "greetings#index"
  resources :greetings
  get '#path', to: 'root#index'
end



