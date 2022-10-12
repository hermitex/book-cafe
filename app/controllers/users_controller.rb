class UsersController < ApplicationController
  before_action :set_user, only: [ :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record
  rescue_from ActionController::ParameterMissing, with: :empty_body

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show
    @user = User.find_by(id: session[:user_id])
    if @user
      render json: @user, status: :ok
    else
      render json: {error: "Unauthorized"}, status: :unauthorized
    end

  end

  # POST /users
  def create
    @user = User.create!(user_params)
    session[:user_id] = @user.id
    render json: @user, status: :created, location: @user
  end

  # PATCH/PUT /users/1
  def update
    if @user.update!(user_params)
      render json: @user
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def user_params
      params.permit(:username, :password, :email, :phone, :location, :avatar_url, :plan)
    end

    def record_not_found
      render json: {error: "Unauthorized"}, status: :unauthorized
    end

    def render_invalid_record(invalid)
      render json:{errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def empty_body
      render json: {error: "Empty body or wrong values"}, status: :unprocessable_entity
    end
end
