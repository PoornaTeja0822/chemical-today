import React, { useEffect, useState } from "react";

interface SpotlightCard {
  id: string;
  image: string;
  tag: string;
  title: string;
  source: string;
  url: string;
}

interface SpotlightSection {
  horizontal_banner: {
    image: string;
    redirect_url: string;
  };
  plant_visit: SpotlightCard;
  management1: SpotlightCard;
  management2: SpotlightCard;
  management3: SpotlightCard;
  management4: SpotlightCard;
}

const Spotlight: React.FC = () => {
  const [spotlightData, setSpotlightData] = useState<SpotlightSection | null>(
    null
  );

  useEffect(() => {
    const fetchSpotlightData = async () => {
      try {
        const response = await fetch("https://admin.chemicaltoday.in/homepage/home_page_data"); // replace with your backend API endpoint
        const data = await response.json();

        // Map API data into our SpotlightCard[] format
        const formattedData: SpotlightSection = {
          horizontal_banner: {
            image: data.spotlightSection.horizontal_banner.image,
            redirect_url: data.spotlightSection.horizontal_banner.redirect_url,
          },
          plant_visit: {
            id: data.spotlightSection.plant_visit.id,
            image: data.spotlightSection.plant_visit.web_image_url,
            tag: "Plant Visit",
            title: data.spotlightSection.plant_visit.title,
            source: data.spotlightSection.plant_visit.published_by,
            url: `/news/Plant%20Visit/${data.spotlightSection.plant_visit.id}`,
          },
          management1: {
            id: data.spotlightSection.management1.id,
            image: data.spotlightSection.management1.web_image_url,
            tag: data.spotlightSection.management1.news_type,
            title: data.spotlightSection.management1.title,
            source: data.spotlightSection.management1.published_by,
            url: `/news/Management/${data.spotlightSection.management1.id}`,
          },
          management2: {
            id: data.spotlightSection.management2.id,
            image: data.spotlightSection.management2.web_image_url,
            tag: data.spotlightSection.management2.news_type,
            title: data.spotlightSection.management2.title,
            source: data.spotlightSection.management2.published_by,
            url: `/news/Management/${data.spotlightSection.management2.id}`,
          },
          management3: {
            id: data.spotlightSection.management3.id,
            image: data.spotlightSection.management3.web_image_url,
            tag: data.spotlightSection.management3.news_type,
            title: data.spotlightSection.management3.title,
            source: data.spotlightSection.management3.published_by,
            url: `/news/Management/${data.spotlightSection.management3.id}`,
          },
          management4: {
            id: data.spotlightSection.management4.id,
            image: data.spotlightSection.management4.web_image_url,
            tag: data.spotlightSection.management4.news_type,
            title: data.spotlightSection.management4.title,
            source: data.spotlightSection.management4.published_by,
            url: `/news/Management/${data.spotlightSection.management4.id}`,
          },
        };

        setSpotlightData(formattedData);
      } catch (error) {
        console.error("Error fetching spotlight data:", error);
      }
    };

    fetchSpotlightData();
  }, []);

  if (!spotlightData) {
    return <div>Loading Spotlight...</div>;
  }

  const { plant_visit, management1, management2, management3, management4 } =
    spotlightData;

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Spotlight
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Big Card */}
        <a
          href={plant_visit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white block"
        >
          <img
            src={plant_visit.image}
            alt={plant_visit.title}
            className="h-[350px] w-[530px] object-fill"
          />
          <div>
            <span
              style={{ backgroundColor: "#085EAB" }}
              className="text-white text-xm px-2 py-2 mt-1 w-fit"
            >
              {plant_visit.tag}
            </span>
            <h2 className="mt-2 text-xl font-semibold text-gray-800">
              {plant_visit.title}
            </h2>
            <p className="text-sm text-gray-500">{plant_visit.source}</p>
          </div>
        </a>

        {/* Four Small Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[management1, management2, management3, management4].map((card) => (
            <a
              key={card.id}
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white block"
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

      {/* Advertisement */}
      <div className="mt-10 flex justify-center">
        <a
          href={spotlightData.horizontal_banner.redirect_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-white mb-6 block"
        >
          <img
            src={spotlightData.horizontal_banner.image}
            alt="Spotlight Banner"
            className="w-full h-auto object-fill"
          />
        </a>
      </div>
    </div>
  );
};

export default Spotlight;
