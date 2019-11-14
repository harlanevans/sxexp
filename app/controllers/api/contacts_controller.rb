class Api::ContactsController < ApplicationController
  def contact 
    ContactsMailer.contact_user(params[:contact][:name], params[:contact][:email], params[:contact][:phone], params[:contact][:questions] ).deliver
  end

  private
    def contact_params 
      params.require(:contact).permit(:name, :email, :phone, :questions)
    end
end
