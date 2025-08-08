import React, { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [activeTab, setActiveTab] = useState('email');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setEmail('');
      setPhone('');
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div className="md:flex">
            {/* Food Image Section */}
            <div className="md:w-2/5 bg-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Delicious food assortment"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Form Section */}
            <div className="md:w-3/5 p-8 md:p-12">
              {isSuccess ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center bg-green-100 rounded-full p-3 mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-700">You're now subscribed to our updates.</p>
                  <p className="text-sm text-gray-500 mt-2">Check your inbox (or phone) for a welcome message.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Get Weekly Menus</h2>
                  <p className="text-lg text-gray-600 mb-6">Plus exclusive coupons delivered to your inbox</p>
                  
                  {/* Tab Navigation */}
                  <div className="flex border-b border-gray-200 mb-6">
                    <button
                      onClick={() => setActiveTab('email')}
                      className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                        activeTab === 'email'
                          ? 'text-amber-600 border-b-2 border-amber-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg className="w-4 h-4 inline mr-2 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email
                    </button>
                    <button
                      onClick={() => setActiveTab('sms')}
                      className={`py-2 px-4 font-medium text-sm focus:outline-none ${
                        activeTab === 'sms'
                          ? 'text-amber-600 border-b-2 border-amber-600'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <svg className="w-4 h-4 inline mr-2 -mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                      Text
                    </button>
                  </div>
                  
                  <form onSubmit={handleSubmit}>
                    {activeTab === 'email' ? (
                      <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 border"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    ) : (
                      <div className="mb-6">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="focus:ring-amber-500 focus:border-amber-500 block w-full sm:text-sm border-gray-300 rounded-md py-3 px-4 border"
                          placeholder="(123) 456-7890"
                          required
                        />
                        <p className="mt-2 text-xs text-gray-500">
                          By subscribing, you agree to receive automated text messages. Message & data rates may apply.
                        </p>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            className="focus:ring-amber-500 h-4 w-4 text-amber-600 border-gray-300 rounded"
                            required
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="offers" className="text-gray-700">
                            I agree to receive weekly menus and exclusive offers
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        `Sign Up for Weekly Updates`
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;