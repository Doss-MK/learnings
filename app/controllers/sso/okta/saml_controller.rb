require 'nokogiri'
class Sso::Okta::SamlController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:consume]
    def init
        request = OneLogin::RubySaml::Authrequest.new
        redirect_to(request.create(saml_settings), allow_other_host: true)
    end

    def consume
        response = OneLogin::RubySaml::Response.new(params[:SAMLResponse], :settings => saml_settings)

        puts response.document.to_s
        response_xml = Nokogiri::XML(response.document.to_s)
        puts response_xml.to_xml

        doc = Nokogiri::XML("#{response.document.to_s}")

        if doc.errors.empty?
            puts 'XML is valid.'
        else
            puts 'XML is not valid. Errors:'
            doc.errors.each do |error|
                puts error
            end
        end

        if doc.errors.empty?
            session[:userid] = response.name_id
            p response
            redirect_to sso_okta_home_index_url
        else
            authorize_failure
        end
    end

    def logout
        request = OneLogin::RubySaml::Logoutrequest.new
        reset_session
        redirect_to root_url
    end

    private

    def saml_settings
        settings = OneLogin::RubySaml::Settings.new
      
        settings.assertion_consumer_service_url = "http://localhost:3000/okta/saml/consume"
        settings.sp_entity_id                   = "http://localhost:3000/okta/saml/metadata"
        settings.idp_sso_service_url            = "https://dev-91052150.okta.com/app/dev-91052150_rorsamlssoapp_1/exkar9gzj6QfxBWhG5d7/sso/saml"
        settings.idp_cert_fingerprint           = '26573c20c31a5ea585eb0a1bdce8aa3f01daa25a'
        settings.name_identifier_format         = "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
        settings.authn_context = "urn:oasis:names:tc:SAML:2.0:ac:classes:PasswordProtectedTransport"
        settings.attributes_index = 5
        settings.attribute_consuming_service.configure do
            service_name "Service"
            service_index 5
            add_attribute name: "Name", name_format: "Name Format", friendly_name: "Friendly Name"
        end
        settings
    end

    def authorize_failure
        render plain: "Authorization failed"
    end
end
