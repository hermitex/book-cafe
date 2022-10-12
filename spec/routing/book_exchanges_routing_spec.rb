require "rails_helper"

RSpec.describe BookExchangesController, type: :routing do
  describe "routing" do
    it "routes to #index" do
      expect(get: "/book_exchanges").to route_to("book_exchanges#index")
    end

    it "routes to #show" do
      expect(get: "/book_exchanges/1").to route_to("book_exchanges#show", id: "1")
    end


    it "routes to #create" do
      expect(post: "/book_exchanges").to route_to("book_exchanges#create")
    end

    it "routes to #update via PUT" do
      expect(put: "/book_exchanges/1").to route_to("book_exchanges#update", id: "1")
    end

    it "routes to #update via PATCH" do
      expect(patch: "/book_exchanges/1").to route_to("book_exchanges#update", id: "1")
    end

    it "routes to #destroy" do
      expect(delete: "/book_exchanges/1").to route_to("book_exchanges#destroy", id: "1")
    end
  end
end
