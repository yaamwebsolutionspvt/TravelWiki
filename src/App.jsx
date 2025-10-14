import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SEO from './components/SEO';
import PerformanceOptimizer from './components/PerformanceOptimizer';
import CriticalResourceLoader from './components/CriticalResourceLoader';
import PerformanceMonitor from './components/PerformanceMonitor';
// Defer Analytics to idle to reduce main-thread work during LCP
const Analytics = lazy(() => import('./components/Analytics'));
import Header from './components/Navbar/Header';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import PageNotFound from './pages/PageNotFound';
// Defer ConsultationPopup to idle/later
const ConsultationPopup = lazy(() => import('./components/ConsultationPopup'));

// Lazy load all page components for better performance
const HomePage = lazy(() => import('./pages/HomePage'));

// Tour Pages
const KashmirExoticTour = lazy(() => import('./pages/TourPages/KashmirExoticTour'));
const KashmirFamilyTour = lazy(() => import('./pages/TourPages/KashmirFamilyTour'));
const KashmirHoneymoonTour = lazy(() => import('./pages/TourPages/KashmirHoneymoonTour'));
const KashmirPackageWithPatnitop = lazy(() => import('./pages/TourPages/KashmirPackageWithPatnitop'));
const KashmirPahalgamTour = lazy(() => import('./pages/TourPages/KashmirPahalgamTour'));
const KashmirValleyTour = lazy(() => import('./pages/TourPages/KashmirValleyTour'));
const KashmirWithJammuTour = lazy(() => import('./pages/TourPages/KashmirWithJammuTour'));
const KashmirWithVaishnoDevi = lazy(() => import('./pages/TourPages/KashmirWithVaishnoDevi'));
const LoveInKashmirPackage = lazy(() => import('./pages/TourPages/LoveInKashmirPackage'));
const MagicalKashmirGeneralTour = lazy(() => import('./pages/TourPages/MagicalKashmirTour'));
const MagnificentKashmirValleyTour = lazy(() => import('./pages/TourPages/MagnificentKashmirValleyTour'));
const ThreeNightsFourDaysSrinagarPahalgamGulmargTour = lazy(() => import('./pages/TourPages/ThreeNightsFourDaysSrinagarPahalgamGulmargTour'));

// Ladakh Packages
const LehLadakhPage = lazy(() => import('./pages/LadakhPackages/LehLadakhPage'));
const AmazingLadakhTourWithNubraStay = lazy(() => import('./pages/LadakhPackages/AmazingLadakhTourWithNubraStay'));
const BreathtakingLadakhWithTurtukPangongExcursion = lazy(() => import('./pages/LadakhPackages/BreathtakingLadakhWithTurtukPangongExcursion'));
const BudgetLadakhTourPackage = lazy(() => import('./pages/LadakhPackages/BudgetLadakhTourPackage'));
const ClassicLehNubraPangongTsoMoririHanlePackage = lazy(() => import('./pages/LadakhPackages/ClassicLehNubraPangongTsoMoririHanlePackage'));
const EnthrallingLadakhTourFromSrinagar = lazy(() => import('./pages/LadakhPackages/EnthrallingLadakhTourFromSrinagar'));
const HighlightsOfLadakhPackage = lazy(() => import('./pages/LadakhPackages/HighlightsOfLadakhPackage'));
const JeepSafariTourFromManaliLehLadakhManali = lazy(() => import('./pages/LadakhPackages/JeepSafariTourFromManaliLehLadakhManali'));
const JeepSafariTourPackageFromManaliToLehLadakh = lazy(() => import('./pages/LadakhPackages/JeepSafariTourPackageFromManaliToLehLadakh'));
const KashmirAndLadakhComboPackageWithKargilStay = lazy(() => import('./pages/LadakhPackages/KashmirAndLadakhComboPackageWithKargilStay'));
const LadakhGetawayWithNubraPangongStay = lazy(() => import('./pages/LadakhPackages/LadakhGetawayWithNubraPangongStay'));
const LadakhTourPackageWithKargilStay = lazy(() => import('./pages/LadakhPackages/LadakhTourPackageWithKargilStay'));
const UnforgettableLadakhTourPackageWithSonamargStay = lazy(() => import('./pages/LadakhPackages/UnforgettableLadakhTourPackageWithSonamargStay'));

