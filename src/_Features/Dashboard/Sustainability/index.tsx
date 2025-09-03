import React, { useEffect, useState } from "react";

interface SustainabilityNews {
  id: string;
  title: string;
  published_date: string;
  published_by: string;
  thumbnail_image_url: string;
  web_image_url: string;
  mob_image_url: string;
  redirect_url?: string;
}

interface Advertisement {
  id: string;
  image: string;
  redirect_url: string;
  name: string;
}

const Sustainability: React.FC = () => {
  const [posts, setPosts] = useState<SustainabilityNews[]>([]);
  const [advertisement, setAdvertisement] = useState<Advertisement | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSustainability = async () => {
      try {
        const res = await fetch(
          "https://admin.chemicaltoday.in/homepage/home_page_data"
        );
        const data = await res.json();
        const section = data.sustainabilitySection;

        // ✅ Extract news dynamically (news1, news2, ...)
        const newsPosts = Object.keys(section)
          .filter((key) => key.startsWith("news"))
          .map((key) => section[key]);

        // ✅ Extract horizontal banner for ad
        const ad = section.horizontal_banner;

        setPosts(newsPosts);
        setAdvertisement(ad);
      } catch (err) {
        console.error("Error fetching sustainability section:", err);
        setError("Failed to load sustainability data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSustainability();
  }, []);

  if (loading) {
    return <div className="text-center py-6">Loading Sustainability...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-6">{error}</div>;
  }

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Sustainability
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Posts */}
      <div className="grid grid-cols-5 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href={post.redirect_url || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white border rounded-md shadow-md hover:shadow-lg transition flex flex-col"
          >
            <img
              src={post.thumbnail_image_url || post.web_image_url || post.mob_image_url}
              alt={post.title}
              className="w-full h-40 object-cover rounded-t-md"
            />
            <div className="p-3 flex flex-col flex-grow">
              <p className="text-xs text-white bg-blue-600 inline-block px-2 py-1 rounded">
                {new Date(post.published_date).toDateString()}
              </p>
              <h2 className="font-semibold text-sm mt-2 line-clamp-3 flex-grow">
                {post.title}
              </h2>
              <p className="text-xs text-gray-500 mt-1">
                {post.published_by || "Chemical Today"}
              </p>
            </div>
          </a>
        ))}
      </div>

      {/* Advertisement */}
      {advertisement && (
        <div className="mt-8">
          <a
            href={advertisement.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={advertisement.image}
              alt={advertisement.name}
              className="w-full h-24 object-cover rounded-md shadow-md hover:opacity-90 transition"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Sustainability;
