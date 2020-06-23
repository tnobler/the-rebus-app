Rails.application.routes.draw do
  devise_for :users

  authenticated :user do
    root "pages#my_rebus_app", as: :authenticated_root
  end

  root 'pages#home'
end