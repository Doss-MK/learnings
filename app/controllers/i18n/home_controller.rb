class I18n::HomeController < ApplicationController
  def index
    browser_locales = request.env['HTTP_ACCEPT_LANGUAGE']&.scan(/^[a-z]{2}/)
    preferred_locale = (browser_locales & I18n.available_locales.map(&:to_s)).first
    I18n.default_locale = preferred_locale || I18n.default_locale
  end
end
