import React, { useCallback, useEffect, useRef, useState } from 'react';
import Navbar from '../components/Navbar';
import { gsap } from 'gsap';
import { ArrowBigRight, ArrowRight, Check, CheckCircle, ChevronLeft, ChevronRight, Clock,  Copy,  CreditCard,  Download,  FileClock,  Gift,  Heart,  MapPin, Percent, Plus, ShoppingCart, Star, Truck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import NewsletterSignup from '../components/NewsletterSignup';
import Footer from '../components/Footer';
import { AiFillStar } from 'react-icons/ai';
import { FiClock } from 'react-icons/fi';

const HomePage = () => {
  const heroRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCoupon, setCopiedCoupon] = useState(null);
  const restaurantCarouselRef = useRef(null);
  const offersCarouselRef = useRef(null);
  const [currentRestaurantSlide, setCurrentRestaurantSlide] = useState(0);
  const [currentOfferSlide, setCurrentOfferSlide] = useState(0);
  const cardRefs = useRef([]);
  const [activeFilter, setActiveFilter] = useState('Pure Veg');
  const [timeLeft, setTimeLeft] = useState(1800); // 30 mins
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const observer = useRef();

   const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    { icon: Zap, text: "Lightning fast ordering", color: "text-yellow-500" },
    { icon: Clock, text: "Real-time tracking", color: "text-blue-500" },
    { icon: Gift, text: "Exclusive app deals", color: "text-pink-500" }
  ];

 const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoRotating, setIsAutoRotating] = useState(true);

   const nearbyRestaurants = [
    {
      id: 1,
      name: 'Spicy Kitchen',
      image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=60',
      cuisine: 'North Indian, Chinese',
      rating: 4.5,
      eta: '25 min',
      price: '₹₹',
    },
    {
      id: 2,
      name: 'Pizza Palace',
      image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=800&q=60',
      cuisine: 'Italian, Fast Food',
      rating: 4.2,
      eta: '30 min',
      price: '₹₹₹',
    },
    {
      id: 3,
      name: 'Healthy Bowl',
      image: 'https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=800&q=60',
      cuisine: 'Salads, Healthy',
      rating: 4.7,
      eta: '20 min',
      price: '₹₹',
    },
  ];

   const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  useEffect(() => {
    let interval;
    if (isAutoRotating) {
      interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoRotating, testimonials.length]);

  const handlePrev = () => {
    setIsAutoRotating(false);
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setIsAutoRotating(false);
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handleDotClick = (index) => {
    setIsAutoRotating(false);
    setActiveIndex(index);
  };

  
    const displayedTestimonials = [
    testimonials[(activeIndex - 1 + testimonials.length) % testimonials.length],
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length]
  ];

   
    const popularDishes = [
    {
      id: 1,
      name: "Truffle Mushroom Pizza",
      description: "Wood-fired pizza with wild mushrooms, truffle oil, and mozzarella",
      price: 18.99,
      rating: 4.8,
      prepTime: "20-25 min",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: true
    },
    {
      id: 2,
      name: "Double Cheeseburger",
      description: "Two juicy beef patties with cheddar, pickles, and special sauce",
      price: 14.50,
      rating: 4.9,
      prepTime: "15-20 min",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: false
    },
    {
      id: 3,
      name: "Avocado Toast",
      description: "Sourdough bread with smashed avocado, cherry tomatoes, and feta",
      price: 12.75,
      rating: 4.7,
      prepTime: "10-15 min",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: true
    },
    {
      id: 4,
      name: "Chocolate Lava Cake",
      description: "Warm chocolate cake with a molten center, served with vanilla ice cream",
      price: 9.99,
      rating: 4.9,
      prepTime: "12-15 min",
      image: "https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: true
    },
    {
      id: 5,
      name: "Sushi Platter",
      description: "Assorted fresh sushi with tuna, salmon, and California rolls",
      price: 22.50,
      rating: 4.8,
      prepTime: "15-20 min",
      image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: false
    },
    {
      id: 6,
      name: "Chicken Tikka Masala",
      description: "Grilled chicken chunks in spiced curry sauce with basmati rice",
      price: 16.99,
      rating: 4.7,
      prepTime: "25-30 min",
      image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
      isVeg: false
    }
  ];
  const brands = [
    { name: 'Domino\'s', logo: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=150&h=150&fit=crop' },
    { name: 'McDonald\'s', logo: 'images/burger_king.png' },
    { name: 'Pizza Hut', logo: 'images/pizza.jpg' },
    { name: 'KFC', logo: 'images/kfc.jpg' },
    { name: 'Subway', logo: 'https://cdn.worldvectorlogo.com/logos/subway-3.svg' },
    { name: 'Starbucks', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/800px-Starbucks_Corporation_Logo_2011.svg.png' },
  ];

  const categories = [
    { name: 'Pizza', image: 'https://content.jdmagicbox.com/comp/nagpur/r8/0712px712.x712.130511170819.m8r8/catalogue/dominos-pizza-poonam-mall--wardhaman-nagar-nagpur-pizza-outlets-4b21cl6.jpg' },
    { name: 'Burger', image: 'https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?w=400&h=250&fit=crop' },
    { name: 'Sushi', image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop' },
    { name: 'Biryani', image: 'https://feastwithsafiya.com/wp-content/uploads/2021/09/easy-chicken-biryani.jpg' },
    { name: 'Desserts', image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&h=250&fit=crop' },
    { name: 'Healthy', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=250&fit=crop' },
    { name: 'Chinese', image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=250&fit=crop' },
    { name: 'Snacks', image: 'https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=400&h=250&fit=crop' },
  ];
  const steps = [
    {
      id: 1,
      title: "Choose Food",
      description: "Browse thousands of restaurants and select your favorite dishes",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      iconBg: "bg-orange-100",
      textColor: "text-orange-600"
    },
    {
      id: 2,
      title: "Pay Securely",
      description: "Multiple payment options with bank-level security",
      icon: CreditCard,
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-50",
      iconBg: "bg-blue-100",
      textColor: "text-blue-600"
    },
    {
      id: 3,
      title: "Track Delivery",
      description: "Real-time tracking from kitchen to your doorstep",
      icon: MapPin,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      iconBg: "bg-green-100",
      textColor: "text-green-600"
    }
  ];

  const FILTERS = [
    'Pure Veg',
    'Under 30 min',
    'Great Offers',
    'Free Delivery',
    'Top Rated',
    'New Restaurants',
  ];

  const restaurants = [
    {
      id: 1,
      name: "Sakura Sushi Bar",
      rating: 4.9,
      reviews: 2847,
      cuisine: ["Japanese", "Sushi", "Fine Dining"],
      eta: "25-30 min",
      image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=250&fit=crop",
      price: "₹₹₹",
      distance: "1.2 km",
      trending: true
    },
    {
      id: 2,
      name: "Bella Italia",
      rating: 4.7,
      reviews: 1923,
      cuisine: ["Italian", "Pizza", "Pasta"],
      eta: "20-25 min",
      image: "https://b.zmtcdn.com/data/pictures/6/19294456/2b00aaf9d6da11f918ee9428886eba85.jpg",
      price: "₹₹",
      distance: "0.8 km",
      trending: false
    },
    {
      id: 3,
      name: "Spice Garden",
      rating: 4.8,
      reviews: 3156,
      cuisine: ["Indian", "Curry", "Vegetarian"],
      eta: "30-35 min",
      image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=250&fit=crop",
      price: "₹₹",
      distance: "2.1 km",
      trending: true
    },
    {
      id: 4,
      name: "The Grill House",
      rating: 4.6,
      reviews: 1567,
      cuisine: ["American", "BBQ", "Steakhouse"],
      eta: "35-40 min",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=250&fit=crop",
      price: "₹₹₹₹",
      distance: "1.5 km",
      trending: false
    },
    {
      id: 5,
      name: "Taco Fiesta",
      rating: 4.5,
      reviews: 892,
      cuisine: ["Mexican", "Tacos", "Street Food"],
      eta: "15-20 min",
      image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=250&fit=crop",
      price: "₹",
      distance: "0.5 km",
      trending: true
    },
    {
      id: 6,
      name: "Ocean Breeze",
      rating: 4.8,
      reviews: 2134,
      cuisine: ["Seafood", "Mediterranean", "Fine Dining"],
      eta: "40-45 min",
      image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=250&fit=crop",
      price: "₹₹₹₹",
      distance: "3.2 km",
      trending: false
    }
  ];

  const offers = [
    {
      id: 1,
      title: "₹100 off on first 3 orders",
      subtitle: "New user special",
      code: "WELCOME100",
      discount: "₹100 OFF",
      minOrder: "₹299",
      validUntil: "Dec 31, 2024",
      bgColor: "from-purple-600 to-pink-600",
      icon: "gift",
      isHot: true,
      description: "Perfect for new foodies!"
    },
    {
      id: 2,
      title: "BOGO on desserts",
      subtitle: "Sweet deals await",
      code: "SWEET50",
      discount: "Buy 1 Get 1",
      minOrder: "₹199",
      validUntil: "Dec 25, 2024",
      bgColor: "from-orange-500 to-red-500",
      icon: "percent",
      isHot: false,
      description: "Double the sweetness!"
    },
    {
      id: 3,
      title: "Free delivery all day",
      subtitle: "No delivery charges",
      code: "FREEDEL",
      discount: "FREE",
      minOrder: "₹149",
      validUntil: "Today only",
      bgColor: "from-green-500 to-emerald-600",
      icon: "zap",
      isHot: true,
      description: "Save on every order!"
    },
    {
      id: 4,
      title: "50% off on beverages",
      subtitle: "Quench your thirst",
      code: "DRINK50",
      discount: "50% OFF",
      minOrder: "₹99",
      validUntil: "Dec 30, 2024",
      bgColor: "from-blue-500 to-cyan-500",
      icon: "percent",
      isHot: false,
      description: "Refresh and save!"
    },
    {
      id: 5,
      title: "Weekend feast deal",
      subtitle: "Family combo special",  
      code: "WEEKEND25",
      discount: "25% OFF",
      minOrder: "₹599",
      validUntil: "This weekend",
      bgColor: "from-indigo-600 to-purple-600",
      icon: "star",
      isHot: true,
      description: "Perfect for family time!"
    }
  ];

  // For restaurants
  const nextRestaurantSlide = () => {
    setCurrentRestaurantSlide((prev) => (prev + 1) % Math.max(1, restaurants.length - 2));
  };

  const prevRestaurantSlide = () => {
    setCurrentRestaurantSlide((prev) => (prev - 1 + Math.max(1, restaurants.length - 2)) % Math.max(1, restaurants.length - 2));
  };

  // For offers
  const nextOfferSlide = () => {
    setCurrentOfferSlide((prev) => (prev + 1) % offers.length);
  };

  const prevOfferSlide = () => {
    setCurrentOfferSlide((prev) => (prev - 1 + offers.length) % offers.length);
  };

  const generateRestaurants = (pageNum) => {
    const cuisines = ['Italian', 'Chinese', 'Indian', 'Mexican', 'Thai', 'Japanese', 'American', 'Mediterranean', 'French', 'Korean'];
    const names = ['Bella Vista', 'Golden Dragon', 'Spice Palace', 'Taco Fiesta', 'Bangkok Kitchen', 'Sakura', 'Burger House', 'Olive Garden', 'Cafe Paris', 'Seoul Kitchen'];
    const restaurantOffers = ['50% OFF', '30% OFF', 'Buy 1 Get 1', 'Free Delivery', '₹100 OFF', '40% OFF', 'Free Dessert'];
    
    return Array.from({ length: 12 }, (_, index) => {
      const id = (pageNum - 1) * 12 + index + 1;
      const hasOffer = Math.random() > 0.4;
      const hasFreeDelivery = Math.random() > 0.6;
      
      return {
        id,
        name: `${names[index % names.length]} ${id}`,
        image: `https://images.unsplash.com/photo-${1555396273367 + (id * 1000)}?w=400&h=300&fit=crop&auto=format`,
        cuisine: cuisines[Math.floor(Math.random() * cuisines.length)],
        rating: (4.0 + Math.random() * 1).toFixed(1),
        reviews: Math.floor(Math.random() * 2000) + 100,
        distance: (Math.random() * 5 + 0.1).toFixed(1),
        deliveryTime: `${Math.floor(Math.random() * 20) + 15}-${Math.floor(Math.random() * 20) + 35}`,
        deliveryFee: hasFreeDelivery ? 0 : Math.floor(Math.random() * 50) + 20,
        offer: hasOffer ? restaurantOffers[Math.floor(Math.random() * restaurantOffers.length)] : null,
        isFavorite: false,
        isPromoted: Math.random() > 0.8
      };
    });
  };

  const loadMoreRestaurants = useCallback(async () => {
    if (loading) return;
    
    setLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newRestaurants = generateRestaurants(page);
    
    setRestaurant(prev => [...prev, ...newRestaurants]);
    setPage(prev => prev + 1);
    setLoading(false);
    
    // Stop loading after 5 pages for demo
    if (page >= 5) {
      setHasMore(false);
    }
  }, [loading, page]);

  const getIcon = (iconType) => {
    switch (iconType) {
      case 'gift': return <Gift className="w-6 h-6" />;
      case 'percent': return <Percent className="w-6 h-6" />;
      case 'zap': return <Zap className="w-6 h-6" />;
      case 'star': return <Star className="w-6 h-6" />;
      default: return <Tag className="w-6 h-6" />;
    }
  };

  const copyCouponCode = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCoupon(code);
      setTimeout(() => setCopiedCoupon(null), 2000);
    } catch (err) {
      console.error('Failed to copy coupon code');
    }
  };

  useEffect(() => {
    loadMoreRestaurants();
  }, []); 

  // Restaurant carousel transform (when slide changes)
  useEffect(() => {
    if (restaurantCarouselRef.current) {
      restaurantCarouselRef.current.style.transform = `translateX(-${currentRestaurantSlide * 340}px)`;
    }
  }, [currentRestaurantSlide]);

  // Timer for limited time offer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    
    return () => clearInterval(timer);
  }, []); 

  // Offers carousel auto-advance
  useEffect(() => {
    const offerTimer = setInterval(() => {
      setCurrentOfferSlide((prev) => (prev + 1) % offers.length);
    }, 5000);
    
    return () => clearInterval(offerTimer);
  }, [offers.length]);

  // Nearby restaurants intersection observer
  const lastRestaurantElementRef = useCallback(node => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        loadMoreRestaurants();
      }
    });
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMoreRestaurants]);

  const toggleFavorite = (id) => {
    setRestaurant(prev => 
      prev.map(rest => 
        rest.id === id 
          ? { ...rest, isFavorite: !rest.isFavorite }
          : rest
      )
    );
  };

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleAddToCart = (restaurant) => {
    console.log('Added to cart:', restaurant.name);
  };

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    console.log('Filter selected:', filter);
  };
  return (
    <div className="relative bg-gradient-to-r from-[#fb2c36] via-[#f8353f] to-[#ec777c] min-h-screen overflow-hidden">
 

      {/* Top Curve Divider */}
  <div className="relative w-full overflow-hidden leading-[0] z-[1]">
  {/* Location Pin - top left */}
  <div className="absolute top-[35%] left-[15%] hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors duration-300 cursor-pointer z-10">
    <MapPin className="h-4 w-4" />
    <span className="text-md">Bangalore</span>
  </div>

  {/* ⏳ Limited Time Offer Tag - top right */}
  <div className="absolute top-[35%] right-[10%] hidden md:flex items-center gap-2 bg-red-50 border border-red-300 text-red-700 px-4 py-2 rounded-full shadow z-10 animate-pulse">
    <Clock className="w-4 h-4" />
    <span className="text-sm font-semibold">Limited Time Offer</span>
    <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-mono">{formatTime(timeLeft)}</span>
  </div>

  {/* SVG Shape Divider */}
  <div className="rotate-180">
    <svg
      viewBox="0 0 1200 120"
      preserveAspectRatio="none"
      className="w-[135%] h-[245px] block"
    >
      <path
        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        className="fill-[#ecf39e]"
      />
    </svg>
  </div>
</div>

      {/* Hero Content */}
      <div
        ref={heroRef}
        className="relative z-[2] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 pb-20"
      >
        <div className="md:w-1/2 text-white">
          <h1 className="text-[7rem] font-black -mb-10">Feel Hungry</h1>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">We love</h2>
          <p className="text-lg md:text-xl mb-8 max-w-md">
            This is an example web page design section to see your shape divider live in action on a beautiful design.
          </p>
          <div className="flex items-center gap-4">
            <span className="font-semibold">Find us Here</span>
            <span className="text-white text-2xl">—</span>
            <i className="fab fa-facebook text-xl"></i>
            <i className="fab fa-linkedin text-xl"></i>
            <i className="fab fa-instagram text-xl"></i>
            <i className="fab fa-youtube text-xl"></i>
            <i className="fab fa-twitter text-xl"></i>
          </div>
        </div>

        <div className="md:w-1/2 md:mt-0 flex justify-center">
  <img
    src="images/food1.png"
    alt=""
    className="w-[400px] h-[400px] object-cover rounded-full shadow-lg"
    style={{
      animation: "spin 8s linear infinite",
    }}
  />
</div>

      </div>

          <div className="px-6 py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">🍽️ Popular Brands</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 place-items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.97 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            className="bg-white border border-gray-200 shadow-sm rounded-xl  flex items-center justify-center hover:shadow-md transition-all"
          >
            <img
              src={brand.logo}
              alt={brand.name}
            className='w-[150px] h-[150px]'
            />
          </motion.div>
        ))}
      </div>
    </div>

      {/* 🔥 Quick Filters Section */}
      <div className="relative z-[3] bg-white px-6 py-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Quick Filters</h2>
        <div className="flex gap-3 overflow-x-auto no-scrollbar">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-4 py-2 rounded-full border text-sm whitespace-nowrap transition-all
                ${
                  activeFilter === filter
                    ? 'bg-[#f7434a] text-white border-[#f7434a]'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

  <div className="bg-[#fff7f7] py-10 px-6">
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">🍱 Explore by Category</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 overflow-x-auto no-scrollbar">
    {categories.map((cat, index) => (
      <Link to={`/category/${cat.name.toLowerCase()}`} key={index}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-full h-36 object-cover rounded-t-xl"
          />
          <div className="text-center py-3 font-medium text-gray-800">
            {cat.name}
          </div>
        </motion.div>
      </Link>
    ))}
  </div>
</div>
  <div className="min-h-screen bg-gray-50 relative overflow-hidden">
      {/* Blurred Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover blur-[10%] opacity-70"
        >
          <source src="https://videos.pexels.com/video-files/5530015/5530015-uhd_2732_1440_25fps.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Light overlay for better readability */}
        <div className="absolute inset-0 bg-white/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm shadow-lg rounded-full px-6 py-3 mb-6">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <span className="text-gray-700 text-sm font-semibold">Trending Now</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-gray-800 mb-4">
            Top Restaurants
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover the most loved dining experiences in your city
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevRestaurantSlide }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 text-gray-700 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextRestaurantSlide }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white/90 backdrop-blur-md shadow-xl rounded-full p-3 text-gray-700 hover:bg-white hover:shadow-2xl transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel */}
          <div className="overflow-hidden">
            <div
              ref={restaurantCarouselRef }
              className="flex gap-6 transition-transform duration-700 ease-out"
              style={{ width: `${restaurants.length * 340}px` }}
            >
              {restaurants.map((restaurant, index) => (
                <div
                  key={restaurant.id}
                  ref={el => cardRefs.current[index] = el}
                  className="min-w-[320px] group cursor-pointer"
                >
                  <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200/50">
                    {/* Image Container */}
                    <div className="relative overflow-hidden">
                      <img
                        src={restaurant.image}
                        alt={restaurant.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Trending Badge */}
                      {restaurant.trending && (
                        <div className="absolute top-4 left-4">
                          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-xl px-3 py-1.5 shadow-lg">
                            <span className="text-white text-xs font-bold">🔥 TRENDING</span>
                          </div>
                        </div>
                      )}

                      {/* Price Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/70 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-lg">
                          <span className="text-white text-sm font-medium">{restaurant.price}</span>
                        </div>
                      </div>

                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Card Content */}
                    <div className="p-6">
                      {/* Restaurant Name & Rating */}
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                          {restaurant.name}
                        </h3>
                        <div className="flex items-center gap-1 bg-green-100 rounded-full px-3 py-1.5 shadow-sm">
                          <Star className="w-4 h-4 fill-green-500 text-green-500" />
                          <span className="text-green-700 font-semibold text-sm">{restaurant.rating}</span>
                        </div>
                      </div>

                      {/* Distance & Reviews */}
                      <div className="flex items-center gap-4 mb-4 text-gray-600 text-sm">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{restaurant.distance}</span>
                        </div>
                        <span>•</span>
                        <span>{restaurant.reviews.toLocaleString()} reviews</span>
                      </div>

                      {/* Cuisine Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurant.cuisine.slice(0, 3).map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-gray-100 text-gray-700 rounded-full px-3 py-1.5 text-xs font-medium border border-gray-200 shadow-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* ETA & Add to Cart */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">{restaurant.eta}</span>
                        </div>

                        <button
                          onClick={() => handleAddToCart(restaurant)}
                          className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl px-5 py-2.5 flex items-center gap-2 font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                          <ShoppingCart className="w-4 h-4" />
                          <span className="text-sm">Add</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.max(1, restaurants.length - 2) }).map((_, index) => (
              <button
                key={index}
              onClick={() => setCurrentRestaurantSlide(index)}
className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
  currentRestaurantSlide === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-400 w-2 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>

 <div className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-red-100 rounded-full px-4 py-2 mb-4">
            <Gift className="w-5 h-5 text-orange-600" />
            <span className="text-orange-700 font-semibold text-sm">Limited Time Offers</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Special Offers & Coupons
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Save more on your favorite meals with our exclusive deals and discount coupons
          </p>
        </div>

        {/* Featured Banner */}
        <div className="mb-12">
          <div className="relative bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-3xl p-8 overflow-hidden shadow-2xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-12 translate-y-12"></div>
            </div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
              <div className="text-white mb-6 md:mb-0">
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-white/20 rounded-full p-2">
                    <Zap className="w-6 h-6" />
                  </div>
                  <span className="bg-white/20 rounded-full px-3 py-1 text-sm font-bold">
                    🔥 MEGA DEAL
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-2">
                  Flash Sale Today!
                </h3>
                <p className="text-xl font-semibold opacity-90">
                  Up to 60% off on all restaurants
                </p>
                <p className="text-white/80 mt-2">
                  Valid until midnight • No minimum order
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <div className="text-center">
                  <div className="text-3xl font-black text-gray-800 mb-2">60% OFF</div>
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg px-4 py-2 font-bold text-lg mb-3">
                    FLASH60
                  </div>
                  <button
                    onClick={() => copyCouponCode('FLASH60')}
                    className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-6 py-2 font-semibold transition-all duration-200 flex items-center gap-2 mx-auto"
                  >
                    {copiedCoupon === 'FLASH60' ? (
                      <>
                        <Check className="w-4 h-4" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        Copy Code
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Offers Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevOfferSlide }
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextOfferSlide }
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white shadow-xl rounded-full p-3 text-gray-700 hover:bg-gray-50 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              ref={offersCarouselRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentOfferSlide * 100}%)` }}
            >
              {offers.map((offer) => (
                <div key={offer.id} className="w-full flex-shrink-0">
                  <div className={`bg-gradient-to-r ${offer.bgColor} rounded-2xl p-8 mx-2 relative overflow-hidden`}>
                    {/* Hot Badge */}
                    {offer.isHot && (
                      <div className="absolute top-4 right-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                          <span className="text-white text-xs font-bold">🔥 HOT</span>
                        </div>
                      </div>
                    )}

                    {/* Background Elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-16 -translate-y-16"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/10 rounded-full -translate-x-10 translate-y-10"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
                      <div className="text-white mb-6 md:mb-0 flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="bg-white/20 rounded-full p-2">
                            {getIcon(offer.icon)}
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold">
                              {offer.title}
                            </h3>
                            <p className="text-white/80 text-sm">
                              {offer.subtitle}
                            </p>
                          </div>
                        </div>
                        
                        <p className="text-white/90 mb-2">{offer.description}</p>
                        
                        <div className="flex flex-wrap gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold">Min order:</span>
                            <span>{offer.minOrder}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>Valid until {offer.validUntil}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white rounded-2xl p-6 shadow-xl min-w-[200px]">
                        <div className="text-center">
                          <div className="text-2xl font-black text-gray-800 mb-2">
                            {offer.discount}
                          </div>
                          <div className={`bg-gradient-to-r ${offer.bgColor} text-white rounded-lg px-4 py-2 font-bold mb-3`}>
                            {offer.code}
                          </div>
                          <button
                            onClick={() => copyCouponCode(offer.code)}
                            className="bg-gray-800 hover:bg-gray-900 text-white rounded-lg px-4 py-2 font-semibold transition-all duration-200 flex items-center gap-2 mx-auto text-sm"
                          >
                            {copiedCoupon === offer.code ? (
                              <>
                                <Check className="w-4 h-4" />
                                Copied!
                              </>
                            ) : (
                              <>
                                <Copy className="w-4 h-4" />
                                Copy Code
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
  {Array.from({ length: Math.max(1, restaurants.length - 2) }).map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentRestaurantSlide(index)} // Changed from setCurrentIndex
      className={`h-2 rounded-full transition-all duration-300 shadow-sm ${
        currentRestaurantSlide === index // Changed from currentIndex
          ? 'bg-blue-600 w-8'
          : 'bg-gray-400 w-2 hover:bg-gray-500'
      }`}
    />
  ))}
</div>
        </div>

        {/* Quick Coupons Strip */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
            Quick Coupon Codes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { code: 'SAVE20', desc: '20% off orders above ₹400', color: 'bg-blue-500' },
              { code: 'FIRST15', desc: '15% off for new users', color: 'bg-green-500' },
              { code: 'PARTY30', desc: '30% off party orders', color: 'bg-purple-500' }
            ].map((coupon, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-lg border-2 border-dashed border-gray-200 hover:border-gray-300 transition-all duration-200">
                <div className="flex items-center justify-between">
                  <div>
                    <div className={`${coupon.color} text-white rounded-lg px-3 py-1 font-bold text-sm inline-block mb-2`}>
                      {coupon.code}
                    </div>
                    <p className="text-gray-600 text-sm">{coupon.desc}</p>
                  </div>
                  <button
                    onClick={() => copyCouponCode(coupon.code)}
                    className="bg-gray-100 hover:bg-gray-200 rounded-lg p-2 transition-colors duration-200"
                  >
                    {copiedCoupon === coupon.code ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-gray-600" />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
{/* nearby restaurants */}

 <section className="bg-slate-50 py-8">
      <div className=" mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">
          Nearby Restaurants
        </h2>

        {/* Horizontal scroll container */}
        <div className="flex gap-4 overflow-x-auto p-10 snap-x">
          {nearbyRestaurants.map((r, idx) => (
            <div
              key={r.id}
              className="relative flex-shrink-0 w-72 bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform hover:-translate-y-1"
            >
              {/* Ranking badge */}
              <span className="absolute -top-3 -left-3 z-10 flex items-center justify-center w-9 h-9 bg-red-600 text-white font-bold text-sm rounded-full shadow-lg">
                {idx + 1}
              </span>

              {/* Image */}
              <img
                src={r.image}
                alt={r.name}
                className="w-full h-40 object-cover rounded-t-2xl"
              />

              {/* Card body */}
              <div className="p-4 space-y-1">
                <h3 className="text-lg font-semibold text-slate-900 truncate">
                  {r.name}
                </h3>
                <p className="text-sm text-slate-600 truncate">{r.cuisine}</p>

                <div className="flex items-center space-x-3 text-sm text-slate-700">
                  <span className="flex items-center">
                    <AiFillStar className="text-orange-500 mr-1" />
                    {r.rating}
                  </span>
                  <span className="flex items-center">
                    <FileClock className="mr-1" />
                    {r.eta}
                  </span>
                  <span>{r.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
           <div className="py-16 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white shadow-lg rounded-full px-6 py-3 mb-6">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <span className="text-gray-700 text-sm font-semibold">Simple & Easy</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Get your favorite food delivered in just three simple steps
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Desktop Connection Line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center px-32">
              <div className="flex-1 h-0.5 bg-gradient-to-r from-orange-300 to-blue-300"></div>
              <div className="flex-1 h-0.5 bg-gradient-to-r from-blue-300 to-green-300 ml-16"></div>
            </div>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <div key={step.id} className="flex flex-col items-center group">
                  {/* Step Card */}
                  <div className={`${step.bgColor} rounded-3xl p-8 w-full max-w-sm hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/50 backdrop-blur-sm relative overflow-hidden`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-current transform translate-x-16 -translate-y-16"></div>
                      <div className="absolute bottom-0 left-0 w-20 h-20 rounded-full bg-current transform -translate-x-10 translate-y-10"></div>
                    </div>

                    <div className="relative z-10">
                      {/* Step Number */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} text-white flex items-center justify-center font-bold text-sm shadow-lg`}>
                          {step.id}
                        </div>
                        
                        {/* Arrow for desktop (except last item) */}
                        {index < steps.length - 1 && (
                          <div className="hidden md:block absolute -right-6 top-16 transform translate-x-full">
                            <div className={`w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                              <ArrowBigRight className="w-5 h-5 text-gray-400" />
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Icon */}
                      <div className={`${step.iconBg} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                        <Icon className={`w-10 h-10 ${step.textColor}`} />
                      </div>

                      {/* Content */}
                      <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`}></div>
                  </div>

                  {/* Mobile Arrow (between steps) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-6">
                      <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl p-6 shadow-xl max-w-lg mx-auto">
            <div className="text-center sm:text-left">
              <div className="text-lg font-semibold text-gray-800 mb-1">
                Ready to get started?
              </div>
              <div className="text-sm text-gray-600">
                Join thousands of happy customers
              </div>
            </div>
            
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
              Order Now
            </button>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div className="group">
                <div className="text-3xl font-black text-gray-800 mb-2 group-hover:text-orange-500 transition-colors duration-300">
                  50K+
                </div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-black text-gray-800 mb-2 group-hover:text-blue-500 transition-colors duration-300">
                  15 Min
                </div>
                <div className="text-gray-600 font-medium">Average Delivery</div>
              </div>
              
              <div className="group">
                <div className="text-3xl font-black text-gray-800 mb-2 group-hover:text-green-500 transition-colors duration-300">
                  99.9%
                </div>
                <div className="text-gray-600 font-medium">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Popular Dishes
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Customer favorites that always delight
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularDishes.map((dish) => (
            <div 
              key={dish.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                {dish.rating && (
                  <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 flex items-center shadow-sm">
                    <svg className="w-4 h-4 text-yellow-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-sm font-medium text-gray-900">{dish.rating}</span>
                  </div>
                )}
                {dish.isVeg ? (
                  <div className="absolute top-3 right-3 bg-green-500 text-white rounded-full p-1 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                ) : (
                  <div className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 shadow-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{dish.name}</h3>
                    <p className="mt-1 text-gray-600">{dish.description}</p>
                  </div>
                  <span className="text-lg font-bold text-gray-900">${dish.price.toFixed(2)}</span>
                </div>
                
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{dish.prepTime}</span>
                  <button 
                    className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg font-medium hover:from-amber-600 hover:to-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 transition-all duration-200 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    Add 1
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-full font-medium text-gray-700 hover:bg-gray-50 transition-colors duration-200">
            View Full Menu
          </button>
        </div>
      </div>
    </section>
    {/* testimonials */}
     <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't just take our word for it - hear from our happy customers
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial Cards */}
          <div className="flex overflow-hidden">
            {displayedTestimonials.map((testimonial, index) => {
              const position = 
                index === 0 ? 'left' : 
                index === 1 ? 'center' : 'right';
              
              return (
                <div 
                  key={testimonial.id}
                  className={`w-full sm:w-1/3 px-4 transition-all duration-500 ease-in-out ${
                    position === 'center' ? 
                      'transform scale-105 z-20' : 
                      'transform scale-95 opacity-80'
                  }`}
                >
                  <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-amber-100"
                        />
                        <div className="absolute -bottom-2 -right-2 bg-amber-500 rounded-full p-1">
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        </div>
                      </div>
                      <div className="ml-4">
                        <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                      </div>
                    </div>
                    
                    <blockquote className="flex-grow">
                      <p className="text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                    </blockquote>
                    
                    <div className="flex justify-between items-center mt-auto">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-5 h-5 ${i < testimonial.rating ? 'text-amber-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500">
                        Verified Customer
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === activeIndex ? 'bg-amber-500' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
    
    <div className="bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-pink-400 rounded-full opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-blue-400 rounded-full opacity-10 animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className={`text-white space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-medium">
              <Download className="w-4 h-4" />
              Get the App
            </div>

            {/* Main Heading */}
            <div>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Order Faster,
                <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                  {" "}Eat Sooner
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Skip the wait and get your favorite meals delivered in minutes. Our app makes ordering effortless with exclusive deals you won't find anywhere else.
              </p>
            </div>

            {/* Features */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-center gap-4 transform transition-all duration-700 delay-${index * 200} ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
                >
                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-full">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <span className="text-lg font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-2xl font-bold">4.8</span>
                </div>
                <p className="text-gray-400 text-sm">App Store Rating</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">500K+</div>
                <p className="text-gray-400 text-sm">Happy Customers</p>
              </div>
              <div>
                <div className="text-2xl font-bold mb-1">15min</div>
                <p className="text-gray-400 text-sm">Avg. Delivery</p>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </button>

              <button className="group bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center gap-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-black" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-gray-300">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right Side - Phone Mockups */}
          <div className={`relative transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
            
            {/* Phone 1 - Background */}
            <div className="absolute top-8 right-12 transform rotate-12 animate-float">
              <div className="w-64 h-128 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl p-4">
                    <div className="text-white space-y-3">
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-white rounded-full"></div>
                        <div className="text-sm font-bold">FoodieApp</div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="h-16 bg-white/30 rounded-lg mb-2"></div>
                        <div className="text-xs">Margherita Pizza</div>
                        <div className="text-sm font-bold">$16.99</div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                        <div className="h-16 bg-white/30 rounded-lg mb-2"></div>
                        <div className="text-xs">Korean BBQ Bowl</div>
                        <div className="text-sm font-bold">$18.99</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Phone 2 - Foreground */}
            <div className="relative z-10 transform -rotate-6 animate-float-delayed">
              <div className="w-72 h-144 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative">
                  {/* Phone Screen Content */}
                  <div className="absolute inset-2 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-4">
                    <div className="text-white space-y-4">
                      <div className="flex items-center justify-between mb-6">
                        <div className="text-lg font-bold">Your Order</div>
                        <div className="w-6 h-6 bg-white rounded-full"></div>
                      </div>
                      
                      <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 space-y-3">
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="text-sm font-semibold">Delivery in</div>
                            <div className="text-2xl font-bold">12 min</div>
                          </div>
                          <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center">
                            <Clock className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        
                        <div className="h-1 bg-white/30 rounded-full">
                          <div className="h-full w-3/4 bg-white rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="bg-white/10 rounded-lg p-2 flex gap-3">
                          <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-xs">Truffle Risotto</div>
                            <div className="text-sm font-bold">$24.99 × 1</div>
                          </div>
                        </div>
                        
                        <div className="bg-white/10 rounded-lg p-2 flex gap-3">
                          <div className="w-10 h-10 bg-white/30 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="text-xs">Chocolate Cake</div>
                            <div className="text-sm font-bold">$8.99 × 1</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Home Indicator */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-20 left-10 bg-yellow-400 text-yellow-900 px-3 py-2 rounded-full text-sm font-bold animate-bounce">
              20% OFF
            </div>
            <div className="absolute bottom-32 right-4 bg-green-400 text-green-900 px-3 py-2 rounded-full text-sm font-bold animate-pulse">
              FREE Delivery
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(12deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(-6deg); }
          50% { transform: translateY(-15px) rotate(-6deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 6s ease-in-out infinite 2s;
        }
        
        .h-128 { height: 32rem; }
        .h-144 { height: 36rem; }
      `}</style>
    </div>
    <NewsletterSignup />
 
    </div>
  );
};

export default HomePage;
