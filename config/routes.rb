Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get 'crowdlies/:id', to: 'crowdlies#index', as: 'api_crowdlies'
    end
  end

  devise_for :users
  root "statics#index"
  resources :users, only: [:index]
  resources :crowdlies

end
