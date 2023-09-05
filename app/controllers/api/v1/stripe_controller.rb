class Api::V1::StripeController < ApplicationController
    def generate_connect_url
        account = Stripe::Account.create({
            country: 'US',
            type: 'express',
            capabilities: {
              card_payments: { requested: true },
              transfers: { requested: true },
            },
            business_type: 'individual',
            email: params[:email],
            business_profile: { name: params[:name] }
        });

        link = Stripe::AccountLink.create({
            account: account.id,
            refresh_url: 'http://locahost:3000/api/v1/stripe/refresh',
            return_url: 'http://locahost:3000/api/v1/stripe/success',
            type: 'account_onboarding',
        });

        render json: { message: 'Connected Account Created', data: link }, status: :created
    end

    def get_connected_accounts
        accounts = Stripe::Account.list({limit: 3})
        render json: { accounts: accounts }, status: :ok
    end

    def create_customer
        customer = Stripe::Customer.create({
            description: "Customer User #{params[:email]}",
            email: params[:email],
            name: params[:name]
        })
  
        card_detail = Stripe::Customer.create_source(
            customer.id,
            {source: params[:source_token]},
        )

        render json: { message: 'Customer Created', data: customer }, status: :created
    end

    def get_all_customers
        customers = Stripe::Customer.list({limit: 3})
        render json: { customers: customers }, status: :ok
    end

    def amount_transfer
        charge = Stripe::Charge.create({
            amount: 2000,
            currency: 'usd',
            source: params[:source_token],
            description: "Create Charge at #{Date.today}",
            customer: params[:customer_id]
        })

        transfer = Stripe::Transfer.create({
            amount: 2000,
            currency: 'usd',
            destination: params[:account_token],
            source_transaction: charge.id
        });

        render json: { message: 'Payment transfered', data: transfer }, status: :created
    end

    def success
        render json: { params: params }, status: :ok
    end

    def refresh
        render json: { params: params }, status: :ok
    end
end