// Adventure Winter Packages
const BestSellingKashmirAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/BestSellingKashmirAdventureTour'));
const GlimpsesOfFamilyAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/GlimpsesOfFamilyAdventureTour'));
const KashmirMarvelousAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/KashmirMarvelousAdventureTour'));
const KashmirRefreshingAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/KashmirRefreshingAdventureTour'));
const MagicalKashmirAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/MagicalKashmirAdventureTour'));
const ScenicKashmirAdventureTour = lazy(() => import('./pages/TourPages/AdventureWinter/ScenicKashmirAdventureTour'));

// Cultural Tours
const GurezValleyTour = lazy(() => import('./pages/TourPages/CulturalTours/GurezValleyTour'));
const KashmirOffbeatWithGurez = lazy(() => import('./pages/TourPages/CulturalTours/KashmirOffbeatWithGurez'));
const KashmirWithGurezValleyTour = lazy(() => import('./pages/TourPages/CulturalTours/KashmirWithGurezValleyTour'));
const KashmirWithKargil = lazy(() => import('./pages/TourPages/CulturalTours/KashmirWithKargil'));
const TrueGemsOfKashmirValley = lazy(() => import('./pages/TourPages/CulturalTours/TrueGemsOfKashmirValley'));

// Kashmir Excursions
const FunFilledVacationKashmirPackage = lazy(() => import('./pages/TourPages/KashmirExcursions/FunFilledVacationKashmirPackage'));
const MagnificentKashmirWithPahalgamAndGulmarg = lazy(() => import('./pages/TourPages/KashmirExcursions/MagnificentKashmirWithPahalgamAndGulmarg'));
const SplendidKashmirPackage = lazy(() => import('./pages/TourPages/KashmirExcursions/SplendidKashmirPackage'));
const SrinagarGetawayPackage = lazy(() => import('./pages/TourPages/KashmirExcursions/SrinagarGetawayPackage'));
const ThrillingKashmirHolidayPackage = lazy(() => import('./pages/TourPages/KashmirExcursions/ThrillingKashmirHolidayPackage'));
const WeekLongHolidayInKashmir = lazy(() => import('./pages/TourPages/KashmirExcursions/WeekLongHolidayInKashmir'));

// Kashmir Family Packages
const AmazingKashmirHolidayPackage = lazy(() => import('./pages/TourPages/KashmirFamilyPackages/AmazingKashmirHolidayPackage'));
const KashmirFamilyPackageLuxuriousStay = lazy(() => import('./pages/TourPages/KashmirFamilyPackages/KashmirFamilyPackageLuxuriousStay'));
const KashmirValleyFamilyTour = lazy(() => import('./pages/TourPages/KashmirFamilyPackages/KashmirValleyFamilyTour'));
const PremiumKashmirHolidayPackage = lazy(() => import('./pages/TourPages/KashmirFamilyPackages/PremiumKashmirHolidayPackage'));
const SrinagarGetawayPackageWithPremiumStay = lazy(() => import('./pages/TourPages/KashmirFamilyPackages/SrinagarGetawayPackageWithPremiumStay'));

// Honeymoon Experiences
const BestSellingKashmirTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/BestSellingKashmirTour'));
const GlimpsesOfFamilyTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/GlimpsesOfFamilyTour'));
const KashmirCulturalExperience = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirCulturalExperience'));
const KashmirGulmargTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirGulmargTour'));
const KashmirHouseboatTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirHouseboatTour'));
const KashmirMarvelousTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirMarvelousTour'));
const KashmirRefreshingTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirRefreshingTour'));
const KashmirShikaraExperience = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirShikaraExperience'));
const KashmirShoppingGuide = lazy(() => import('./pages/TourPages/HoneymoonExperiences/KashmirShoppingGuide'));
const MagicalKashmirTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/MagicalKashmirTour'));
const ScenicKashmirTour = lazy(() => import('./pages/TourPages/HoneymoonExperiences/ScenicKashmirTour'));
const SrinagarTourPackage = lazy(() => import('./pages/TourPages/HoneymoonExperiences/SrinagarTourPackage'));

