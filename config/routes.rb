Rails.application.routes.draw do
  resources :nutritionists
  resources :clinics
  resources :appointments
  resources :works
  get '/clinics/district/:district' => 'clinics#district'
  root 'pages#index'

  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
