"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Camera,
  Video,
  Heart,
  Star,
  ArrowRight,
  Play,
  Award,
  Users,
} from "lucide-react"

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const portfolioCategories = [
    {
      title: "WEDDINGS",
      description: "Capturing love stories with cinematic elegance",
      image: "/placeholder.svg?height=400&width=600",
      count: "150+ Weddings",
    },
    {
      title: "CORPORATE",
      description: "Professional imagery for business excellence",
      image: "/placeholder.svg?height=400&width=600",
      count: "200+ Projects",
    },
    {
      title: "FASHION",
      description: "Editorial and commercial fashion photography",
      image: "/placeholder.svg?height=400&width=600",
      count: "100+ Shoots",
    },
    {
      title: "PACKAGES",
      description: "Comprehensive photography solutions",
      image: "/placeholder.svg?height=400&width=600",
      count: "Custom Plans",
    },
    {
      title: "BTS",
      description: "Behind the scenes and candid moments",
      image: "/placeholder.svg?height=400&width=600",
      count: "50+ Stories",
    },
    {
      title: "REVIEWS",
      description: "Client testimonials and experiences",
      image: "/placeholder.svg?height=400&width=600",
      count: "5★ Rating",
    },
  ]

  const testimonials = [
    {
      name: "Aisha & Ahmed",
      event: "Wedding Photography",
      text: "Hamza captured our special day with such artistry and emotion. Every photo tells our love story perfectly.",
      rating: 5,
    },
    {
      name: "Fatima Khan",
      event: "Fashion Shoot",
      text: "Professional, creative, and incredibly talented. The photos exceeded all my expectations.",
      rating: 5,
    },
    {
      name: "Tech Solutions Ltd",
      event: "Corporate Event",
      text: "Outstanding work on our company event. Hamza understood our vision and delivered exceptional results.",
      rating: 5,
    },
  ]

  const stats = [
    { icon: Camera, number: "500+", label: "Projects Completed" },
    { icon: Users, number: "300+", label: "Happy Clients" },
    { icon: Award, number: "5", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Average Rating" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Camera className="h-8 w-8 text-primary" />
              <span className="font-serif text-xl font-bold">Visuals by Hamza</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="hover:text-primary transition-colors">
                HOME
              </a>
              <a href="#portfolio" className="hover:text-primary transition-colors">
                PORTFOLIO
              </a>
              <a href="#about" className="hover:text-primary transition-colors">
                ABOUT
              </a>
              <a href="#services" className="hover:text-primary transition-colors">
                SERVICES
              </a>
              <a href="#contact" className="hover:text-primary transition-colors">
                CONTACT
              </a>
            </div>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Book Session</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div
          className={`relative z-10 text-center max-w-4xl mx-auto px-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30">Visual Storyteller</Badge>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            TURNING MOMENTS INTO
            <span className="block text-primary">CINEMATIC ART</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Based in Lahore, Pakistan • Covering all Pakistan • Available for bookings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              <Phone className="mr-2 h-5 w-5" />
              +92 302 4939706
            </Button>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowRight className="h-6 w-6 text-primary rotate-90" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-3xl font-bold font-serif mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Portfolio</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              OUR <span className="text-primary">SPECIALTIES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From intimate weddings to corporate events, we capture every moment with artistic precision
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioCategories.map((category, index) => (
              <Card
                key={index}
                className={`group overflow-hidden bg-card border-border hover-scale hover-glow cursor-pointer ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-primary/90 text-primary-foreground">{category.count}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <Button variant="ghost" className="text-primary hover:text-primary-foreground hover:bg-primary p-0">
                    View Gallery <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">About Hamza</Badge>
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                PASSIONATE ABOUT
                <span className="block text-primary">VISUAL STORYTELLING</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 5 years of experience in photography and videography, I specialize in capturing the essence of
                life's most precious moments. Based in the vibrant city of Lahore, I've had the privilege of documenting
                hundreds of weddings, corporate events, and fashion shoots across Pakistan.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                My approach combines technical expertise with artistic vision, ensuring every frame tells a compelling
                story. From the intimate glances between newlyweds to the dynamic energy of corporate events, I believe
                in creating timeless imagery that resonates with emotion.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Camera className="h-5 w-5 text-primary" />
                  <span>Professional Photography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Video className="h-5 w-5 text-primary" />
                  <span>Cinematic Videography</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span>Passionate Storytelling</span>
                </div>
              </div>
            </div>
            <div className={`${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <div className="relative">
                <img
                  src="/placeholder.svg?height=600&width=500"
                  alt="Hamza - Professional Photographer"
                  className="w-full rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg">
                  <div className="text-2xl font-bold font-serif">5+</div>
                  <div className="text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Testimonials</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              WHAT OUR <span className="text-primary">CLIENTS SAY</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className={`bg-card border-border hover-glow ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.event}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Packages */}
      <section id="services" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Services</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              PHOTOGRAPHY <span className="text-primary">PACKAGES</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tailored packages to capture your special moments with professional excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-background border-border hover-glow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Wedding Package</h3>
                  <p className="text-muted-foreground">Complete wedding day coverage</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Full day photography</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Cinematic highlights video</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>500+ edited photos</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Online gallery</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover-glow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Video className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Corporate Package</h3>
                  <p className="text-muted-foreground">Professional business photography</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Event documentation</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Team headshots</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Product photography</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Same-day delivery</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Quote</Button>
              </CardContent>
            </Card>

            <Card className="bg-background border-border hover-glow">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-2">Fashion Package</h3>
                  <p className="text-muted-foreground">Editorial and commercial shoots</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Studio or location shoot</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Professional retouching</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>Multiple outfit changes</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>High-resolution files</span>
                  </li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Quote</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">Contact</Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              LET'S CREATE <span className="text-primary">TOGETHER</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to capture your special moments? Get in touch and let's discuss your vision
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className={`${isVisible ? "animate-fade-in-left" : "opacity-0"}`}>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground">+92 302 4939706</p>
                    <p className="text-sm text-primary">Available for bookings</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">visuals.by.hamza@gmail.com</p>
                    <p className="text-sm text-primary">Quick response guaranteed</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-muted-foreground">Based in Lahore, Pakistan</p>
                    <p className="text-sm text-primary">Covering all Pakistan</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Instagram className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <p className="text-muted-foreground">@visuals_by_hamza</p>
                    <p className="text-sm text-primary">492 posts • 5,039 followers</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className={`bg-card border-border ${isVisible ? "animate-fade-in-right" : "opacity-0"}`}>
              <CardContent className="p-8">
                <h3 className="font-serif text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Name</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Event Type</label>
                    <select className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                      <option>Select event type</option>
                      <option>Wedding</option>
                      <option>Corporate Event</option>
                      <option>Fashion Shoot</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Tell us about your event and vision..."
                    ></textarea>
                  </div>
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 hover-glow">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Camera className="h-8 w-8 text-primary" />
                <span className="font-serif text-xl font-bold">Visuals by Hamza</span>
              </div>
              <p className="text-muted-foreground mb-4 max-w-md">
                Visual Storyteller turning moments into cinematic art. Based in Lahore, covering all Pakistan with
                professional photography and videography services.
              </p>
              <div className="flex space-x-4">
                <Instagram className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
                <Facebook className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
                <Mail className="h-6 w-6 text-primary hover:text-primary/80 cursor-pointer" />
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Wedding Photography
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Corporate Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Fashion Shoots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Videography
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>+92 302 4939706</li>
                <li>visuals.by.hamza@gmail.com</li>
                <li>Lahore, Pakistan</li>
                <li>@visuals_by_hamza</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 Visuals by Hamza. All rights reserved. | Photography & Videography Services</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
