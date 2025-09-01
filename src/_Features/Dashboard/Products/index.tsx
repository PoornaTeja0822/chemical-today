import React from "react";

interface Product {
  image: string;
  date: string;
  title: string;
  source: string;
  link?: string; // optional link
}

const sampleProducts: Product[] = [
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/Elkem_Unveils_High-Performance_Silicone-Based_Makeup_and_Skincare_Bases_20250730074553/Source:_Elkem_ASA.webp",
    date: "Jul 30, 2025",
    title:
      "Elkem Unveils High-Performance Silicone-Based Makeup and Skincare Bases",
    source: "Chemical Today",
    link: "https://www.elkem.com/",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/BASF_Launches_Ultramid%C2%AE_T6000_for_Durable,_Color-Stable_E&E_Components_20250729064020/PPA_for_small_and_color-stable_E&E_parts_(Source:_BASF_2025).webp",
    date: "Jul 29, 2025",
    title:
      "BASF Launches Ultramid® T6000 for Durable, Color-Stable E&E Components",
    source: "Chemical Today",
    link: "https://www.basf.com/",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/BASF%E2%80%99s_Ultrason%C2%AE_Brings_Design_and_Durability_to_Japanese_Specialty_Plastic_Market_20250723114146/Reusable_tableware_made_of_specialty_plastic_Ultrason%C2%AE_(Source:_Photo:_BASF_2025).webp",
    date: "Jul 23, 2025",
    title:
      "BASE's Ultrason® Brings Design and Durability to Modern Applications",
    source: "Chemical Today",
    link: "https://www.basf.com/",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/News/BYK_Unveils_UV_Stabilizer_for_Long-Lasting_Polyamide_Performance_20250723084938/Source:_BYK-Chemie_GmbH._.webp",
    date: "Jul 23, 2025",
    title:
      "BYK Unveils UV Stabilizer for Long-Lasting Polyamide Performance",
    source: "Chemical Today",
    link: "https://www.byk.com/",
  },
];

const samplePosts: Product[] = [
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/7th%20Edition%20ICC%20Sustainability%20Conclave%202025/7th%20Edition%20ICC%20Sustainability%20Conclave%202025/800_x_400_px_Banner_1.jpg",
    date: "",
    title: "",
    source: "",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/Nynas%20Ad/Nynas%20Ad/Nynas_banner_800x400_pix.jpg",
    date: "",
    title: "",
    source: "",
  },
  {
    image:
      "https://new-chemical-today.s3.amazonaws.com/advertisements/Shriram-Digital/Shriram-Digital/20240731DCMShriramDigitalBanner800x400-YS_1.jpg",
    date: "",
    title: "",
    source: "",
  },
];

const Products: React.FC = () => {
  const getAdLink = (index: number) => {
    if (index === 0) return "https://www.iccsustainabilityconclave.org/";
    if (index === 1) return "https://www.nynas.com/";
    if (index === 2)
      return "https://www.dcmshriram.com/our-businesses/chlor-vinyl-business";
    return "#";
  };

  return (
    <div className="h-auto ml-[5%] mr-[5%]">
      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 h-full">
        {/* Left Side */}
        <div className="lg:col-span-3 flex flex-col">
          <h1 className="text-xl font-semibold text-black bg-gray-300 px-10 py-1 w-fit mb-4">
            Products
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
                    alt={product.title}
                    className="w-[400px] h-[200px] object-fill"
                  />
                  <div>
                    <span
                      style={{ backgroundColor: "#085EAB" }}
                      className="text-white text-sm px-1 py-1"
                    >
                      {product.date}
                    </span>
                    <h2 className="text-md font-semibold mt-2">
                      {product.title}
                    </h2>
                    <p className="text-gray-600 text-sm">{product.source}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Right Side */}
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
                <a
                  href={getAdLink(index)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={post.image}
alt={`Post ${index + 1}`}
                    className="w-full h-[200px] object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OUR KNOWLEDGE PARTNER Section */}
      <div className="bg-white mt-10 py-6 flex flex-col items-center">
        <a
          href="https://rrma-global.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex justify-center"
        >
          <img
            src="https://new-chemical-today.s3.amazonaws.com/advertisements/banner/banner/banner.webp"
            alt="Our Knowledge Partner"
            className="object-fill w-full cursor-pointer"
          />
        </a>
      </div>
    </div>
  );
};

export default Products;