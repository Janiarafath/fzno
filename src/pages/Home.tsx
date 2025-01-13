import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-gray-900 to-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">
            Make Work Flow
          </h1>
          <p className="text-xl mb-8 max-w-2xl">
            FZNO's comprehensive suite of enterprise software solutions helps you focus on what matters most - your business.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/products"
              className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-100"
            >
              Explore Products
            </Link>
            <Link
              to="/signin"
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-black"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Trusted by businesses worldwide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">75M+</div>
              <p className="text-gray-600">Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">150+</div>
              <p className="text-gray-600">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-black mb-2">50+</div>
              <p className="text-gray-600">Products</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}