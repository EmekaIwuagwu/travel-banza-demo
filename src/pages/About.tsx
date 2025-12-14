import { Star, Globe, Users, Award } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function About() {
  const navigate = useNavigate()
  const features = [
    {
      icon: <Star className="w-8 h-8" />,
      title: 'Expert Curation',
      description: 'Our team of travel experts handpicks the best destinations and experiences for you.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Global Reach',
      description: 'From local gems to international hotspots, we cover destinations worldwide.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Personalized Service',
      description: 'Tailored recommendations based on your preferences and travel style.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Quality Guarantee',
      description: 'We partner with trusted providers to ensure the best experience.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      location: 'New York, USA',
      quote: 'Travel Banza made our honeymoon unforgettable! Everything was perfectly planned.',
      rating: 5
    },
    {
      name: 'Marcus Chen',
      location: 'London, UK',
      quote: 'Best travel experience I have ever had. The customer service is outstanding.',
      rating: 5
    },
    {
      name: 'Ana Rodriguez',
      location: 'Madrid, Spain',
      quote: 'Found amazing deals and unique experiences I would have never discovered on my own.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-accent-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Travel Banza
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                We believe that travel is not just about visiting new places, but about creating 
                unforgettable memories and experiences that last a lifetime. Our mission is to 
                make your travel dreams a reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => navigate('/destinations')}
                  className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                >
                  Explore Destinations
                </button>
                <button 
                  onClick={() => navigate('/contact')}
                  className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-300"
                >
                  Contact Us
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073&auto=format&fit=crop"
                  alt="Beautiful beach"
                  className="rounded-2xl object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop"
                  alt="Cityscape"
                  className="rounded-2xl object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1508515352239-432318374bd5?q=80&w=2070&auto=format&fit=crop"
                  alt="Mountains"
                  className="rounded-2xl object-cover h-64 w-full"
                />
                <img
                  src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop"
                  alt="Adventure"
                  className="rounded-2xl object-cover h-64 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Travel Banza?
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We go above and beyond to provide you with exceptional travel experiences 
              that are tailored to your needs and preferences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-soft border border-gray-100 text-center group hover:shadow-hard transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-600 transition-colors duration-300">
                  <div className="text-primary-600 group-hover:text-white transition-colors duration-300">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=2070&auto=format&fit=crop"
                alt="Our team"
                className="rounded-2xl object-cover w-full h-[500px]"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2020, Travel Banza started with a simple mission: to make travel 
                accessible, enjoyable, and stress-free for everyone. What began as a small 
                team of travel enthusiasts has grown into a global platform serving thousands 
                of happy customers.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We've helped people explore over 100 countries, created countless memories, 
                and built a community of travel lovers who trust us to plan their adventures.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">100+</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">10K+</div>
                  <div className="text-gray-600">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">500+</div>
                  <div className="text-gray-600">Destinations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-gray-300 text-lg">
              Don't just take our word for it. Here's what our customers have to say about their experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <div className="flex items-center space-x-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-gray-600 text-lg mb-8">
            Join thousands of happy travelers who have discovered their dream destinations with Travel Banza.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => navigate('/destinations')}
              className="btn-primary px-8 py-3 text-lg"
            >
              Browse Destinations
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="btn-secondary px-8 py-3 text-lg"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
