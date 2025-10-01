import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaFilter, FaTimes, FaMapMarkerAlt, FaCalendarAlt, FaRupeeSign, FaStar, FaUsers } from 'react-icons/fa';

// Comprehensive packages data for filtering
const allPackagesData = [
  // Kashmir Tour Packages
  { id: 1, name: "Glimpse of Kashmir Tour", nights: 3, days: 4, category: "Kashmir Tour", price: 10999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Sightseeing", "Shikara Ride"], link: "/packages/3-nights-4-days-srinagar-pahalgam-gulmarg-tour", rating: 4.5, bestFor: "Couples", season: "All Season" },
  { id: 2, name: "Kashmir Family Tour", nights: 5, days: 6, category: "Family", price: 11999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Family Activities", "Sightseeing"], link: "/packages/kashmir-family-tour", rating: 4.7, bestFor: "Families", season: "Summer" },
  { id: 3, name: "Kashmir Honeymoon Tour", nights: 3, days: 4, category: "Honeymoon", price: 13999, locations: ["Srinagar", "Pahalgam"], activities: ["Romantic Dinner", "Shikara Ride"], link: "/packages/kashmir-honeymoon-tour", rating: 4.8, bestFor: "Couples", season: "All Season" },
  { id: 4, name: "Kashmir Gulmarg Tour", nights: 3, days: 4, category: "Adventure", price: 10999, locations: ["Gulmarg", "Srinagar"], activities: ["Skiing", "Gondola Ride"], link: "/packages/kashmir-gulmarg-tour", rating: 4.6, bestFor: "Adventure Seekers", season: "Winter" },
  { id: 5, name: "Kashmir Houseboat Tour", nights: 3, days: 4, category: "Luxury", price: 8999, locations: ["Srinagar"], activities: ["Houseboat Stay", "Dal Lake"], link: "/packages/kashmir-houseboat-tour", rating: 4.4, bestFor: "Couples", season: "Summer" },
  { id: 6, name: "Kashmir Package with Patnitop", nights: 8, days: 9, category: "Extended", price: 21999, locations: ["Srinagar", "Pahalgam", "Gulmarg", "Patnitop"], activities: ["Hill Station", "Sightseeing"], link: "/packages/kashmir-package-with-patnitop", rating: 4.5, bestFor: "Families", season: "Summer" },
  { id: 7, name: "Kashmir Pahalgam Tour", nights: 5, days: 6, category: "Kashmir Tour", price: 11999, locations: ["Pahalgam", "Srinagar"], activities: ["Valley Tour", "River Rafting"], link: "/packages/kashmir-pahalgam-tour", rating: 4.6, bestFor: "Nature Lovers", season: "Summer" },
  { id: 8, name: "Kashmir Valley Tour", nights: 7, days: 8, category: "Extended", price: 16999, locations: ["Srinagar", "Pahalgam", "Gulmarg", "Sonamarg"], activities: ["Complete Valley", "Adventure"], link: "/packages/kashmir-valley-tour", rating: 4.7, bestFor: "All", season: "Summer" },
  { id: 9, name: "Kashmir with Jammu Tour", nights: 6, days: 7, category: "Cultural", price: 14999, locations: ["Jammu", "Srinagar", "Pahalgam"], activities: ["Cultural Sites", "Temples"], link: "/packages/kashmir-with-jammu-tour", rating: 4.5, bestFor: "Pilgrims", season: "All Season" },
  { id: 10, name: "Kashmir with Vaishno Devi Tour", nights: 8, days: 9, category: "Pilgrimage", price: 20999, locations: ["Jammu", "Vaishno Devi", "Srinagar"], activities: ["Pilgrimage", "Sightseeing"], link: "/packages/kashmir-with-vaishno-devi", rating: 4.8, bestFor: "Pilgrims", season: "All Season" },
  
  // Honeymoon Special Packages
  { id: 11, name: "Glimpses Of Family Tour", nights: 3, days: 4, category: "Honeymoon", price: 12999, locations: ["Srinagar"], activities: ["Romantic", "Shikara Ride"], link: "/packages/glimpses-of-family-tour", rating: 4.7, bestFor: "Couples", season: "All Season" },
  { id: 12, name: "Magical Kashmir Tour", nights: 4, days: 5, category: "Honeymoon", price: 15999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Romantic Dinner", "Houseboat"], link: "/packages/honeymoon-magical-kashmir-tour", rating: 4.8, bestFor: "Couples", season: "Summer" },
  { id: 13, name: "Best Selling Kashmir Tour", nights: 5, days: 6, category: "Bestseller", price: 19999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Complete Package", "Adventure"], link: "/packages/best-selling-kashmir-tour", rating: 4.9, bestFor: "All", season: "Summer" },
  { id: 14, name: "Scenic Kashmir Tour", nights: 6, days: 7, category: "Honeymoon", price: 23999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Scenic Views", "Photography"], link: "/packages/scenic-kashmir-tour", rating: 4.7, bestFor: "Couples", season: "Summer" },
  { id: 15, name: "Kashmir Marvelous Tour", nights: 6, days: 7, category: "Luxury", price: 27999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Luxury Stay", "Premium Services"], link: "/packages/kashmir-marvelous-tour", rating: 4.8, bestFor: "Luxury Travelers", season: "Summer" },
  
  // Adventure Winter Packages
  { id: 16, name: "Gulmarg Skiing Package", nights: 4, days: 5, category: "Adventure", price: 18999, locations: ["Gulmarg", "Srinagar"], activities: ["Skiing", "Snow Activities"], link: "/packages/gulmarg-skiing-package", rating: 4.6, bestFor: "Adventure Seekers", season: "Winter" },
  { id: 17, name: "Winter Wonderland Kashmir", nights: 5, days: 6, category: "Adventure", price: 22999, locations: ["Gulmarg", "Pahalgam", "Srinagar"], activities: ["Snow Sports", "Winter Trekking"], link: "/packages/winter-wonderland-kashmir", rating: 4.5, bestFor: "Adventure Seekers", season: "Winter" },
  
  // Cultural Tours
  { id: 18, name: "Gurez Valley Tour", nights: 4, days: 5, category: "Cultural", price: 16999, locations: ["Gurez Valley", "Srinagar"], activities: ["Cultural Experience", "Local Life"], link: "/packages/gurez-valley-tour", rating: 4.4, bestFor: "Culture Enthusiasts", season: "Summer" },
  { id: 19, name: "Kashmir Cultural Experience", nights: 6, days: 7, category: "Cultural", price: 19999, locations: ["Srinagar", "Pahalgam", "Local Villages"], activities: ["Cultural Tours", "Local Crafts"], link: "/packages/kashmir-cultural-experience", rating: 4.6, bestFor: "Culture Enthusiasts", season: "All Season" },
  
  // Family Packages
  { id: 20, name: "Kashmir Family Delight", nights: 5, days: 6, category: "Family", price: 24999, locations: ["Srinagar", "Pahalgam", "Gulmarg"], activities: ["Family Activities", "Kid-Friendly"], link: "/packages/kashmir-family-delight", rating: 4.7, bestFor: "Families", season: "Summer" },
  { id: 21, name: "Premium Family Package", nights: 7, days: 8, category: "Family", price: 32999, locations: ["Srinagar", "Pahalgam", "Gulmarg", "Sonamarg"], activities: ["Luxury Family Stay", "All Activities"], link: "/packages/premium-family-package", rating: 4.8, bestFor: "Families", season: "Summer" }
];

const SearchFilterComponent = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPackages, setFilteredPackages] = useState(allPackagesData);
  const [showResults, setShowResults] = useState(false);
  
  // Filter states
  const [filters, setFilters] = useState({
    duration: '',
    category: '',
    location: '',
    priceRange: '',
    bestFor: '',
    season: '',
    minRating: ''
  });

  // Filter options
  const filterOptions = {
    duration: ['3-4 Days', '5-6 Days', '7-8 Days', '9+ Days'],
    category: ['Kashmir Tour', 'Honeymoon', 'Adventure', 'Family', 'Cultural', 'Luxury', 'Pilgrimage', 'Bestseller'],
    location: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonamarg', 'Jammu', 'Patnitop', 'Gurez Valley'],
    priceRange: ['Under ₹15,000', '₹15,000-₹20,000', '₹20,000-₹25,000', 'Above ₹25,000'],
    bestFor: ['Couples', 'Families', 'Adventure Seekers', 'Nature Lovers', 'Culture Enthusiasts', 'Luxury Travelers', 'Pilgrims'],
    season: ['All Season', 'Summer', 'Winter'],
    minRating: ['4.0+', '4.5+', '4.7+']
  };

  // Apply filters
  useEffect(() => {
    let filtered = allPackagesData;

    // Search term filter
    if (searchTerm) {
      filtered = filtered.filter(pkg => 
        pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pkg.locations.some(loc => loc.toLowerCase().includes(searchTerm.toLowerCase())) ||
        pkg.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Duration filter
    if (filters.duration) {
      filtered = filtered.filter(pkg => {
        const duration = `${pkg.nights}-${pkg.days} Days`;
        if (filters.duration === '3-4 Days') return pkg.days <= 4;
        if (filters.duration === '5-6 Days') return pkg.days >= 5 && pkg.days <= 6;
        if (filters.duration === '7-8 Days') return pkg.days >= 7 && pkg.days <= 8;
        if (filters.duration === '9+ Days') return pkg.days >= 9;
        return true;
      });
    }

    // Category filter
    if (filters.category) {
      filtered = filtered.filter(pkg => pkg.category === filters.category);
    }

    // Location filter
    if (filters.location) {
      filtered = filtered.filter(pkg => pkg.locations.includes(filters.location));
    }

    // Price range filter
    if (filters.priceRange) {
      filtered = filtered.filter(pkg => {
        if (filters.priceRange === 'Under ₹15,000') return pkg.price < 15000;
        if (filters.priceRange === '₹15,000-₹20,000') return pkg.price >= 15000 && pkg.price <= 20000;
        if (filters.priceRange === '₹20,000-₹25,000') return pkg.price >= 20000 && pkg.price <= 25000;
        if (filters.priceRange === 'Above ₹25,000') return pkg.price > 25000;
        return true;
      });
    }

    // Best for filter
    if (filters.bestFor) {
      filtered = filtered.filter(pkg => pkg.bestFor === filters.bestFor);
    }

    // Season filter
    if (filters.season) {
      filtered = filtered.filter(pkg => pkg.season === filters.season || pkg.season === 'All Season');
    }

    // Rating filter
    if (filters.minRating) {
      const minRating = parseFloat(filters.minRating.replace('+', ''));
      filtered = filtered.filter(pkg => pkg.rating >= minRating);
    }

    setFilteredPackages(filtered);
    setShowResults(searchTerm || Object.values(filters).some(filter => filter));
  }, [searchTerm, filters]);

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({ ...prev, [filterType]: value }));
  };

  const clearFilters = () => {
    setFilters({
      duration: '',
      category: '',
      location: '',
      priceRange: '',
      bestFor: '',
      season: '',
      minRating: ''
    });
    setSearchTerm('');
    setShowResults(false);
  };

  const activeFiltersCount = Object.values(filters).filter(filter => filter).length;

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Your Perfect Kashmir Package</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Search and filter from our collection of handpicked Kashmir tour packages tailored for every traveler
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Input */}
            <div className="flex-1 relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search packages, destinations, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* Filter Toggle Button */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                showFilters || activeFiltersCount > 0
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <FaFilter />
              Filters
              {activeFiltersCount > 0 && (
                <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Clear Filters */}
            {activeFiltersCount > 0 && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-2 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <FaTimes />
                Clear All
              </button>
            )}
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Duration Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaCalendarAlt className="inline mr-2" />
                    Duration
                  </label>
                  <select
                    value={filters.duration}
                    onChange={(e) => handleFilterChange('duration', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Duration</option>
                    {filterOptions.duration.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaStar className="inline mr-2" />
                    Category
                  </label>
                  <select
                    value={filters.category}
                    onChange={(e) => handleFilterChange('category', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Categories</option>
                    {filterOptions.category.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaMapMarkerAlt className="inline mr-2" />
                    Location
                  </label>
                  <select
                    value={filters.location}
                    onChange={(e) => handleFilterChange('location', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">All Locations</option>
                    {filterOptions.location.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Price Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaRupeeSign className="inline mr-2" />
                    Price Range
                  </label>
                  <select
                    value={filters.priceRange}
                    onChange={(e) => handleFilterChange('priceRange', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Price</option>
                    {filterOptions.priceRange.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Best For Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <FaUsers className="inline mr-2" />
                    Best For
                  </label>
                  <select
                    value={filters.bestFor}
                    onChange={(e) => handleFilterChange('bestFor', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Anyone</option>
                    {filterOptions.bestFor.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Season Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                  <select
                    value={filters.season}
                    onChange={(e) => handleFilterChange('season', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Season</option>
                    {filterOptions.season.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                {/* Rating Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                  <select
                    value={filters.minRating}
                    onChange={(e) => handleFilterChange('minRating', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Any Rating</option>
                    {filterOptions.minRating.map(option => (
                      <option key={option} value={option}>{option} Stars</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results */}
        {showResults && (
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900">
                Search Results ({filteredPackages.length} packages found)
              </h3>
            </div>

            {filteredPackages.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map(pkg => (
                  <div key={pkg.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="font-semibold text-gray-900 text-lg">{pkg.name}</h4>
                      <div className="flex items-center gap-1">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-sm text-gray-600">{pkg.rating}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaCalendarAlt className="text-blue-500" />
                        <span>{pkg.nights} Nights / {pkg.days} Days</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaMapMarkerAlt className="text-green-500" />
                        <span>{pkg.locations.join(', ')}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <FaUsers className="text-purple-500" />
                        <span>Best for: {pkg.bestFor}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <FaRupeeSign className="text-green-600" />
                        <span className="font-bold text-lg text-green-600">₹{pkg.price.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                        {pkg.category}
                      </span>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full ml-2">
                        {pkg.season}
                      </span>
                    </div>
                    
                    <Link
                      to={pkg.link}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200 block"
                    >
                      View Details
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 mb-4">
                  <FaSearch className="mx-auto text-4xl" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No packages found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your search criteria or filters</p>
                <button
                  onClick={clearFilters}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchFilterComponent;