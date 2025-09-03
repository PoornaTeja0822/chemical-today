import React, { useEffect, useState } from "react";

interface Post {
  image: string;
  date: string;
  title: string;
  source: string;
  link?: string;
}

interface Ad {
  image: string;
  redirect_url: string;
}

interface ApiResponse {
  homeScreenPostSection: {
    advt1: any;
    advt2: any;
    advt3: any;
    horizontal_banner: any;
    post1: any;
    post2: any;
    post3: any;
    post4: any;
  };
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [ads, setAds] = useState<Ad[]>([]);
  const [horizontalBanner, setHorizontalBanner] = useState<Ad | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with your real API URL
        const res = await fetch("https://admin.chemicaltoday.in/homepage/home_page_data");
        const data: ApiResponse = await res.json();

        const section = data.homeScreenPostSection;

        // ✅ Transform posts
        const postsArray: Post[] = [section.post1, section.post2, section.post3, section.post4].map(
          (post) => ({
            image: post.thumbnail_image_url,
            date: post.published_date,
            title: post.title,
            source: post.published_by,
            link: post.web_image_url, // or a dedicated "link" if exists
          })
        );

        // ✅ Transform ads
        const adsArray: Ad[] = [section.advt1, section.advt2, section.advt3].map((ad) => ({
          image: ad.image,
          redirect_url: ad.redirect_url,
        }));

        // ✅ Horizontal banner
        const banner = {
          image: section.horizontal_banner.image,
          redirect_url: section.horizontal_banner.redirect_url,
        };

        setPosts(postsArray);
        setAds(adsArray);
        setHorizontalBanner(banner);
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Header Row with Line */}
      <div className="flex items-center justify-between border-b border-gray-300 mb-4 pb-0">
        <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-0">
          Posts
        </h1>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          View more &gt;&gt;
        </a>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 h-full">
        {/* Left Side (Posts) */}
        <div className="lg:col-span-3 flex flex-col">
          <div className="grid grid-cols-2 gap-10 flex-1">
            {posts.map((post, index) => (
              <a
                key={index}
                href={post.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[200px] object-fill"
                  />
                  <div>
                    <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-sm px-1 py-1"
                    >
                      {post.date}
                    </span>
                    <h2 className="text-md font-semibold mt-2">{post.title}</h2>
                    <p className="text-gray-600 text-sm">{post.source}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side (Ads) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {ads.map((ad, index) => (
            <div key={index} className="h-[220px] w-[500px] px-12 py-3 flex justify-center">
              <a
                href={ad.redirect_url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={ad.image}
                  alt={`Ad ${index + 1}`}
                  className="w-full h-full object-fill"
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* OUR KNOWLEDGE PARTNER Section */}
      {horizontalBanner && (
        <div className="bg-white mt-8 py-6 flex flex-col items-center">
          <a
            href={horizontalBanner.redirect_url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex justify-center"
          >
            <img
              src={horizontalBanner.image}
              alt="Our Knowledge Partner"
              className="object-fill w-full cursor-pointer"
            />
          </a>
        </div>
      )}
    </div>
  );
};

export default Posts;
