Rails.configuration.stripe = {
    :publishable_key => 'pk_test_51Nl3RlFsXexGtqBDyavZTVYVeLg7natNKCpUoS05R8bEUDMAF3fbLbIJ8ROekYV5XdfdGLdAd7zoAT7XNVWdNVoO003DXoAznz',
    :secret_key      => 'sk_test_51Nl3RlFsXexGtqBDH0G2En4kfsyUcQvyhnraXP1PAtccgMjqWlDDwwaURrgkrittWwxzz7X3bj3xdXk3kVV1cZC700DorDY085'
}
  
Stripe.api_key = Rails.configuration.stripe[:secret_key]