import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DonorForm from './components/DonorForm';
import DonorGrid from './components/DonorGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-accent font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <DonorForm />
            <DonorGrid />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;