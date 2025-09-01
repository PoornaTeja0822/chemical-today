import React, { useState, useEffect } from "react";

interface InsightsCard {
  id: number;
  image: string;
  tag: string;
  title: string;
  source: string;
  
}

const cards: InsightsCard[] = [
  {
    id: 1,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Biogases%E2%80%99_Renewed_Role_in_Energy_Security_and_Sustainability:_IEA_20250728075741/Source:_Freepik.webp",
    tag: "Reports",
    title: "Biogases’ Renewed Role in Energy Security and Sustainability: IEA",
    source: "Chemical Today",
    
  },
  {
    id: 2,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Oxford_Researchers_Pioneer_Catalytic_Method_for_Building_Key_Drug_and_Insecticide__20250818073610/Oxford_team_unveils_catalytic_route_to_vital_molecular_structures._(Source:_University_of_Oxford)..webp",
    tag: "R & D",
    title: "Teams from Max-Planck, Hokkaido, and Osaka Uncover Safer LNP Formulations",
    source: "Chemical Today",
    
  },
  {
    id: 3,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Driving%20Profitability%20With%20Perfect-Fit%20Control%20Solution./Driving_Profitability_With_Perfect-Fit_Control_Solution._Driving_Profitability_With_Perfect-Fit_Control_Solution..jpg",
    tag: "White Papers",
    title: "Driving Profitability With Perfect-Fit Control Solution",
    source: "Chemical Today",
    
  },
  {
    id: 4,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Hexigone:%20Enhancing%20Corrosion%20Protection%20in%20the%20Rail%20Industry/Source_Hexigone_Inhibitors_Ltd._Frame_308_1.webp",
    tag: "Case Study",
    title: "Hexigone: Enhancing Corrosion Protection in the Rail Industry",
    source: "Chemical Today",
   
  },
];

const ads = [
  {
    id: 1,
    text: `"Automation is transforming India’s manufacturing sector, especially in the chemical industry, where precision, efficiency, and sustainability are critical."`,
    author: "~ Sriram Paramanand, Director, Rockwell Automation India",
  },
  {
    id: 2,
    text: `"AI-powered predictive maintenance and real-time analytics are streamlining operations, cutting energy use, and minimizing environmental impact."`,
    author: "~ Industry Expert",
  },
];

const Insights: React.FC = () => {
  const [activeAd, setActiveAd] = useState(0);

  // Auto-switch ads every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
     <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row with Line */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Insights
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Four Cards */}
      <div className="flex w-full gap-6  ">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-1/4 bg-white   flex flex-col"
            
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.title}
              className="w-[333px] h-[230px] object-cover mb-1 "
            />
            {/* Content */}
            <div mt-4>
             <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-sm px-2 py-2 w-fit"
                    >
                {card.tag}
              </span>
              <h2 className="mt-2 text-lg font-semibold text-gray-800">
                {card.title}
              </h2>
              <p className="text-sm text-gray-500 mt-auto">{card.source}</p>
              <button className="mt-3 px-8 py-2 border border-blue-600 text-blue-600  ">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Advertisement Section */}
      <div className="mt-10 bg-gradient-to-r from-green-400 to-blue-600 text-white p-6  text-center mb-8">
        <p className="text-lg italic mb-2">“{ads[activeAd].text}”</p>
        <p className="font-semibold">{ads[activeAd].author}</p>
      </div>
    </div>
  );
};

export default Insights;
