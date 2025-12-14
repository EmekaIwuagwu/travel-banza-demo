import { useState, useEffect } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { 
  Search, 
  Filter,
  SlidersHorizontal,
  Star,
  MapPin,
  Users,
  Calendar
} from 'lucide-react'
import { destinations, categories, type Destination } from '../data/destinations'

export default function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  
  const [query, setQuery] = useState(searchParams.get('q') || '')
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.get('categories')?.split(',') || []
  )
  const [minPrice, setMinPrice] = useState<number>(
    parseInt(searchParams.get('minPrice') || '0')
  )
  const [maxPrice, setMaxPrice] = useState<number>(
    parseInt(searchParams.get('maxPrice') || '500')
  )
  const [sortBy, setSortBy] = useState<'price' | 'rating' | 'name'>(
    (searchParams.get('sortBy') as any) || 'rating'
  )
  const [showFilters, setShowFilters] = useState(false)

  const allDestinations = destinations
  const maxPriceRange = Math.max(...allDestinations.map(d => d.price))

  useEffect(() => {
    const params: Record<string, string> = {}
    if (query) params.q = query
    if (selectedCategories.length > 0) params.categories = selectedCategories.join(',')
    if (minPrice > 0) params.minPrice = minPrice.toString()
    if (maxPrice < maxPriceRange) params.maxPrice = maxPrice.toString()
    if (sortBy !== 'rating') params.sortBy = sortBy
    
    const search = new URLSearchParams(params).toString()
    navigate(`/destinations${search ? '?' + search : ''}`, { replace: true })
  }, [query, selectedCategories, minPrice, maxPrice, sortBy, navigate])

  const filteredDestinations = allDestinations
    .filter(dest => {
      const matchesQuery = query 
        ? dest.name.toLowerCase().includes(query.toLowerCase()) || 
          dest.country.toLowerCase().includes(query.toLowerCase()) ||
          dest.description.toLowerCase().includes(query.toLowerCase())
        : true
      
      const matchesCategory = selectedCategories.length > 0
        ? selectedCategories.includes(dest.category)
        : true
      
      const matchesPrice = dest.price >= minPrice && dest.price <= maxPrice
      
      return matchesQuery && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price':
          return a.price - b.price
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const clearFilters = () => {
    setQuery('')
    setSelectedCategories([])
    setMinPrice(0)
    setMaxPrice(maxPriceRange)
    setSortBy('rating')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Find Your Perfect
              <span className="text-primary-600"> Destination</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover amazing places to visit, explore new cultures, and create unforgettable memories
            </p>
          </div>
          
          {/* Search Bar */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search destinations, countries, or activities..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className="btn-secondary flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-5 h-5" />
                  Filters
                </button>
                <button className="btn-primary">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">Filters</h3>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear all
                </button>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <label key={category.name} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category.name)}
                        onChange={() => handleCategoryToggle(category.name)}
                        className="rounded border-gray-300 text-primary-600 focus:ring-primary-500"
                      />
                      <span className="flex items-center space-x-2">
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>Min: ${minPrice}</span>
                    <span>Max: ${maxPrice}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max={maxPriceRange}
                    value={minPrice}
                    onChange={(e) => setMinPrice(parseInt(e.target.value))}
                    className="w-full"
                  />
                  <input
                    type="range"
                    min="0"
                    max={maxPriceRange}
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(parseInt(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Sort */}
              <div>
                <h4 className="font-medium mb-3">Sort By</h4>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="rating">Highest Rated</option>
                  <option value="price">Price: Low to High</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  {filteredDestinations.length} Destinations
                </h2>
                {query && (
                  <span className="text-sm text-gray-600">
                    for "{query}"
                  </span>
                )}
              </div>
              <div className="flex items-center space-x-2 lg:hidden">
                <button 
                  onClick={() => setShowFilters(false)}
                  className="text-sm text-gray-600"
                >
                  Close
                </button>
              </div>
            </div>

            {/* Destinations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">✈️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No destinations found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search criteria or filters</p>
                <button onClick={clearFilters} className="btn-primary">
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}

function DestinationCard({ destination }: { destination: Destination }) {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-gray-100 overflow-hidden group hover:shadow-hard transition-shadow duration-300">
      <div className="relative overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className={`badge bg-gradient-to-r ${getCategoryColor(destination.category)} text-white`}>
            {destination.category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <button className="bg-white/90 hover:bg-white p-2 rounded-full shadow-soft transition-colors duration-200">
            <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <h3 className="text-xl font-semibold">{destination.name}</h3>
              <p className="text-sm text-white/90">{destination.country}</p>
            </div>
            <div className="flex items-center space-x-2 bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="text-sm font-medium">{destination.rating}</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{destination.country}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{destination.groupSize}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{destination.duration}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">${destination.price}</div>
            <div className="text-xs text-gray-500">per night</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="btn-primary flex-1">
            View Details
          </button>
          <button className="btn-secondary ml-3">
            Book Now
          </button>
        </div>
      </div>
    </div>
  )
}

function getCategoryColor(category: string) {
  switch (category) {
    case 'Beach': return 'from-blue-500 to-cyan-500'
    case 'Mountain': return 'from-green-500 to-emerald-500'
    case 'City': return 'from-purple-500 to-pink-500'
    case 'Historical': return 'from-amber-500 to-orange-500'
    case 'Adventure': return 'from-red-500 to-rose-500'
    default: return 'from-gray-500 to-gray-600'
  }
}
