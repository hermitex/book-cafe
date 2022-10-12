class RatingsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record
  rescue_from ActionController::ParameterMissing, with: :empty_body

  # GET /ratings
  def index
    @ratings = Rating.all

    render json: @ratings
  end

  # POST /ratings
  def create
    @rating = Rating.new(rating_params)

    if @rating.save!
      render json: @rating, status: :created, location: @rating
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def rating_params
      params.require(:rating).permit(:rate, :user_id)
    end

    def render_invalid_record(invalid)
      render json: @user.errors, status: :unprocessable_entity
    end

    def empty_body
      render json: {error: "Empty body or wrong values"}, status: :unprocessable_entity
    end
end