// Other Pages
const Contact = lazy(() => import('./pages/Contact'));
const PlacesToVisit = lazy(() => import('./pages/placestovisit/PlacesToVisitInKashmir'));
const PlacesToVisitInKashmir = lazy(() => import('./pages/placestovisit/PlacesToVisitInKashmir'));
const PlacesToVisitInSrinagar = lazy(() => import('./pages/placestovisit/PlacesToVisitInSrinagar'));
const PlacesToVisitInGulmarg = lazy(() => import('./pages/placestovisit/PlacesToVisitInGulmarg'));
const PlacesToVisitInPahalgam = lazy(() => import('./pages/placestovisit/PlacesToVisitInPahalgam'));
const PlacesToVisitInSonamarg = lazy(() => import('./pages/placestovisit/PlacesToVisitInSonamarg'));
const PlacesToVisitInLadakh = lazy(() => import('./pages/placestovisit/PlacesToVisitInLadakh'));
const ThingsToDo = lazy(() => import('./pages/thingstodo/ThingsToDoInKashmir'));
const ThingsToDoInKashmir = lazy(() => import('./pages/thingstodo/ThingsToDoInKashmir'));
const ThingsToDoInGulmarg = lazy(() => import('./pages/thingstodo/ThingsToDoInGulmarg'));
const ThingsToDoInPahalgam = lazy(() => import('./pages/thingstodo/ThingsToDoInPahalgam'));
const ThingsToDoInSonamarg = lazy(() => import('./pages/thingstodo/ThingsToDoInSonamarg'));
const ThingsToDoInLadakh = lazy(() => import('./pages/thingstodo/ThingsToDoInLadakh'));
const HowToReach = lazy(() => import('./pages/howtoreach/HowToReachKashmir'));
const HowToReachKashmir = lazy(() => import('./pages/howtoreach/HowToReachKashmir'));
const HowToReachSrinagar = lazy(() => import('./pages/howtoreach/HowToReachSrinagar'));
const HowToReachGulmarg = lazy(() => import('./pages/howtoreach/HowToReachGulmarg'));
const HowToReachPahalgam = lazy(() => import('./pages/howtoreach/HowToReachPahalgam'));
const HowToReachSonamarg = lazy(() => import('./pages/howtoreach/HowToReachSonamarg'));
const HowToReachLadakh = lazy(() => import('./pages/howtoreach/HowToReachLadakh'));
const HowToReachGurezValley = lazy(() => import('./pages/howtoreach/HowToReachGurezValley'));

const BestTimeToVisit = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitKashmir'));
const BestTimeToVisitKashmir = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitKashmir'));
const BestTimeToVisitSrinagar = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitSrinagar'));
const BestTimeToVisitGulmarg = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitGulmarg'));
const BestTimeToVisitPahalgam = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitPahalgam'));
const BestTimeToVisitSonamarg = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitSonamarg'));
const BestTimeToVisitLadakh = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitLadakh'));
const BestTimeToVisitYusmarg = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitYusmarg'));
const BestTimeToVisitGurezValley = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitGurezValley'));
const BestTimeToVisitAruValley = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitAruValley'));
const BestTimeToVisitBetaabValley = lazy(() => import('./pages/besttimetovisit/BestTimeToVisitBetaabValley'));
// Kashmir by Months
const KashmirInJanuary = lazy(() => import('./pages/kashmirbymonths/KashmirInJanuary'));
const KashmirInFebruary = lazy(() => import('./pages/kashmirbymonths/KashmirInFebruary'));
const KashmirInMarch = lazy(() => import('./pages/kashmirbymonths/KashmirInMarch'));
const KashmirInApril = lazy(() => import('./pages/kashmirbymonths/KashmirInApril'));
const KashmirInMay = lazy(() => import('./pages/kashmirbymonths/KashmirInMay'));
const KashmirInJune = lazy(() => import('./pages/kashmirbymonths/KashmirInJune'));
const KashmirInJuly = lazy(() => import('./pages/kashmirbymonths/KashmirInJuly'));
const KashmirInAugust = lazy(() => import('./pages/kashmirbymonths/KashmirInAugust'));
const KashmirInSeptember = lazy(() => import('./pages/kashmirbymonths/KashmirInSeptember'));
const KashmirInOctober = lazy(() => import('./pages/kashmirbymonths/KashmirInOctober'));
const KashmirInNovember = lazy(() => import('./pages/kashmirbymonths/KashmirInNovember'));
const KashmirInDecember = lazy(() => import('./pages/kashmirbymonths/KashmirInDecember'));

