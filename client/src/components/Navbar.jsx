import React, { useState } from 'react';
import { Search, MapPin, User, ShoppingCart, Menu, X, ChevronDown, HelpCircle, Gift } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [isLocationOpen, setIsLocationOpen] = useState(false);
  const [cartItems] = useState(3); // Sample cart item count
  const [location, setLocation] = useState('Select location');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLocation = () => {
    setIsLocationOpen(!isLocationOpen);
  };

  const handleDetectLocation = () => {
    // In a real app, this would use geolocation API
    setLocation('Bangalore, Karnataka');
    setIsLocationOpen(false);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Location */}
          <div className="flex items-center space-x-4">
            {/* Logo */}
            <div 
              className="text-2xl font-bold text-red-500 hover:text-red-600 cursor-pointer"
            // Reloads home page
            >
              <a href="/">Foodish</a>
            </div>
            
            {/* Location Selector */}
            <div className="relative hidden md:block">
              <button 
                onClick={toggleLocation}
                className="flex items-center space-x-1 text-gray-700 hover:text-red-500 px-3 py-1 rounded-md hover:bg-gray-50 transition-colors duration-200"
              >
                <MapPin className="h-4 w-4" />
                <span className="font-medium">{location}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLocationOpen ? 'transform rotate-180' : ''}`} />
              </button>
              
              {isLocationOpen && (
                <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">
                    <p className="font-medium">Select your location</p>
                  </div>
                  <input
                    type="text"
                    placeholder="Search for area, street name..."
                    className="w-full px-4 py-2 text-sm border-b focus:outline-none"
                  />
                  <button
                    onClick={handleDetectLocation}
                    className="w-full px-4 py-2 text-sm text-left text-blue-600 hover:bg-gray-100"
                  >
                    Detect my location
                  </button>
                  <div className="max-h-60 overflow-y-auto">
                    {['Bangalore', 'Delhi', 'Mumbai', 'Hyderabad', 'Chennai', 'Pune'].map((city) => (
                      <button
                        key={city}
                        onClick={() => {
                          setLocation(city);
                          setIsLocationOpen(false);
                        }}
                        className="w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                      >
                        {city}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className={`relative w-full ${isSearchFocused ? 'ring-2 ring-red-500 rounded-md' : ''}`}>
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search for dishes or restaurants"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none"
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              {/* Auto-complete dropdown would go here */}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="flex items-center text-gray-700 hover:text-red-500 group">
              <span className="relative">
               <a href="/orders" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">My Orders</a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button className="flex items-center text-gray-700 hover:text-red-500 group">
            
              <span className="relative">
                <a href="/offers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
              <Gift className="h-4 w-4 mr-2" /> Offers
            </a>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
            
            <button className="flex items-center text-gray-700 hover:text-red-500 group">
              <HelpCircle className="h-4 w-4 mr-1" />
              <span className="relative">
                Help
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="relative p-2 text-gray-700 hover:text-red-500">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            
            <button className="flex items-center space-x-1 text-gray-700 hover:text-red-500 border border-gray-300 rounded-full px-3 py-1">
              <User className="h-4 w-4" />
             <a href="/signup" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Sign Up</a>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button className="relative p-2 text-gray-700">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </button>
            <button
              onClick={toggleMenu}
              className="text-gray-700 p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-3 border-t">
          {/* Mobile Location Selector */}
          <div className="relative">
            <button 
              onClick={toggleLocation}
              className="flex items-center space-x-2 text-gray-700 w-full px-3 py-2 rounded-md hover:bg-gray-50"
            >
              <MapPin className="h-4 w-4" />
              <span className="font-medium">{location}</span>
              <ChevronDown className={`h-4 w-4 ml-auto transition-transform duration-200 ${isLocationOpen ? 'transform rotate-180' : ''}`} />
            </button>
            
            {isLocationOpen && (
              <div className="mt-1 bg-gray-50 rounded-md p-2 space-y-2">
                <input
                  type="text"
                  placeholder="Search for area..."
                  className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                />
                <button
                  onClick={handleDetectLocation}
                  className="w-full px-3 py-2 text-sm text-left text-blue-600 hover:bg-gray-100 rounded-md"
                >
                  Detect my location
                </button>
                <div className="max-h-40 overflow-y-auto">
                  {['Bangalore', 'Delhi', 'Mumbai', 'Hyderabad'].map((city) => (
                    <button
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setIsLocationOpen(false);
                      }}
                      className="w-full px-3 py-2 text-sm text-left text-gray-700 hover:bg-gray-100 rounded-md"
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Mobile Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search dishes or restaurants"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
            />
          </div>

          {/* Mobile Menu Items */}
          <div className="space-y-1 pt-2">
            <a href="/orders" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">My Orders</a>
            <a href="/offers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
              <Gift className="h-4 w-4 mr-2" /> Offers
            </a>
            <a href="#" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md flex items-center">
              <HelpCircle className="h-4 w-4 mr-2" /> Help
            </a>
          </div>

          {/* Sign In Button */}
          <button className="w-full flex items-center justify-center space-x-2 text-gray-700 border border-gray-300 rounded-full px-4 py-2 mt-4">
            <User className="h-4 w-4" />
            <a href="/signup" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Sign Up</a>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;