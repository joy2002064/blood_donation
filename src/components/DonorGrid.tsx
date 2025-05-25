import React from 'react';
import DonorCard from './DonorCard';
import { Donor } from '../types';

// Mock donor data - in a real app, this would come from an API
const donors: Donor[] = [
  { id: 1, name: 'John Smith', bloodType: 'O+', city: 'New York', lastDonation: '2023-11-15' },
  { id: 2, name: 'Sarah Johnson', bloodType: 'A-', city: 'Los Angeles', lastDonation: '2023-12-03' },
  { id: 3, name: 'Michael Brown', bloodType: 'B+', city: 'Chicago', lastDonation: '2023-10-22' },
  { id: 4, name: 'Emily Davis', bloodType: 'AB+', city: 'Houston', lastDonation: '2024-01-07' },
  { id: 5, name: 'Robert Wilson', bloodType: 'O-', city: 'Phoenix', lastDonation: '2023-09-30' },
  { id: 6, name: 'Jennifer Lee', bloodType: 'A+', city: 'Philadelphia', lastDonation: '2024-02-14' },
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