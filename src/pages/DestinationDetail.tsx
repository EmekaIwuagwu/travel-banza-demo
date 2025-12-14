import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { 
  Star, 
  MapPin, 
  Users, 
  Calendar, 
  Clock, 
  DollarSign,
  Heart,
  Share2,
  ArrowLeft
} from 'lucide-react'
import { destinations, type Destination } from '../data/destinations'

export default function DestinationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedDate, setSelectedDate] = useState('')
  const [travelers, setTravelers] = useState(2)
  const [isWishlisted, setIsWishlisted] = useState(false)

  const destination = destinations.find(d => d.id === id)

  if (!destination) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">✈️</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Destination Not Found</h1>
          <p className="text-gray-600 mb-6">The destination you're looking for doesn't exist</p>
          <button onClick={() => navigate('/destinations')} className="btn-primary">
            Back to Destinations
          </button>
        </div>
      </div>
    )
  }

  const handleBooking = () => {
    const params = new URLSearchParams()
    params.set('destination', destination.id)
    if (selectedDate) params.set('date', selectedDate)
    params.set('travelers', travelers.toString())
    navigate(`/booking?${params.toString()}`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[60vh] min-h-[400px]">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
            <button
              onClick={() => navigate('/destinations')}
              className="bg-white/90 hover:bg-white p-2 rounded-full shadow-soft transition-colors duration-200"
            >
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={`p-3 rounded-full shadow-soft transition-colors duration-200 ${
                  isWishlisted ? 'bg-red-500 text-white' : 'bg-white/90 hover:bg-white text-gray-700'
                }`}
              >
                <Heart className="w-5 h-5" fill={isWishlisted ? 'currentColor' : 'none'} />
              </button>
              <button className="bg-white/90 hover:bg-white p-3 rounded-full shadow-soft transition-colors duration-200">
                <Share2 className="w-5 h-5 text-gray-700" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-6 left-6 right-6 max-w-7xl mx-auto">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {destination.name}
                </h1>
                <div className="flex items-center space-x-4 text-white/90">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{destination.country}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <span>{destination.rating}</span>
                  </div>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                    {destination.category}
                  </span>
                </div>
              </div>
              <div className="hidden lg:block bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-soft">
                <div className="text-2xl font-bold text-gray-900">
                  ${destination.price}
                  <span className="text-sm font-normal text-gray-600">/night</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <section className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About {destination.name}</h2>
              <p className="text-gray-700 leading-relaxed mb-6">{destination.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold">Best Time to Visit</div>
                    <div className="text-gray-600 text-sm">{destination.bestTimeToVisit}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold">Recommended Group Size</div>
                    <div className="text-gray-600 text-sm">{destination.groupSize}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold">Suggested Duration</div>
                    <div className="text-gray-600 text-sm">{destination.duration}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-5 h-5 text-primary-600" />
                  <div>
                    <div className="font-semibold">Starting Price</div>
                    <div className="text-gray-600 text-sm">${destination.price}/night</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Highlights */}
            <section className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-900">{highlight}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Activities */}
            <section className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Activities</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {destination.activities.map((activity, index) => (
                  <div key={index} className="p-3 rounded-lg bg-gray-50 text-center">
                    <span className="text-gray-900">{activity}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Booking Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-6 space-y-6">
              {/* Booking Form */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Book Your Trip</h3>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Travel Date</label>
                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Number of Travelers</label>
                    <select
                      value={travelers}
                      onChange={(e) => setTravelers(parseInt(e.target.value))}
                      className="w-full px-3 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    >
                      <option value={1}>1 Person</option>
                      <option value={2}>2 People</option>
                      <option value={3}>3 People</option>
                      <option value={4}>4 People</option>
                      <option value={5}>5+ People</option>
                    </select>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-700">Base Price</span>
                    <span className="font-semibold">${destination.price}/night</span>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>Taxes & Fees</span>
                    <span>Calculated at checkout</span>
                  </div>
                </div>

                <button 
                  onClick={handleBooking}
                  className="btn-primary w-full py-3 text-lg mb-4"
                >
                  Book Now
                </button>
                
                <div className="text-center text-sm text-gray-600">
                  Free cancellation until 24 hours before check-in
                </div>
              </div>

              {/* Travel Tips */}
              <div className="bg-white rounded-2xl shadow-soft border border-gray-100 p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Travel Tips</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Book at least 2-3 months in advance for best prices</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Check visa requirements for your nationality</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-700">Pack according to the season and local customs</span>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
