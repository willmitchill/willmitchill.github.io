
require 'pry'



get '/' do
  erb :index
end

get '/contact' do
  erb :contact
end


post '/contact' do
  Pony.mail to: 'willmitchill@gmail.com',
            from: params[:email],
            subject: 'Website e-mail from: ' + params[:full_name],
            body: params[:comments]
  redirect '/'
end

######### LOGIN / LOGOUT ###########
