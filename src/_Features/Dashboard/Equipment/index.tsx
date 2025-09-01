import React, { useEffect, useState } from "react";

interface EquipmentItem {
  id?: string;
  title?: string;
  published_by?: string;
  published_date?: string;
  web_image_url?: string;
  thumbnail_image_url?: string;
}

interface Banner {
  name?: string;
  description?: string;
  web_image_url?: string;
  image?: string;
  redirect_url?: string;
  organization_name?: string;
  subscription_start_date?: string;
  subscription_end_date?: string;
}

interface EquipmentData {
  equipmentSection?: {
    equipment1?: EquipmentItem;
    equipment2?: EquipmentItem;
    equipment3?: EquipmentItem;
    equipment4?: EquipmentItem;
    equipment5?: EquipmentItem;
    
    horizontal_banner?: Banner;
  };
}

const Equipment: React.FC = () => {
  const [equipment, setEquipment] = useState<EquipmentItem[]>([]);
  const [banner, setBanner] = useState<Banner | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 Replace with your actual backend API endpoint
        const response = await fetch("https://admin.chemicaltoday.in/homepage/home_page_data");
        const data: EquipmentData = await response.json();

        if (data?.equipmentSection) {
          const section = data.equipmentSection;

          // Collect all equipment into an array
          const equipmentArray = [
            section.equipment1,
            section.equipment2,
            section.equipment3,
            section.equipment4,
            section.equipment5,
            
          ].filter(Boolean) as EquipmentItem[];

          setEquipment(equipmentArray);
          setBanner(section.horizontal_banner || null);
        }
      } catch (error) {
        console.error("Error fetching equipment data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Equipment
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Equipment Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {equipment.map((item, index) => (
          <div
            key={index}
            className="bg-white border rounded-md shadow-md hover:shadow-lg transition flex flex-col"
          >
            <img
              src={item.web_image_url || item.thumbnail_image_url}
              alt={item.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-3 flex flex-col flex-grow">
              <p className="text-xs text-white bg-blue-600 inline-block px-2 py-1 rounded">
                {item.published_date}
              </p>
              <h2 className="font-semibold text-sm mt-2 line-clamp-3 flex-grow">
                {item.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {item.published_by || "Chemical Today"}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Advertisement Banner */}
      {banner && banner.image && (
        <div className="mt-8">
          <a href={banner.redirect_url} target="_blank" rel="noopener noreferrer">
            <img
              src={banner.image}
              alt={banner.name}
              className="w-full h-24 object-cover rounded-md shadow-md hover:opacity-90 transition"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Equipment;
