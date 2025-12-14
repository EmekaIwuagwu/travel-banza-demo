import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { 
  Search, 
  Calendar, 
  Users, 
  Star,
  Plane,
  Mountain,
  Castle
} from 'lucide-react'
import { destinations } from '../data/destinations'

export default function Home() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [travelDate, setTravelDate] = useState('')

  const popularDestinations = destinations.slice(0, 6)
  const featuredDestinations = destinations.slice(6, 9)

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (travelers) params.set('travelers', travelers.toString())
    if (travelDate) params.set('date', travelDate)
    navigate(`/destinations?${params.toString()}`)
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Discover Your
              <span className="text-primary-400"> Perfect</span> Getaway
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
              Explore breathtaking destinations, find amazing deals, and book your dream vacation with ease. 
              Your journey starts here.
            </p>
          </div>

          {/* Search Form */}
          <div className="animate-slide-up bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-soft border border-white/20 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
              <div className="md:col-span-2">
                <label className="block text-white text-sm font-medium mb-2">Destination</label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Where do you want to go?"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm font-medium mb-2">Travelers</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(parseInt(e.target.value))}
                    className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 appearance-none"
                  >
                    <option value={1}>1 Person</option>
                    <option value={2}>2 People</option>
                    <option value={3}>3 People</option>
                    <option value={4}>4 People</option>
                    <option value={5}>5+ People</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleSearch}
                className="btn-primary flex-1 py-3 text-lg"
              >
                Search Destinations
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2 py-3">
                <Plane className="w-5 h-5" />
                Advanced Search
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={() => {
              const element = document.getElementById('popular-destinations')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
            className="flex items-center gap-2 text-white hover:text-primary-400 transition-colors duration-300"
          >
            <span>Scroll to explore</span>
            <div className="animate-bounce">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </button>
        </div>
      </section>

      {/* Popular Destinations */}
      <section id="popular-destinations" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Destinations
            </h2>
            <p className="text-gray-600 text-lg">
              Discover the world's most loved travel destinations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button 
              onClick={() => navigate('/destinations')}
              className="btn-primary px-8 py-3 text-lg"
            >
              View All Destinations
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Experiences
            </h2>
            <p className="text-gray-600 text-lg">
              Handpicked experiences for your next adventure
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredDestinations.map((destination) => (
              <FeaturedCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Travel Banza?
            </h2>
            <p className="text-gray-300 text-lg">
              We make travel planning simple, affordable, and unforgettable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Star className="w-8 h-8" />}
              title="Best Price Guarantee"
              description="We offer the best prices with our price match promise"
            />
            <FeatureCard
              icon={<Mountain className="w-8 h-8" />}
              title="Expert Planning"
              description="Our travel experts craft perfect itineraries for you"
            />
            <FeatureCard
              icon={<Calendar className="w-8 h-8" />}
              title="24/7 Support"
              description="Round-the-clock support for all your travel needs"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function DestinationCard({ destination }: { destination: any }) {
  return (
    <div className="card group cursor-pointer overflow-hidden hover:scale-105 transition-transform duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="badge">{destination.category}</span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-semibold">{destination.name}</h3>
          <p className="text-gray-200 text-sm">{destination.country}</p>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm text-gray-600">{destination.rating}</span>
          </div>
          <span className="text-primary-600 font-semibold">${destination.price}/night</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{destination.description}</p>
        <button className="btn-primary w-full">Explore {destination.name}</button>
      </div>
    </div>
  )
}

function FeaturedCard({ destination }: { destination: any }) {
  return (
    <div className="relative group">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-2xl transform rotate-1 scale-100 group-hover:rotate-0 transition-transform duration-300"></div>
      <div className="relative bg-white rounded-2xl p-6 md:p-8 shadow-soft">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{destination.name}</h3>
          <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
            {destination.category === 'Beach' ? (
              <Castle className="w-6 h-6 text-white" />
            ) : destination.category === 'Historical' ? (
              <Castle className="w-6 h-6 text-white" />
            ) : (
              <Mountain className="w-6 h-6 text-white" />
            )}
          </div>
        </div>
        <p className="text-gray-600 mb-6">{destination.shortDescription}</p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${destination.price}</span>
          <button className="btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="card p-6 text-center group hover:shadow-hard transition-shadow duration-300">
      <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
        <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
