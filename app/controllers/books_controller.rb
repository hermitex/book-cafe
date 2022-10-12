class BooksController < ApplicationController
  before_action :set_book, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordNotFound, with: :record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  # GET /books
  def index
    @books = Book.all
    render json: @books, status: :ok
  end

  # GET /books/1
  def show
      render json: @book, status: :ok
  end

  # POST /books
  def create
    @book = Book.new(book_params)

    if @book.save
      render json: @book, status: :created, location: @book
    else
      render json: @book.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /books/1
  def update
    @book.update!(book_params)
    render json: @book, include: ['user', 'reviews'], status: :accepted
  end

  # DELETE /books/1
  def destroy
    @book.destroy
    head :no_content
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_params
      params.permit(:title, :category, :cover_image, :author, :condition, :is_available, :is_exchanged, :user_id)
    end

    def record_not_found
      render json: {error: "Book not found"}, status: :not_found
    end

    def render_invalid_record(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

end
