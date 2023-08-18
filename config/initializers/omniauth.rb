Rails.application.config.middleware.use OmniAuth::Builder do
    provider :google_oauth2, '512221439572-40egt0o0oj3j3regmsd2ip9uqkaglck0.apps.googleusercontent.com', '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', skip_jwt: true
end