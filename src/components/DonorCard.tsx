import React from 'react';
import { Droplet, MapPin, Calendar } from 'lucide-react';
import { Donor } from '../types';

interface DonorCardProps {
  donor: Donor;
}

const DonorCard: React.FC<DonorCardProps> = ({ donor }) => {
  // Format the date to be more readable
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Different background colors based on blood type
  const getBloodTypeBg = (bloodType: string) => {
    const firstLetter = bloodType.charAt(0);
    switch (firstLetter) {
      case 'A': return 'bg-green-100 text-green-800';
      case 'B': return 'bg-blue-100 text-blue-800';
      case 'O': return 'bg-yellow-100 text-yellow-800';
      case 'AB': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{donor.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getBloodTypeBg(donor.bloodType)}`}>
          {donor.bloodType}
        </span>
      </div>
      
      <div className="flex items-center text-gray-600 mb-2">
        <MapPin className="h-4 w-4 mr-2 text-primary" />
        <span>{donor.city}</span>
      </div>
      
      <div className="flex items-center text-gray-600">
        <Calendar className="h-4 w-4 mr-2 text-primary" />
        <span>Last donation: {formatDate(donor.lastDonation)}</span>
      </div>
      
      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-white border border-primary text-primary font-medium py-2 rounded hover:bg-primary hover:text-white transition-colors duration-300">
          Contact Donor
        </button>
      </div>
    </div>
  );
};

export default DonorCard;