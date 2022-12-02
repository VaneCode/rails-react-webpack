# frozen_string_literal: true
Rails.application.routes.draw do
  # get 'greetings#index'
  get "/greetings", to: "greetings#index"
end



