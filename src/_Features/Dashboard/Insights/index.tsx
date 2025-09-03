import React, { useState, useEffect } from "react";

interface InsightsCard {
  id: string;
  image: string;
  tag: string;
  title: string;
  source: string;
  link?: string;
}

interface Ad {
  id: string;
  image: string;
  redirect_url: string;
}

interface ApiResponse {
  insightSection: {
    report: any;
    randd: any;
    whitepaper: any;
    casestudy: any;
    horizontal_banner: any[];
  };
}

const Insights: React.FC = () => {
  const [cards, setCards] = useState<InsightsCard[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);
  const [activeAd, setActiveAd] = useState(0);

  // Auto-switch ads every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveAd((prev) => (prev + 1) % ads.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [ads.length]);

  // Fetch and transform API data
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your real API URL
        const res = await fetch("https://admin.chemicaltoday.in/homepage/home_page_data");
        const data: ApiResponse = await res.json();

        const section = data.insightSection;

        // ✅ Build cards from 4 types of insight
        const cardData: InsightsCard[] = [
          section.report,
          section.randd,
          section.whitepaper,
          section.casestudy,
        ].map((item) => ({
          id: item.id,
          image: item.thumbnail_image_url,
          tag: item.news_type,
          title: item.title,
          source: item.published_by,
          link: item.web_image_url,
        }));

        // ✅ Ads come from horizontal_banner array
        const adsData: Ad[] = section.horizontal_banner.map((ad) => ({
          id: ad.id,
          image: ad.image,
          redirect_url: ad.redirect_url,
        }));

        setCards(cardData);
        setAds(adsData);
      } catch (err) {
        console.error("Error fetching insights:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Insights
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Four Cards */}
      <div className="flex w-full gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="w-1/4 bg-white flex flex-col"
          >
            {/* Image */}
            <a href={card.link} target="_blank" rel="noopener noreferrer">
              <img
                src={card.image}
                alt={card.title}
                className="w-[333px] h-[230px] object-cover mb-1"
              />
            </a>
            {/* Content */}
            <div>
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
              <a
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block px-8 py-2 border border-blue-600 text-blue-600 hover:bg-blue-50"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Advertisement Section */}
      {ads.length > 0 && (
        <div className="mt-10 bg-gradient-to-r from-green-400 to-blue-600 text-white p-0 text-center mb-8">
          <a
            href={ads[activeAd].redirect_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={ads[activeAd].image}
              alt="Ad Banner"
              className="mx-auto  object-cover"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Insights;
