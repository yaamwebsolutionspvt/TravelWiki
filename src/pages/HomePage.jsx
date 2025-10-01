import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/Hero'
import SearchFilterComponent from '../components/SearchFilter/SearchFilterComponent'
import KashmirTourPackages from '../components/Packages/KashmirTourPackages'
import BestsellerKashmirTours from '../components/Packages/BestsellerKashmirTours'
import HoneymoonSpecial from '../components/Packages/HoneymoonSpecial'
import KashmirAdventureWinter from '../components/Packages/KashmirAdventureWinter'
import KashmirCulturalToursAndPackages from '../components/Packages/KashmirCulturalToursAndPackages'
import KashmirExcursionsSpecial from '../components/Packages/KashmirExcursionsSpecial'
import KashmirFamilyPackages from '../components/Packages/KashmirFamilyPackages'
import TourPackageSchema from '../components/TourPackageSchema'
import ActivitiesSection from '../components/Activities/ActivitiesSection'
import RestaurantList from '../components/Restaurants/RestaurantList'
import DestinationList from '../components/Destinations/DestinationList'
import ThingsToDo from '../components/ThingsToDO/ThingsToDo'
import FaqList from '../components/FAQs/FaqList'
import WhyTravelWiki from '../components/WhyEKashmir/WhyTravelWiki'
import NewsCarousel from '../components/News/NewsCarousel'
import LazySection from '../components/LazySection'

const HomePage = () => {

  return (
    <>
      <Helmet>
        <title>Kashmir Tour & Holiday Packages starting from just ₹7,999</title>
        <meta
          name="description"
          content="Discover Kashmir's paradise with our exclusive tour packages. Book Kashmir honeymoon tours, family packages, adventure trips to Srinagar, Gulmarg, Pahalgam, Dal Lake. Best Kashmir tourism deals with expert guides."
        />
        <meta property="og:title" content="Kashmir Tourism 2025 | Best Kashmir Tour Packages & Holiday Deals" />
        <meta property="og:description" content="Experience Kashmir's beauty with our comprehensive tour packages. Visit Dal Lake, Gulmarg, Pahalgam, Sonamarg. Expert guides, best prices, customized itineraries." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Kashmir Tourism | Best Kashmir Tour Packages 2025" />
        <meta name="twitter:description" content="Discover Kashmir paradise with our exclusive tour packages. Honeymoon, family, adventure tours to Srinagar, Gulmarg, Pahalgam, Dal Lake." />
        <meta name="twitter:image" content="https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Kashmir Tourism Travel Wiki" />
        <meta name="geo.region" content="IN-JK" />
        <meta name="geo.placename" content="Kashmir, India" />
        <meta name="geo.position" content="34.0837;74.7973" />
        <meta name="ICBM" content="34.0837, 74.7973" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TravelAgency",
            "name": "Kashmir Tourism Travel Wiki",
            "description": "Leading Kashmir tourism company offering best tour packages, honeymoon trips, family vacations, and adventure tours to Kashmir, Ladakh, and surrounding regions.",
            "url": "/",
            "logo": "https://res.cloudinary.com/dw1sh368y/image/upload/v1755514562/travelwiki/public/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-XXXXXXXXXX",
              "contactType": "customer service",
              "availableLanguage": ["English", "Hindi", "Urdu"]
            },
            "address": {
              "@type": "PostalAddress",
              "addressRegion": "Jammu and Kashmir",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/kashmirtourism",
              "https://www.instagram.com/kashmirtourism",
              "https://www.twitter.com/kashmirtourism"
            ],
            "areaServed": {
              "@type": "Place",
              "name": "Kashmir, Ladakh, Jammu"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Kashmir Tour Packages",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "TouristTrip",
                    "name": "Kashmir Honeymoon Packages",
                    "description": "Romantic Kashmir honeymoon tours covering Dal Lake, Gulmarg, Pahalgam"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "TouristTrip",
                    "name": "Kashmir Family Packages",
                    "description": "Family-friendly Kashmir tours with comfortable accommodations and guided sightseeing"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "TouristTrip",
                    "name": "Kashmir Adventure Tours",
                    "description": "Adventure activities including trekking, skiing, river rafting in Kashmir"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

      <div className="pt-16 md:pt-20">
        {/* Enhanced On-page SEO for Home (single visible H1 is in Hero) */}
        <TourPackageSchema />
        <Hero />
        <SearchFilterComponent />
        <LazySection rootMargin="300px" minHeight="30vh">
          <div id="allpackages">
            <KashmirTourPackages />
            <BestsellerKashmirTours />
            <HoneymoonSpecial />
            <KashmirAdventureWinter />
            <KashmirCulturalToursAndPackages />
            <KashmirExcursionsSpecial />
            <KashmirFamilyPackages />
          </div>
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <ActivitiesSection />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <RestaurantList />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <DestinationList />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <ThingsToDo />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <FaqList />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <WhyTravelWiki />
        </LazySection>
        <LazySection rootMargin="300px" minHeight="30vh">
          <NewsCarousel />
        </LazySection>
      </div>
    </>
  )
}

export default HomePage