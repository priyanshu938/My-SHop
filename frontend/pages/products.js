import React from "react";

const Products = (props) => {
  return (
    <div className="container mx-auto px-4">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Product List - My Shop
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded" />
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
              Buy from the list of our products
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item) => (
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={`http://localhost:1337${
                      item.attributes.image.data &&
                      item.attributes.image.data.attributes.url
                    }`}
                    alt="content"
                  />
                  <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                    {item.attributes.category}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {item.attributes.title}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {item.attributes.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  const API_KEY =
    "d0a8c10d69ccd49bfdc3754c995d31226a4fd3920c674666f98127df092bffe65de2620a70a616fc16546e33d69ea72c64176897d43513e3855371ef53872b1bac1b2d0f596e0e4e04fe42028ddb68afede44ce4186c86f7cb5304905d3e488e129c1c8e8ccfa26c570a846e6683e310b5ca1b6f965b058c1a44f8f271cb899c";
  const URL = "http://127.0.0.1:1337/api/products?populate=*";

  // fetch data from URL with correct scheme and headers
  const res = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  });

  const products = await res.json();
  console.log(products.data[0].attributes.image.data.attributes.url);

  return { props: { products: products } };
}

export default Products;
