import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ChatFab } from "./components/ChatFab";
import { HomePage } from "./pages/HomePage";
import { ServicesPage } from "./pages/ServicesPage";
import { SubscriptionsPage } from "./pages/SubscriptionsPage";
import { CommercialPage } from "./pages/CommercialPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { BookingPage } from "./pages/BookingPage";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/subscriptions" element={<SubscriptionsPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
      <ChatFab />
    </>
  );
}
