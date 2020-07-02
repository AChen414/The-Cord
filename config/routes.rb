Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :servers, only: [:create, :destroy, :show, :index, :update]
    resources :channels, only: [:create, :destroy, :show, :index, :update]
    resources :messages, only: [:create, :destroy, :index, :update]
  end

  root "static_pages#root"
end
