class ContactsMailer < ApplicationMailer

  # using SendGrid's Ruby Library
# https://github.com/sendgrid/sendgrid-ruby
require 'sendgrid-ruby'
include SendGrid

def contact_user(name, email, phone, questions)
  # This is the email that the user inputs
  from = Email.new(email: email)
  # This will be email it goes to --> us
  # to = Email.new(email: 'van@genhu.org')
  to = Email.new(email: 'harlanevans5@gmail.com')
  subject = "Someone has contacted you from the Southern Cross site!"
  # Body of message
  msgBody = "Name: #{name} \n Email: #{email} \n Phone: #{phone} \n Questions: #{questions}"
  content = Content.new(type: 'text/plain', value: msgBody)
    mail = Mail.new(from, subject, to, content)
    
    sg = SendGrid::API.new(api_key: ENV['SENDGRID_API_KEY'])
    response = sg.client.mail._('send').post(request_body: mail.to_json)
    puts response.status_code
    puts response.body
    puts response.headers
  end
end
