class ReviewsController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  # GET /reviews
  def index
    @reviews = Review.all

    render json: @reviews
  end

  # POST /reviews
  def create
    @review = Review.new(review_params)

    if @review.save
      render json: @review, status: :created, location: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end


  private
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def review_params
      params.require(:review).permit(:content, :rate, :book_id, :user_id)
    end

end
