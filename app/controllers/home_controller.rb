class HomeController < ApplicationController
  def index
    flash.now[:notice] = {
      title: "Successfully Sign Up",
      body: "Welcome to our application"
    }
  end
end
