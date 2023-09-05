Rails.application.routes.draw do
  namespace :fw do
    namespace :react do
      get "*path", to: "home#index"
    end
  end
  namespace :aws do
    namespace :s3 do
      resources :profile, controller: 'home'
    end
  end
  namespace :multiple do
    namespace :db do
      get 'secondary/index'
      get 'primary/index'
    end
  end
  
  namespace :i18n do
    get 'home/index'
  end

  namespace :sso do
    namespace :okta do
      get   "saml/init"
      post  "saml/consume"
      get   'saml/logout'
      get   "home/index"
    end
  end

  namespace :api do 
    namespace :v1 do 
      resources :users

      post 'stripe/generate_connect_url'
      post 'stripe/create_customer'
      get 'stripe/get_connected_accounts'
      get 'stripe/success'
      get 'stripe/refresh'
      get 'stripe/get_all_customers'
      post 'stripe/amount_transfer'
    end
  end

  root 'home#index'
  
end
