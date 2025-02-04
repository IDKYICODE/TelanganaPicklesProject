import React from 'react';
import ProductCard from './ProductCard';  

const FeaturedProducts = () => {
  
  const products = [
    {
      image: "src\\assets\\pick1.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick2.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick3.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick4.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick5.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick6.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick7.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    },
    {
      image: "src\\assets\\pick6.png",
      title: "Mango Avakaya",
      rating: 2,
      reviews: 24,
      discount: 29,
      currentPrice: 180.00,
      originalPrice: 220.00,
      unit: "250gms"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mb-15">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4">Featured Products</h1>
        <p className="text-gray-600 mb-8">
          A highly efficient slip-ring scanner for today's diagnostic requirements.
        </p>
      </div>
      
      <div className="flex justify-end mb-4">
        <a href="/pickleslist" className="text-red-800 hover:underline font-bold">Browse all pickles</a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            rating={product.rating}
            reviews={product.reviews}
            discount={product.discount}
            currentPrice={product.currentPrice}
            originalPrice={product.originalPrice}
            unit={product.unit}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;