import React from 'react';
import { useState } from 'react';

const Offers = () => {
  const [filter, setFilter] = useState('all');
  const [copiedCode, setCopiedCode] = useState('');

  const banners = [
    {
      id: 1,
      title: '₹200 OFF',
      subtitle: 'On orders above ₹499',
      code: 'SAVE200',
      bg: 'bg-gradient-to-br from-violet-600 via-purple-600 to-blue-600',
      pattern: 'bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent)]',
    },
    {
      id: 2,
      title: 'BOGO PIZZAS',
      subtitle: 'Buy 1 Get 1 Free',
      code: 'BOGO50',
      bg: 'bg-gradient-to-br from-emerald-500 via-teal-600 to-cyan-600',
      pattern: 'bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent)]',
    },
    {
      id: 3,
      title: 'WEEKEND SPECIAL',
      subtitle: 'Extra 25% off on all items',
      code: 'WEEKEND25',
      bg: 'bg-gradient-to-br from-orange-500 via-red-500 to-pink-600',
      pattern: 'bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]',
    },
  ];

  const coupons = [
    { 
      code: 'FIRST150', 
      desc: '₹150 off on your first order', 
      min: '₹399',
      category: 'First Order',
      color: 'from-blue-500 to-purple-600'
    },
    { 
      code: 'LUNCH20', 
      desc: '20% off between 12-3 PM', 
      min: '₹199',
      category: 'Lunch Special',
      color: 'from-green-500 to-teal-600'
    },
    { 
      code: 'FLASH40', 
      desc: '40% off - Limited time offer', 
      min: '₹299',
      category: 'Flash Sale',
      color: 'from-red-500 to-pink-600'
    },
    { 
      code: 'BANK15', 
      desc: '15% cashback with Bank cards', 
      min: '₹500',
      category: 'Bank Offer',
      color: 'from-indigo-500 to-blue-600'
    },
  ];

  const restaurantDeals = [
    {
      name: 'Spicy Kitchen',
      img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=300&q=60',
      offer: 'Flat 30% off on all items',
      rating: '4.5',
      deliveryTime: '25-30 mins',
      category: 'Indian'
    },
    {
      name: 'Burger Palace',
      img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=300&q=60',
      offer: 'Buy 2 burgers, get 1 free',
      rating: '4.3',
      deliveryTime: '20-25 mins',
      category: 'American'
    },
    {
      name: 'Sushi Master',
      img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?auto=format&fit=crop&w=300&q=60',
      offer: '50% off on combo meals',
      rating: '4.7',
      deliveryTime: '35-40 mins',
      category: 'Japanese'
    },
    {
      name: 'Pizza Corner',
      img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?auto=format&fit=crop&w=300&q=60',
      offer: 'Free dessert with large pizza',
      rating: '4.4',
      deliveryTime: '30-35 mins',
      category: 'Italian'
    },
  ];

  const filterOptions = [
    { key: 'all', label: 'All Offers', icon: '🎉' },
    { key: 'restaurants', label: 'Restaurants', icon: '🍽️' },
    { key: 'freedelivery', label: 'Free Delivery', icon: '🚚' },
    { key: 'bank', label: 'Bank Offers', icon: '💳' },
    { key: 'firstorder', label: 'First Order', icon: '⭐' },
  ];

  const copy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(''), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md border-b border-white/20 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-black bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Offers & Deals
              </h1>
              <p className="text-slate-600 mt-1">Save more on your favorite meals</p>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-slate-600">Live offers updated</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Filter Pills */}
        <div className="flex space-x-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
          {filterOptions.map((option) => (
            <button
              key={option.key}
              onClick={() => setFilter(option.key)}
              className={`flex items-center space-x-2 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                filter === option.key
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                  : 'bg-white/80 text-slate-700 hover:bg-white hover:shadow-md border border-slate-200/50 hover:scale-105'
              }`}
            >
              <span className="text-lg">{option.icon}</span>
              <span>{option.label}</span>
            </button>
          ))}
        </div>

        {/* Hero Banners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full mr-3"></span>
            Featured Offers
          </h2>
          <div className="flex space-x-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {banners.map((banner) => (
              <div
                key={banner.id}
                className={`flex-shrink-0 w-96 h-48 rounded-3xl p-6 text-white relative overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl snap-start ${banner.bg}`}
              >
                <div className={`absolute inset-0 ${banner.pattern}`}></div>
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black mb-2">{banner.title}</h3>
                    <p className="text-white/90 text-base">{banner.subtitle}</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2">
                      <p className="text-xs font-medium text-white/80">Use Code</p>
                      <p className="font-bold text-lg">{banner.code}</p>
                    </div>
                    <button
                      onClick={() => copy(banner.code)}
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-xl px-4 py-2 transition-all duration-200"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Deals Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-green-500 to-teal-600 rounded-full mr-3"></span>
            Restaurant Offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurantDeals.map((restaurant, index) => (
              <div
                key={restaurant.name}
                className="group bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200 cursor-pointer"
              >
                <div className="relative">
                  <img
                    src={restaurant.img}
                    alt={restaurant.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-medium">
                      {restaurant.category}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4 flex items-center bg-white/95 backdrop-blur-sm rounded-full px-3 py-1">
                    <svg className="w-4 h-4 text-yellow-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-slate-800">{restaurant.rating}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{restaurant.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-green-600 font-semibold text-sm bg-green-50 px-3 py-1 rounded-full">
                      {restaurant.offer}
                    </p>
                    <p className="text-slate-500 text-sm flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {restaurant.deliveryTime}
                    </p>
                  </div>
                  <button className="w-full bg-gradient-to-r from-slate-800 to-slate-700 text-white py-3 rounded-xl font-semibold hover:from-slate-700 hover:to-slate-600 transition-all duration-200 transform hover:scale-105">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Coupon Codes */}
        <div>
          <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
            <span className="w-1 h-8 bg-gradient-to-b from-orange-500 to-red-600 rounded-full mr-3"></span>
            Promo Codes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {coupons.map((coupon, index) => (
              <div
                key={coupon.code}
                className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100 hover:border-slate-200 relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${coupon.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className="p-6 relative">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-black text-slate-800 font-mono">{coupon.code}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full bg-gradient-to-r ${coupon.color} text-white font-medium`}>
                          {coupon.category}
                        </span>
                      </div>
                      <p className="text-slate-600 mb-1">{coupon.desc}</p>
                      <p className="text-slate-500 text-sm">Minimum order: {coupon.min}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => copy(coupon.code)}
                    className={`w-full flex items-center justify-center space-x-2 py-3 rounded-xl font-semibold transition-all duration-200 ${
                      copiedCode === coupon.code
                        ? 'bg-green-500 text-white'
                        : `bg-gradient-to-r ${coupon.color} text-white hover:shadow-lg hover:scale-105`
                    }`}
                  >
                    {copiedCode === coupon.code ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Never Miss a Deal!</h3>
            <p className="text-slate-600 mb-4">New offers added every morning at 9 AM</p>
            <div className="flex items-center justify-center space-x-2 text-sm text-slate-500">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <span>Last updated: Just now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;