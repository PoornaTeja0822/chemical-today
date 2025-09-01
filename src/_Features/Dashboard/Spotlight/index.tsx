import React from "react";

interface SpotlightCard {
  id: number;
  image: string;
  tag: string;
  title: string;
  source: string;
  url: string;
}

const spotlightCards: SpotlightCard[] = [
  {
    id: 1,
    image: "https://new-chemical-today.s3.amazonaws.com/News/From_400_to_6,50,000_MTPA_and_Beyond_with_Shivtek_Spechemi_Ind._Ltd._20250627042925/Amitt_Nenwani,_Managing_Director_of_Shivtek_Spechem_Industries_Ltd._.webp",
    tag: "Plant Visit",
    title:
      "From 400 to 6,50,000 MTPA and Beyond with Shivtek Spechemi Industries Ltd",
    source: "Chemical Today",
    url: "https://www.chemicaltoday.in/news/Plant%20Visit/685e1e26aee2dfa06d5544d7",
  },
  {
    id: 2,
    image: "https://new-chemical-today.s3.amazonaws.com/News/From_Proprietary_Systems_to_Open_Standards:_The_O-PAS_Revolution_Explained_20250731055602/Ravindra_Jagasia,_Global_Business_Development_(Automation)_%E2%80%93_Strategic_Growth_Initiatives_at_R._STAH.webp",
    tag: "Management",
    title:
      "From Proprietary Systems to Open Standards: The O-PAS Revolution Explained",
    source: "Chemical Today",
    url: "https://www.chemicaltoday.in/news/Management/688b0572aee2dfa06d55467f",
  },
  {
    id: 3,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Future_of_the_Connected_Chemical_Plant:_Edge,_AI,_and_Cloud_in_Action_20250731050718/Sriram_Paramanand,_Director_%E2%80%93_Partnering_at_Rockwell_Automation_India..webp",
    tag: "Management",
    title:
      "Future of the Connected Chemical Plant: Edge, AI, and Cloud in Action",
    source: "Chemical Today",
    url: "https://www.chemicaltoday.in/news/Management/688afa06aee2dfa06d55467d",
  },
  {
    id: 4,
    image: "https://new-chemical-today.s3.amazonaws.com/News/Crafting%20Market-Ready%20Innovations%20through%20IP%20and%20Regulatory%20Synergy/Dr._Sudha_Kannan_Vice_President_IP__Statutory_Compliance_RD_Advanced_Materials_Aditya_Birla_Chemicals_Grasim_Industries._Web_Image_82.webp",
    tag: "Management",
    title:
      "Crafting Market-Ready Innovations through IP and Regulatory Synergy",
    source: "Chemical Today",
    url: "https://www.chemicaltoday.in/news/Management/688b3127aee2dfa06d554684",
  },
  {
    id: 5,
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/Building_Coalitions_to_Turn_Sustainability_Admiration_into_Real_Impact_20250729055756/Charlie_Tan,_CEO_of_Global_Impact_Coalition(GIC)..webp",
    tag: "Management",
    title:
      "Building Coalitions to Turn Sustainability Admiration into Real Impact",
    source: "Chemical Today",
    url: "https://www.chemicaltoday.in/news/Management/688862e4aee2dfa06d55465f",
  },
];

const Spotlight: React.FC = () => {
  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row with Line */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Spotlight
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Two Column Layout (50% + 50%) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-200px w-200px"> 
        {/* Big Card - 50% */}
     <a
  href={spotlightCards[0].url}
  target="_blank"
  rel="noopener noreferrer"
  className="bg-white block"
>
  <img
    src={spotlightCards[0].image}
    alt={spotlightCards[0].title}
    className="h-[350px] w-[530px] object-fill"
  />
  <div className="">
     <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-xm px-2 py-2 mt-1 w-fit">
             
      {spotlightCards[0].tag}
    </span>
    <h2 className="mt-2 text-xl font-semibold text-gray-800 ">
      {spotlightCards[0].title}
    </h2>
    <p className="text-sm text-gray-500">{spotlightCards[0].source}</p>
  </div>
</a>


        {/* Four Small Cards - 50% */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
          {spotlightCards.slice(1).map((card) => (
            <a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white block "
            >
              <img
                src={card.image}
                alt={card.title}
                className="h-32 w-120 object-cover" 
              />
              <div className="p-3">
                <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  {card.tag}
                </span>
                <h2 className="mt-2 text-sm font-semibold text-gray-800">
                  {card.title}
                </h2>
                <p className="text-xs text-gray-500">{card.source}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Advertisement Section */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://chemicaltoday.in/e-magazines"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white mb-6 block"
        >
          {/* Ad Image */}
          <img
            src="https://new-chemical-today.s3.amazonaws.com/advertisements/August-magazine-live/August-magazine-live/March_2025_Magazine_is_live.gif"
            alt="Chemical Today August 2025 Magazine"
            className="w-full h-auto object-fill"
          />
        </a>
      </div>
    </div>
  );
};

export default Spotlight;
