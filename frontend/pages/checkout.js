import React from "react";
import { useState, useEffect } from "react";

const checkout = ({ cart }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    console.log(cart);
    let myTotal = 0;
    for (let i = 0; i < cart.length; i++) {
      myTotal += cart[i][1];
    }
    setSubtotal(myTotal);
  }, []);
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <section className="text-black body-font relative">
        <div className="container px-5  mx-auto">
          <div className="flex flex-col w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
              Checkout
            </h1>
            <h2 className="text-2xl font-bold">Cart</h2>
            <div className="cart">
              {cart.length > 0
                ? `Your cart details are as follows : `
                : `Your cart is empty!`}
            </div>
            <ul className="list-decimal px-4">
              {cart.map((item) => {
                return (
                  <li className="">
                    {item[0]} with a price of Rs {item[1]}.
                  </li>
                );
              })}
            </ul>
            <div className="font-bold">
              {cart.length > 0 && `Subtotal : Rs ${subtotal}`}
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 ">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-black"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={form.name}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={form.email}
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    htmlFor="phone"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Phone
                  </label>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    onChange={handleChange}
                    value={form.phone}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="address"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Address
                  </label>
                  <textarea
                    id="address"
                    name="address"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    defaultValue={""}
                    onChange={handleChange}
                    value={form.address}
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Pay now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default checkout;
