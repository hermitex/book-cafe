class BookExchangesController < ApplicationController
  before_action :set_book_exchange, only: [:show, :update, :destroy]
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  # GET /book_exchanges
  def index
    @book_exchanges = BookExchange.where(sender_id: session[:user_id]).or(BookExchange.where(receiver_id: session[:user_id]))
    render json: @book_exchanges
  end

  # GET /book_exchanges/1
  def show
    render json: @book_exchange
  end

  # POST /book_exchanges
  def create
    if is_process_exchange_success?
      @book_exchange = BookExchange.new(book_exchange_params)
      if @book_exchange.save!
        render json: {
          "book_to_receive": book_to_receive,
          "book_to_send": book_to_send,
          "receiver": receiver,
          "sender": sender, except: [:created_at, :updated_at]
        }, status: :created, location: @book_exchange
      else
        render json: @book_exchange.errors, status: :unprocessable_entity
      end
    else
      render json: {error: "This book is unavailable for exchange"}, status: :not_found
    end
  end

  # PATCH/PUT /book_exchanges/1
  def update
    @book_exchange.update!(book_exchange_params)
    if params[:status] == 'returned'
      @book = Book.find_by(id: params[:id])
      @book.update!(is_available: true)
    end
    render json: @book_exchange
  end

  # DELETE /book_exchanges/1
  def destroy
    if params[:status] == 'pending'
      @book_exchange.destroy
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_exchange
      @book_exchange = BookExchange.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def book_exchange_params
      params.permit(:id, :sender_id, :receiver_id, :book_received_id, :book_sent_id, :return_date, :status)
    end

    def render_invalid_record(invalid)
      render json: {errors: invalid.record.errors}, status: :unprocessable_entity
    end

    def is_process_exchange_success?
       if book_to_receive.is_available && book_to_send.is_available
        book_to_send.update!(is_exchanged: true, is_available: false)
        book_to_receive.update!(is_exchanged: true, is_available: false)
      end
    end

    def book_to_receive
      Book.find_by(id: book_exchange_params[:book_received_id])
    end


    def book_to_send
      Book.find_by(id: book_exchange_params[:book_sent_id])
    end


    def receiver
      Book.find_by(id: book_exchange_params[:receiver_id])
    end

    def sender
      Book.find_by(id: book_exchange_params[:sender_id])
    end
end