// Kashmir Weather by Months
const KashmirWeatherInJanuary = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInJanuary'));
const KashmirWeatherInFebruary = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInFebruary'));
const KashmirWeatherInMarch = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInMarch'));
const KashmirWeatherInApril = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInApril'));
const KashmirWeatherInMay = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInMay'));
const KashmirWeatherInJune = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInJune'));
const KashmirWeatherInJuly = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInJuly'));
const KashmirWeatherInAugust = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInAugust'));
const KashmirWeatherInSeptember = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInSeptember'));
const KashmirWeatherInOctober = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInOctober'));
const KashmirWeatherInNovember = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInNovember'));
const KashmirWeatherInDecember = lazy(() => import('./pages/kashmirbymonths/KashmirWeatherInDecember'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const TermsAndCondition = lazy(() => import('./pages/TermsAndCondition'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const RefundPolicy = lazy(() => import('./pages/RefundPolicy'));
const PackagesListing = lazy(() => import('./components/PackagesListing'));

// Loading spinner component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Global SEO component with home page type */}
        <SEO pageType="home" />

        <PerformanceOptimizer />
        <CriticalResourceLoader />
        <PerformanceMonitor />
        <Analytics />
        <Header />
        <ScrollToTop />
        <ConsultationPopup />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            {/* Homepage */}
            <Route path="/" element={<HomePage />} />


            {/* Tour Pages - Adventure */}
            <Route path="/kashmir-adventure-winter" element={<KashmirMarvelousAdventureTour />} />
            <Route path="/kashmir-adventure-winter/best-selling" element={<BestSellingKashmirAdventureTour />} />
            <Route path="/kashmir-adventure-winter/glimpses-family" element={<GlimpsesOfFamilyAdventureTour />} />
            <Route path="/kashmir-adventure-winter/marvelous" element={<KashmirMarvelousAdventureTour />} />
            <Route path="/kashmir-adventure-winter/refreshing" element={<KashmirRefreshingAdventureTour />} />
            <Route path="/kashmir-adventure-winter/magical" element={<MagicalKashmirAdventureTour />} />
            <Route path="/kashmir-adventure-winter/scenic" element={<ScenicKashmirAdventureTour />} />

            {/* Tour Pages - Cultural */}
            <Route path="/kashmir-cultural-tours" element={<GurezValleyTour />} />
            <Route path="/kashmir-cultural-tours/gurez-valley" element={<GurezValleyTour />} />
            <Route path="/kashmir-cultural-tours/offbeat-gurez" element={<KashmirOffbeatWithGurez />} />
            <Route path="/kashmir-cultural-tours/with-gurez" element={<KashmirWithGurezValleyTour />} />
            <Route path="/kashmir-cultural-tours/with-kargil" element={<KashmirWithKargil />} />
            <Route path="/kashmir-cultural-tours/true-gems" element={<TrueGemsOfKashmirValley />} />

            {/* Tour Pages - Excursions */}
            <Route path="/kashmir-excursions" element={<FunFilledVacationKashmirPackage />} />
            <Route path="/kashmir-excursions/fun-filled" element={<FunFilledVacationKashmirPackage />} />
            <Route path="/kashmir-excursions/magnificent-pahalgam-gulmarg" element={<MagnificentKashmirWithPahalgamAndGulmarg />} />
            <Route path="/kashmir-excursions/splendid" element={<SplendidKashmirPackage />} />
            <Route path="/kashmir-excursions/srinagar-getaway" element={<SrinagarGetawayPackage />} />
            <Route path="/kashmir-excursions/thrilling" element={<ThrillingKashmirHolidayPackage />} />
            <Route path="/kashmir-excursions/week-long" element={<WeekLongHolidayInKashmir />} />

            {/* Tour Pages - Family */}
            <Route path="/kashmir-family-packages" element={<AmazingKashmirHolidayPackage />} />
            <Route path="/kashmir-family-packages/amazing" element={<AmazingKashmirHolidayPackage />} />
            <Route path="/kashmir-family-packages/luxurious-stay" element={<KashmirFamilyPackageLuxuriousStay />} />
            <Route path="/kashmir-family-packages/valley-tour" element={<KashmirValleyFamilyTour />} />
            <Route path="/kashmir-family-packages/premium" element={<PremiumKashmirHolidayPackage />} />
            <Route path="/kashmir-family-packages/srinagar-premium" element={<SrinagarGetawayPackageWithPremiumStay />} />

            {/* Tour Pages - Honeymoon */}
            <Route path="/kashmir-honeymoon" element={<BestSellingKashmirTour />} />
            <Route path="/kashmir-honeymoon/best-selling" element={<BestSellingKashmirTour />} />
            <Route path="/kashmir-honeymoon/glimpses-family" element={<GlimpsesOfFamilyTour />} />
            <Route path="/kashmir-honeymoon/cultural-experience" element={<KashmirCulturalExperience />} />
            <Route path="/kashmir-honeymoon/gulmarg" element={<KashmirGulmargTour />} />
            <Route path="/kashmir-honeymoon/houseboat" element={<KashmirHouseboatTour />} />
            <Route path="/kashmir-honeymoon/marvelous" element={<KashmirMarvelousTour />} />
            <Route path="/kashmir-honeymoon/refreshing" element={<KashmirRefreshingTour />} />
            <Route path="/kashmir-honeymoon/shikara" element={<KashmirShikaraExperience />} />
            <Route path="/kashmir-honeymoon/shopping" element={<KashmirShoppingGuide />} />
            <Route path="/kashmir-honeymoon/magical" element={<MagicalKashmirTour />} />
            <Route path="/kashmir-honeymoon/scenic" element={<ScenicKashmirTour />} />
            <Route path="/kashmir-honeymoon/srinagar" element={<SrinagarTourPackage />} />

            {/* Individual Tour Pages */}
            <Route path="/kashmir-exotic-tour" element={<KashmirExoticTour />} />
            <Route path="/kashmir-family-tour" element={<KashmirFamilyTour />} />
            <Route path="/kashmir-honeymoon-tour" element={<KashmirHoneymoonTour />} />
            <Route path="/kashmir-package-patnitop" element={<KashmirPackageWithPatnitop />} />
            <Route path="/kashmir-pahalgam-tour" element={<KashmirPahalgamTour />} />
            <Route path="/kashmir-valley-tour" element={<KashmirValleyTour />} />
            <Route path="/kashmir-jammu-tour" element={<KashmirWithJammuTour />} />
            <Route path="/kashmir-vaishno-devi" element={<KashmirWithVaishnoDevi />} />
            <Route path="/love-kashmir" element={<LoveInKashmirPackage />} />
            <Route path="/magical-kashmir" element={<MagicalKashmirGeneralTour />} />
            <Route path="/magnificent-kashmir-valley" element={<MagnificentKashmirValleyTour />} />
            <Route path="/3-nights-4-days-srinagar-pahalgam-gulmarg" element={<ThreeNightsFourDaysSrinagarPahalgamGulmargTour />} />
            <Route path="/packages/3-nights-4-days-srinagar-pahalgam-gulmarg-tour" element={<ThreeNightsFourDaysSrinagarPahalgamGulmargTour />} />

            {/* Package Routes - General */}
            <Route path="/packages/kashmir-family-tour" element={<KashmirFamilyTour />} />
            <Route path="/packages/kashmir-honeymoon-tour" element={<KashmirHoneymoonTour />} />
            <Route path="/packages/kashmir-gulmarg-tour" element={<KashmirGulmargTour />} />
            <Route path="/packages/kashmir-houseboat-tour" element={<KashmirHouseboatTour />} />
            <Route path="/packages/kashmir-package-with-patnitop" element={<KashmirPackageWithPatnitop />} />
            <Route path="/packages/kashmir-pahalgam-tour" element={<KashmirPahalgamTour />} />
            <Route path="/packages/kashmir-valley-tour" element={<KashmirValleyTour />} />
            <Route path="/packages/kashmir-with-jammu-tour" element={<KashmirWithJammuTour />} />
            <Route path="/packages/kashmir-with-vaishno-devi" element={<KashmirWithVaishnoDevi />} />
            <Route path="/packages/love-in-kashmir-package" element={<LoveInKashmirPackage />} />
            <Route path="/packages/magical-kashmir-tour" element={<MagicalKashmirGeneralTour />} />
            <Route path="/packages/magnificent-kashmir-valley-tour" element={<MagnificentKashmirValleyTour />} />
            <Route path="/packages/kashmir-exotic-tour" element={<KashmirExoticTour />} />

            {/* Package Routes - Adventure */}
            <Route path="/packages/glimpses-of-family-adventure-tour" element={<GlimpsesOfFamilyAdventureTour />} />
            <Route path="/packages/magical-kashmir-adventure-tour" element={<MagicalKashmirAdventureTour />} />
            <Route path="/packages/best-selling-kashmir-adventure-tour" element={<BestSellingKashmirAdventureTour />} />
            <Route path="/packages/scenic-kashmir-adventure-tour" element={<ScenicKashmirAdventureTour />} />
            <Route path="/packages/kashmir-marvelous-adventure-tour" element={<KashmirMarvelousAdventureTour />} />
            <Route path="/packages/kashmir-refreshing-adventure-tour" element={<KashmirRefreshingAdventureTour />} />

            {/* Package Routes - Cultural */}
            <Route path="/packages/gurez-valley-tour" element={<GurezValleyTour />} />
            <Route path="/packages/kashmir-with-gurez-valley-tour" element={<KashmirWithGurezValleyTour />} />
            <Route path="/packages/kashmir-offbeat-with-gurez" element={<KashmirOffbeatWithGurez />} />
            <Route path="/packages/true-gems-of-kashmir-valley" element={<TrueGemsOfKashmirValley />} />
            <Route path="/packages/kashmir-with-kargil" element={<KashmirWithKargil />} />

            {/* Package Routes - Excursions */}
            <Route path="/packages/splendid-kashmir-package" element={<SplendidKashmirPackage />} />
            <Route path="/packages/fun-filled-vacation-kashmir-package" element={<FunFilledVacationKashmirPackage />} />
            <Route path="/packages/thrilling-kashmir-holiday-package" element={<ThrillingKashmirHolidayPackage />} />
            <Route path="/packages/week-long-holiday-kashmir" element={<WeekLongHolidayInKashmir />} />
            <Route path="/packages/magnificent-kashmir-pahalgam-gulmarg" element={<MagnificentKashmirWithPahalgamAndGulmarg />} />
            <Route path="/packages/srinagar-getaway-package" element={<SrinagarGetawayPackage />} />

            {/* Package Routes - Family */}
            <Route path="/packages/kashmir-family-package-luxurious-stay" element={<KashmirFamilyPackageLuxuriousStay />} />
            <Route path="/packages/kashmir-valley-family-tour" element={<KashmirValleyFamilyTour />} />
            <Route path="/packages/premium-kashmir-holiday-package" element={<PremiumKashmirHolidayPackage />} />
            <Route path="/packages/amazing-kashmir-holiday-package" element={<AmazingKashmirHolidayPackage />} />
            <Route path="/packages/srinagar-getaway-package-premium-stay" element={<SrinagarGetawayPackageWithPremiumStay />} />

            {/* Package Routes - Honeymoon */}
            <Route path="/packages/glimpses-of-family-tour" element={<GlimpsesOfFamilyTour />} />
            <Route path="/packages/honeymoon-magical-kashmir-tour" element={<MagicalKashmirTour />} />
            <Route path="/packages/best-selling-kashmir-tour" element={<BestSellingKashmirTour />} />
            <Route path="/packages/scenic-kashmir-tour" element={<ScenicKashmirTour />} />
            <Route path="/packages/kashmir-marvelous-tour" element={<KashmirMarvelousTour />} />
            <Route path="/packages/kashmir-refreshing-tour" element={<KashmirRefreshingTour />} />
            <Route path="/packages/kashmir-shikara-experience" element={<KashmirShikaraExperience />} />
            <Route path="/packages/kashmir-cultural-experience" element={<KashmirCulturalExperience />} />
            <Route path="/packages/kashmir-shopping-guide" element={<KashmirShoppingGuide />} />
            <Route path="/packages/srinagar-tour-package" element={<SrinagarTourPackage />} />

            {/* Package Category Routes */}
            <Route path="/packages/honeymoon" element={<BestSellingKashmirTour />} />
            <Route path="/packages/family" element={<KashmirFamilyTour />} />

            {/* Catch-all for any other package routes */}
            <Route path="/packages/:packageSlug" element={<KashmirExoticTour />} />

            {/* Ladakh Packages */}
            <Route path="/leh-ladakh-packages" element={<LehLadakhPage />} />
            <Route path="/leh-ladakh-packages/amazing-nubra" element={<AmazingLadakhTourWithNubraStay />} />
            <Route path="/leh-ladakh-packages/breathtaking-turtuk" element={<BreathtakingLadakhWithTurtukPangongExcursion />} />
            <Route path="/leh-ladakh-packages/budget" element={<BudgetLadakhTourPackage />} />
            <Route path="/leh-ladakh-packages/classic-leh-nubra" element={<ClassicLehNubraPangongTsoMoririHanlePackage />} />
            <Route path="/leh-ladakh-packages/from-srinagar" element={<EnthrallingLadakhTourFromSrinagar />} />
            <Route path="/leh-ladakh-packages/highlights" element={<HighlightsOfLadakhPackage />} />
            <Route path="/leh-ladakh-packages/jeep-safari-manali" element={<JeepSafariTourFromManaliLehLadakhManali />} />
            <Route path="/leh-ladakh-packages/jeep-safari-manali-leh" element={<JeepSafariTourPackageFromManaliToLehLadakh />} />
            <Route path="/leh-ladakh-packages/kashmir-combo-kargil" element={<KashmirAndLadakhComboPackageWithKargilStay />} />
            <Route path="/leh-ladakh-packages/getaway-nubra-pangong" element={<LadakhGetawayWithNubraPangongStay />} />
            <Route path="/leh-ladakh-packages/with-kargil" element={<LadakhTourPackageWithKargilStay />} />
            <Route path="/leh-ladakh-packages/unforgettable-sonamarg" element={<UnforgettableLadakhTourPackageWithSonamargStay />} />
            <Route path="/packages/unforgettable-ladakh-tour-package-with-sonamarg-stay" element={<UnforgettableLadakhTourPackageWithSonamargStay />} />
            <Route path="/leh-packages/unforgettable-ladakh-tour-package-with-sonamarg-stay" element={<UnforgettableLadakhTourPackageWithSonamargStay />} />

            {/* Other Pages */}
            <Route path="/packages-listing" element={<PackagesListing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/places-to-visit" element={<PlacesToVisit />} />
            <Route path="/places-to-visit-in-srinagar" element={<PlacesToVisitInSrinagar />} />
            <Route path="/places-to-visit-in-gulmarg" element={<PlacesToVisitInGulmarg />} />
            <Route path="/places-to-visit-in-pahalgam" element={<PlacesToVisitInPahalgam />} />
            <Route path="/places-to-visit-in-sonamarg" element={<PlacesToVisitInSonamarg />} />
            <Route path="/places-to-visit-in-kashmir" element={<PlacesToVisitInKashmir />} />
            <Route path="/places-to-visit-in-ladakh" element={<PlacesToVisitInLadakh />} />
            <Route path="/places-to-visit/srinagar" element={<PlacesToVisitInSrinagar />} />
            <Route path="/places-to-visit/gulmarg" element={<PlacesToVisitInGulmarg />} />
            <Route path="/places-to-visit/pahalgam" element={<PlacesToVisitInPahalgam />} />
            <Route path="/places-to-visit/sonamarg" element={<PlacesToVisitInSonamarg />} />
            <Route path="/things-to-do" element={<ThingsToDo />} />
            <Route path="/how-to-reach" element={<HowToReach />} />
            <Route path="/best-time-to-visit" element={<BestTimeToVisit />} />

            {/* Kashmir by Months */}
            <Route path="/kashmir-by-months" element={<KashmirInApril />} />
            <Route path="/kashmir-in-january" element={<KashmirInJanuary />} />
            <Route path="/kashmir-in-february" element={<KashmirInFebruary />} />
            <Route path="/kashmir-in-march" element={<KashmirInMarch />} />
            <Route path="/kashmir-in-april" element={<KashmirInApril />} />
            <Route path="/kashmir-in-may" element={<KashmirInMay />} />
            <Route path="/kashmir-in-june" element={<KashmirInJune />} />
            <Route path="/kashmir-in-july" element={<KashmirInJuly />} />
            <Route path="/kashmir-in-august" element={<KashmirInAugust />} />
            <Route path="/kashmir-in-september" element={<KashmirInSeptember />} />
            <Route path="/kashmir-in-october" element={<KashmirInOctober />} />
            <Route path="/kashmir-in-november" element={<KashmirInNovember />} />
            <Route path="/kashmir-in-december" element={<KashmirInDecember />} />

            {/* Kashmir Weather by Months */}
            <Route path="/kashmir-weather" element={<KashmirWeatherInApril />} />
            <Route path="/kashmir-weather-in-january" element={<KashmirWeatherInJanuary />} />
            <Route path="/kashmir-weather-in-february" element={<KashmirWeatherInFebruary />} />
            <Route path="/kashmir-weather-in-march" element={<KashmirWeatherInMarch />} />
            <Route path="/kashmir-weather-in-april" element={<KashmirWeatherInApril />} />
            <Route path="/kashmir-weather-in-may" element={<KashmirWeatherInMay />} />
            <Route path="/kashmir-weather-in-june" element={<KashmirWeatherInJune />} />
            <Route path="/kashmir-weather-in-july" element={<KashmirWeatherInJuly />} />
            <Route path="/kashmir-weather-in-august" element={<KashmirWeatherInAugust />} />
            <Route path="/kashmir-weather-in-september" element={<KashmirWeatherInSeptember />} />
            <Route path="/kashmir-weather-in-october" element={<KashmirWeatherInOctober />} />
            <Route path="/kashmir-weather-in-november" element={<KashmirWeatherInNovember />} />
            <Route path="/kashmir-weather-in-december" element={<KashmirWeatherInDecember />} />

            {/* How to Reach Routes */}
            <Route path="/how-to-reach-kashmir" element={<HowToReachKashmir />} />
            <Route path="/how-to-reach-srinagar" element={<HowToReachSrinagar />} />
            <Route path="/how-to-reach-gulmarg" element={<HowToReachGulmarg />} />
            <Route path="/how-to-reach-pahalgam" element={<HowToReachPahalgam />} />
            <Route path="/how-to-reach-sonamarg" element={<HowToReachSonamarg />} />
            <Route path="/how-to-reach-ladakh" element={<HowToReachLadakh />} />
            <Route path="/how-to-reach-gurez-valley" element={<HowToReachGurezValley />} />

            {/* Things to Do Routes */}
            <Route path="/things-to-do-in-kashmir" element={<ThingsToDoInKashmir />} />
            <Route path="/things-to-do-in-gulmarg" element={<ThingsToDoInGulmarg />} />
            <Route path="/things-to-do-in-pahalgam" element={<ThingsToDoInPahalgam />} />
            <Route path="/things-to-do-in-sonamarg" element={<ThingsToDoInSonamarg />} />
            <Route path="/things-to-do-in-ladakh" element={<ThingsToDoInLadakh />} />

            {/* Best Time to Visit Routes */}
            <Route path="/best-time-to-visit-kashmir" element={<BestTimeToVisitKashmir />} />
            <Route path="/best-time-to-visit-srinagar" element={<BestTimeToVisitSrinagar />} />
            <Route path="/best-time-to-visit-gulmarg" element={<BestTimeToVisitGulmarg />} />
            <Route path="/best-time-to-visit-pahalgam" element={<BestTimeToVisitPahalgam />} />
            <Route path="/best-time-to-visit-sonamarg" element={<BestTimeToVisitSonamarg />} />
            <Route path="/best-time-to-visit-ladakh" element={<BestTimeToVisitLadakh />} />
            <Route path="/best-time-to-visit-yusmarg" element={<BestTimeToVisitYusmarg />} />
            <Route path="/best-time-to-visit-gurez-valley" element={<BestTimeToVisitGurezValley />} />
            <Route path="/best-time-to-visit-aru-valley" element={<BestTimeToVisitAruValley />} />
            <Route path="/best-time-to-visit-betaab-valley" element={<BestTimeToVisitBetaabValley />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/terms-and-condition" element={<TermsAndCondition />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />

               {/* Catch-all route for 404 Page Not Found */}
        <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>

        <WhatsAppFloatingButton phoneNumber="918899971960" />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;