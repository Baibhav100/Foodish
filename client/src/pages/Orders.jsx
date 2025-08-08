import React from 'react';
import { useState } from 'react';
import { FiClock, FiMapPin, FiRefreshCw, FiPhone, FiStar, FiPackage, FiTruck, FiCheckCircle, FiShoppingBag } from 'react-icons/fi';

const MyOrders = () => {
  const [tab, setTab] = useState('active');

  const activeOrders = [
    {
      id: 101,
      restaurant: 'Spicy Kitchen',
      items: ['Paneer Tikka', 'Butter Naan (2)', 'Basmati Rice'],
      total: 370,
      eta: 15, // minutes left
      status: 'Preparing', // Confirmed | Preparing | Out for delivery
      image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=100&h=100&fit=crop&crop=center',
      orderTime: '12:45 PM'
    },
    {
      id: 102,
      restaurant: 'Pizza Corner',
      items: ['Margherita Pizza', 'Garlic Bread'],
      total: 450,
      eta: 25,
      status: 'Out for delivery',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=100&h=100&fit=crop&crop=center',
      orderTime: '1:15 PM'
    },
  ];

  const pastOrders = [
    {
      id: 99,
      restaurant: 'Burger Palace',
      date: '2024-08-01',
      total: 220,
      items: ['Cheese Burger', 'Fries', 'Cola'],
      rated: false,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop&crop=center',
    },
    {
      id: 98,
      restaurant: 'Sushi House',
      date: '2024-07-30',
      total: 890,
      items: ['California Roll', 'Salmon Sashimi', 'Miso Soup'],
      rated: true,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=100&h=100&fit=crop&crop=center',
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed':
        return <FiCheckCircle className="text-blue-500" />;
      case 'Preparing':
        return <FiPackage className="text-orange-500" />;
      case 'Out for delivery':
        return <FiTruck className="text-green-500" />;
      default:
        return <FiClock className="text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Preparing':
        return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'Out for delivery':
        return 'text-green-600 bg-green-50 border-green-200';
      default:
        return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">My Orders</h1>
          <p className="text-gray-600">Track your current orders and browse your order history</p>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-sm p-2 mb-6 inline-flex">
          {[
            { key: 'active', label: 'Active Orders', count: activeOrders.length },
            { key: 'past', label: 'Order History', count: pastOrders.length }
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${
                tab === t.key
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg transform scale-105'
                  : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
              }`}
            >
              <span>{t.label}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${
                tab === t.key ? 'bg-white/20' : 'bg-gray-200'
              }`}>
                {t.count}
              </span>
            </button>
          ))}
        </div>

        {/* Active Orders */}
        {tab === 'active' && (
          <div className="space-y-6">
            {activeOrders.map((order, index) => (
              <div 
                key={order.id} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100">
                        <img 
                          src={order.image} 
                          alt={order.restaurant}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{order.restaurant}</h3>
                        <p className="text-sm text-gray-500">Ordered at {order.orderTime}</p>
                        <p className="text-sm text-gray-600 mt-1">Order #{order.id}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-gray-800">₹{order.total}</p>
                      <p className="text-sm text-gray-500">{order.items.length} items</p>
                    </div>
                  </div>

                  {/* Items */}
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {order.items.join(' • ')}
                    </p>
                  </div>

                  {/* Status */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`flex items-center space-x-2 px-4 py-2 rounded-full border ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="text-sm font-medium">{order.status}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <FiClock className="text-orange-500" />
                      <span className="text-sm font-medium">{order.eta} min remaining</span>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-xs text-gray-500 mb-2">
                      <span>Confirmed</span>
                      <span>Preparing</span>
                      <span>Out for delivery</span>
                      <span>Delivered</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full transition-all duration-500 ${
                        order.status === 'Confirmed' ? 'w-1/4 bg-blue-500' :
                        order.status === 'Preparing' ? 'w-2/4 bg-orange-500' :
                        order.status === 'Out for delivery' ? 'w-3/4 bg-green-500' : 'w-full bg-green-500'
                      }`}></div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105">
                      <FiMapPin size={16} />
                      <span>Track Live</span>
                    </button>
                    <button className="flex-1 border-2 border-gray-200 text-gray-700 px-4 py-3 rounded-xl font-medium hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 flex items-center justify-center space-x-2">
                      <FiPhone size={16} />
                      <span>Call Driver</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {activeOrders.length === 0 && <Empty type="active" />}
          </div>
        )}

        {/* Past Orders */}
        {tab === 'past' && (
          <div className="space-y-4">
            {pastOrders.map((order, index) => (
              <div 
                key={order.id} 
                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-100">
                        <img 
                          src={order.image} 
                          alt={order.restaurant}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800">{order.restaurant}</h3>
                        <p className="text-sm text-gray-500">{order.date}</p>
                        {order.rated && order.rating && (
                          <div className="flex items-center space-x-1 mt-1">
                            <FiStar className="text-yellow-400 fill-current" size={14} />
                            <span className="text-sm text-gray-600">{order.rating}</span>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-xl font-bold text-gray-800">₹{order.total}</p>
                      <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                        Delivered
                      </span>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 mb-4">
                    <p className="text-sm text-gray-700">
                      {order.items.join(' • ')}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex items-center space-x-2 border-2 border-orange-200 text-orange-600 px-4 py-2 rounded-xl font-medium hover:bg-orange-50 transition-all duration-300 flex-1 justify-center">
                      <FiRefreshCw size={16} />
                      <span>Reorder</span>
                    </button>
                    {!order.rated && (
                      <button className="flex items-center space-x-2 border-2 border-gray-200 text-gray-700 px-4 py-2 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 flex-1 justify-center">
                        <FiStar size={16} />
                        <span>Rate Order</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
            {pastOrders.length === 0 && <Empty type="past" />}
          </div>
        )}
      </div>
    </div>
  );
};

const Empty = ({ type }) => (
  <div className="text-center py-16">
    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center">
      <FiShoppingBag size={48} className="text-orange-400" />
    </div>
    <h3 className="text-xl font-semibold text-gray-700 mb-2">
      {type === 'active' ? 'No Active Orders' : 'No Order History'}
    </h3>
    <p className="text-gray-500 mb-6 max-w-sm mx-auto">
      {type === 'active' 
        ? "You don't have any active orders right now. Time to treat yourself!" 
        : "You haven't placed any orders yet. Discover amazing food near you!"
      }
    </p>
    <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-xl font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
      Explore Restaurants
    </button>
  </div>
);

export default MyOrders;