import React from 'react';
import { DashboardData } from '../services/dashboardService';

interface sustainabilityProps {
  data: DashboardData | null;
}

// Sample post data (replace with real data if needed)
const posts = [
  {
    title: 'TESTA Analytical Launches Compact BI-Mwa Detector for Molecular Weight Analysis',
    image: "https://new-chemical-today.s3.amazonaws.com/News/Emerson_Launches_Enhanced_Rosemount%E2%84%A2_3144S_Temperature_Transmitter_20250820114230/New_transmitter_delivers_0.05_%C2%B0C_accuracy,_20-year_stability,_and_advanced_diagnostics._(Source:_Eme.webp",
        date: 'Aug 16, 2025',
    url: 'https://example.com/post1',
  },
  {
    title: 'Alfa Lavals Hygienic Line Sets New Benchmark for Food and Pharma Safety',
    image: 'https://new-chemical-today.s3.amazonaws.com/News/Shimadzu_Unveils_Global_Particle_Analysis_System_for_Microplastics_20250818044750/AIMsight_infrared_microscope_connected_to_IRXross_Fourier_transform_infrared_spectrophotometer._(Sou.webp',
    date: 'Aug 14, 2025',
    url: 'https://example.com/post2',
  },
  {
    title: 'Titan Enterprises Highlights Lifecycle Value in Flow Measurement Systems',
    image: 'https://new-chemical-today.s3.amazonaws.com/News/TESTA_Analytical_Launches_Compact_BI-Mwa_Detector_for_Molecular_Weight_Analysis_20250816051957/TESTA_Analytical_debuts_BI-MwA_for_simplified_molecular_weight_analysis..webp',
    date: 'Aug 14, 2025',
    url: 'https://example.com/post3',
  },
  {
    title: 'Biotech Fluidics Introduces New Peristaltic Tubing Stop Adapter',
    image: 'https://new-chemical-today.s3.amazonaws.com/News/Alfa_Laval%E2%80%99s_Hygienic_Line_Sets_New_Benchmark_for_Food_and_Pharma_Safety_20250814114337/Alfa_Laval.webp',
    date: 'Aug 14, 2025',
    url: 'https://example.com/post4',
  },
  {
    title: 'GF Introduces Quick Connect Valve 700 for Advanced Data Center Cooling',
    image: 'https://new-chemical-today.s3.amazonaws.com/News/Titan_Enterprises_Highlights_Lifecycle_Value_in_Flow_Measurement_Systems_20250814104645/Titan_Enterprises.webp',
    date: 'Aug 12, 2025',
    url: 'https://example.com/post5',
  },
];

// Advertisement details
const advertisement = {
  image: 'https://via.placeholder.com/728x90?text=Chemical+Today+TV+Ad',
  url: 'https://example.com/advertisement',
};

const sustainability: React.FC<sustainabilityProps> = ({ data }) => {
  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row with Line */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Sustainability
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Post Grid */}
      <div className="grid grid-cols-5 gap-4">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-md shadow-md hover:shadow-lg transition flex flex-col"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-3 flex flex-col flex-grow">
              <p className="text-xs text-white bg-blue-600 inline-block px-2 py-1 rounded">
                {post.date}
              </p>
              <h2 className="font-semibold text-sm mt-2 line-clamp-3 flex-grow">
                {post.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">Chemical Today</p>
            </div>
          </a>
        ))}
      </div>

      {/* Advertisement Section */}
      <div className="mt-8">
        <a href={advertisement.url} target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.chemicaltoday.in/static/media/tv.1f300ee275475b4eac3e.jpg"
            alt="Advertisement"
            className="w-full h-24 object-cover rounded-md shadow-md hover:opacity-90 transition"
          />
        </a>
      </div>
    </div>
  );
};

export default sustainability;
