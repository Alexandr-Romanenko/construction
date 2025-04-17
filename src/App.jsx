import "./components/styles/main.css";
import Navbar from "./components/navbar/Navbar.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBlock from "./components/mainBlock/MainBlock.jsx";
import AboutUs from "./components/aboutUs/AboutUs.jsx";
import WhyUs from "./components/whyUs/WhyUs.jsx";
import UnderWhyUsBlock from "./components/underWhyUsBlock/UnderWhyUsBlock.jsx";
import Services from "./components/services/Services.jsx";
import OurWorks from "./components/ourWorks/OurWorks.jsx";
import Reviews from "./components/reviews/Reviews.jsx";
import UnderReviewsBlock from "./components/underReviewsBlock/UnderReviewsBlock.jsx";
import ServiceArea from "./components/serviceArea/ServiceArea.jsx";
import ContactUs from "./components/contactUs/ContactUs.jsx";
import Footer from "./components/footer/Footer.jsx";

import AbutUsPage from "./pages/navigation/aboutUsPage/AboutUsPage.jsx";
import ServicesPage from "./pages/navigation/servicesPage/ServicesPage.jsx";
import OurWorksPage from "./pages/navigation/ourWorksPage/OurWorksPage.jsx";
import ReviewsPage from "./pages/navigation/reviewsPage/ReviewsPage.jsx";
import ServiceAreaPage from "./pages/navigation/serviceAreaPage/ServiceAreaPage.jsx";

import GaleryPage from "./pages/body/galery/GaleryPage.jsx";
import ReviewsAllPage from "./pages/body/reviewsAll/ReviewsAllPage.jsx";
import ServiceAreaAllPage from "./pages/body/serviceAreaAll/ServiceAreaAll.jsx";

import PlaceAnOrderPage from "./pages/footer/forCustomers/placeAnOrderPage/PlaceAnOrderPage.jsx";
import PaymentMethodsPage from "./pages/footer/forCustomers/paymentMethodsPage/PaymentMetodsPage.jsx";
import DeliveryDetailsPage from "./pages/footer/forCustomers/deliveryDetailsPage/DeliveryDetailsPage.jsx";
import GuaranteePage from "./pages/footer/forCustomers/guaranteePage/GuaranteePage.jsx";
import FaqPage from "./pages/footer/forCustomers/faqPage/FaqPage.jsx";
import OurTeamPage from "./pages/footer/aboutUS/ourTeamPage/OurTeamPage.jsx";
import OurHistoryPage from "./pages/footer/aboutUS/ourHistoryPage/OurHistoryPage.jsx";
import PrivacyPolicyPage from "./pages/footer/aboutUS/privacyPolicyPage/PrivacyPolicyPage.jsx";
import JobsPage from "./pages/footer/aboutUS/jobsPage/JobsPage.jsx";
import WhyUsPage from "./pages/navigation/whyUsPage/WhyUsPage.jsx";

import ScrollToTop from "./utils/ScrollToTop.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainBlock />
              <AboutUs />
              <WhyUs />
              <UnderWhyUsBlock />
              <Services />
              <OurWorks />
              <Reviews />
              <UnderReviewsBlock />
              <ServiceArea />
              <ContactUs />
            </>
          }
        />
        {/* Nav Pages */}
        <Route path="/about-us" element={<AbutUsPage />} />
        <Route path="/why-us" element={<WhyUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/our-works" element={<OurWorksPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/service-area" element={<ServiceAreaPage />} />

        {/* Body Pages */}
        <Route path="/galery" element={<GaleryPage />} />
        <Route path="/all-reviews" element={<ReviewsAllPage />} />
        <Route path="/all-service-area" element={<ServiceAreaAllPage />} />

        {/* Footer Pages */}
        {/* For customers */}
        <Route path="/place-an-order" element={<PlaceAnOrderPage />} />
        <Route path="/payment-methods" element={<PaymentMethodsPage />} />
        <Route path="/delivery-details" element={<DeliveryDetailsPage />} />
        <Route path="/guarantee" element={<GuaranteePage />} />
        <Route path="/faq" element={<FaqPage />} />
        {/* About us */}
        <Route path="/our-team" element={<OurTeamPage />} />
        <Route path="/our-history" element={<OurHistoryPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/jobs" element={<JobsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
