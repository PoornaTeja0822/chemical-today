import React from "react";

interface EventType {
  image: string;
  tag: string; // only tag now
  link?: string;
}

const sampleProducts: EventType[] = [
  {
    image: "https://www.chemicaltoday.in/static/media/0.5ba87b06cc3d111db82d.jpg",
    tag: "Industrial Events",
    link: "#",
  },
  {
    image: "https://www.chemicaltoday.in/static/media/2.2c0879b3949824398bad.jpg",
    tag: "Chemical Innovation",
    link: "#",
  },
  {
    image: "https://www.chemicaltoday.in/static/media/3.2a871fa3bc71b162d1b0.jpg",
    tag: "Sustainability",
    link: "#",
  },
  {
    image: "https://www.chemicaltoday.in/static/media/1.ed8cd1f79e8f70d1beda.jpg",
    tag: "Technology",
    link: "#",
  },
];

const samplePosts: EventType[] = [
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/ENHESA%20Data%20Tech%20-%20Side%20Banner/ENHESA%20Data%20Tech%20-%20Side%20Banner/Website_banner_ad_800_240_1.jpeg",
    tag: "",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/Cphi%20&%20Pmec%20-%20Side%20banner%20/Cphi%20&%20Pmec%20-%20Side%20banner%20/World-of-Chemicals-800x400.webp",
    tag: "",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/GCPMH%20-%20Side%20Banner/GCPMH%20-%20Side%20Banner/GCPMH_Banner_Ad_800x400_Bigsize_1_1.webp",
    tag: "",
  },
];

const Event: React.FC = () => {
  return (
    <div className="h-screen ml-[5%] mr-[5%]">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 h-full">
        {/* Left Side - Posts */}
        <div className="lg:col-span-3 flex flex-col">
          <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-4">
            Event
          </h1>
          <div className="grid grid-cols-2 gap-2 flex-1 overflow-y-auto pr-100">
            {sampleProducts.map((product, index) => (
              <a
                key={index}
                href={product.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-90"
              >
                <div>
                  <img
                    src={product.image}
                    alt={`Post ${index + 1}`}
                    className="w-[400px] h-[200px] object-fill"
                  />
                  {/* Only one tag */}
                  <div>
                    <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-sm px-2 py-1 inline-block mt-2"
                    >
                      {product.tag}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side - Ads */}
        <div className="lg:col-span-2 flex flex-col h-full px-8">
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold text-gray-800"></h1>
            <a href="#" className="text-blue-600 font-medium hover:underline">
              View more &gt;&gt;
            </a>
          </div>

          <div className="flex-2 flex flex-col space-y-5 justify-center">
            {samplePosts.map((post, index) => (
              <div key={index} className="flex justify-center">
                <img
                  src={post.image}
                  alt={`Ad ${index + 1}`}
                  className="object-fill"
                  style={{
                    width: "200%",
                    height: "200px",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
