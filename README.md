# README

# About

This is the backend API for the Trio app which is developed on ruby version 2.5.1 and rails 6.0.3.6 with ActionCable(6.0.3.6) for 
socket related quries and functions. It is a basic web chatroom app which allows users to have conversation among themselves in *realtime* with the 
help of ActionCable. Database is managed by Mongodb Atlas Cloud. ***This is the most rare stack used for rails api development, that's the reason why i devloped it to know why its isn't used that much like the others***. Hope this project will help you out in some where.


#### Local Deployment Instructions :
```
git clone https://github.com/Bheemesh1706/Trio-Backend.git
cd Trio-Backend
bundle update
bundle install
rails s -p 3001

```

#### Database Setup Instructions :

* If you are fine with Mongodb Atlas just change the uri in config/mongodb.yml in both production and development sections.
  * [Click here to know how to create your own uri for Atlas](https://docs.mongodb.com/mongoid/current/tutorials/getting-started-rails/#use-mongodb-atlas)
     
* If you want to run Mongodb Locally 
  * Run this command to set up the config file for the localhost ```rails g mongoid:config```
  * [Click here to learn how to install mongodb locally](https://docs.mongodb.com/manual/installation)
  * **Don't forget to start the mongodb local server every time when you want to start the app** (Don't be a dumb like me)

#### Cors Setup Instructins

Change the origins field value to ```*``` in config/initializers/cors.rb for local deployment.
        



