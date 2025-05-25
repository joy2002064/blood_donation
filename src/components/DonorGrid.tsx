import React from 'react';
import DonorCard from './DonorCard';
import { Donor } from '../types';

// Mock donor data - in a real app, this would come from an API
const donors: Donor[] = [
  { id: 1, name: 'Abdul Rahman', bloodType: 'O+', city: 'Dhaka', lastDonation: '2024-02-20' },
  { id: 2, name: 'Fatima Begum', bloodType: 'A-', city: 'Chittagong', lastDonation: '2024-02-15' },
  { id: 3, name: 'Mohammad Karim', bloodType: 'B+', city: 'Sylhet', lastDonation: '2024-02-18' },
  { id: 4, name: 'Nusrat Jahan', bloodType: 'AB+', city: 'Rajshahi', lastDonation: '2024-02-22' },
  { id: 5, name: 'Rashid Ahmed', bloodType: 'O-', city: 'Khulna', lastDonation: '2024-02-19' },
  { id: 6, name: 'Tahmina Akter', bloodType: 'A+', city: 'Barisal', lastDonation: '2024-02-21' },
];

const DonorGrid: React.FC = () => {
  return (
    <div id="donors" className="w-full">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Available Donors</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {donors.map((donor) => (
          <DonorCard key={donor.id} donor={donor} />
        ))}
      </div>
    </div>
  );
};

export default DonorGrid;