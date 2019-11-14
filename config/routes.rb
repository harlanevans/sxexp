Rails.application.routes.draw do
  namespace :api do
    post "/contact", to: 'contacts#contact'
  end
  get '*other', to: 'static#index'
end
