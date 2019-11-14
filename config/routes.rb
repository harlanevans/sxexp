Rails.application.routes.draw do
  namespace :api do
    post "/contact", to: 'contacts#contact'
  end
end
