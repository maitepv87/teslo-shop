import Link from "next/link";
import { QuantitySelector, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Image from "next/image";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function OrderReviewPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Review Order" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Cart Items */}
          <div className="flex flex-col mt-5">
            <span className="text-xl">Adjust items</span>
            <Link href="/cart" className="underline mb-5">
              Edit cart
            </Link>

            {productsInCart.map((product) => (
              <div key={product.slug} className="flex mb-5">
                <Image
                  src={`/products/${product.images[0]}`}
                  width={100}
                  height={100}
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                  alt={product.title}
                  className="mr-5 rounded"
                />

                <div>
                  <p>{product.title}</p>
                  <p>${product.price} x 3</p>
                  <p className="font-bold">Subtotal: ${product.price * 3}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Summary */}
          <div className="bg-white rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Shipping Address</h2>
            <div className="mb-10">
              <p className="text-xl">Maite Perez vento</p>
              <p>123 Evergreen Avenue</p>
              <p>Downtown District</p>
              <p>Cuauhtémoc Borough</p>
              <p>Mexico City</p>
              <p>ZIP 123123</p>
              <p>+52 123 123 123</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

            <h2 className="text-2xl mb-2">Order Summary</h2>

            <div className="grid grid-cols-2">
              <span>Items</span>
              <span className="text-right">3 products</span>

              <span>Subtotal</span>
              <span className="text-right">$100</span>

              <span>Tax (15%)</span>
              <span className="text-right">$15</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$115</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <p className="mb-5 text-xs">
                By clicking “Place Order”, you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                .
              </p>

              <Link
                className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded transition-all flex justify-center"
                href="/orders/123"
              >
                Place Order
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
