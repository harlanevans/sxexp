Rails.application.routes.draw do
  namespace :api do
    post "/contact", to: 'contacts#contact'
  end
  namespace :api do
    resources :events
  end

  get '*other', to: 'static#index'
end
