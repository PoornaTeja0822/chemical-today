import React, { useEffect, useState } from "react";

interface ProductPost {
  id: string;
  image: string;
  date: string;
  title: string;
  source: string;
  link?: string;
}

interface Advertisement {
  id: string;
  image: string;
  redirect_url: string;
  name: string;
}

interface ProductSectionData {
  posts: ProductPost[];
  ads: Advertisement[];
}

const Products: React.FC = () => {
  const [productData, setProductData] = useState<ProductSectionData | null>(
    null
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://admin.chemicaltoday.in/homepage/home_page_data"); // replace with your actual API endpoint
        const data = await response.json();

        const formattedData: ProductSectionData = {
          posts: [
            {
              id: data.productSection.post1.id,
              image: data.productSection.post1.web_image_url,
              date: data.productSection.post1.published_date,
              title: data.productSection.post1.title,
              source: data.productSection.post1.published_by,
              link: `/news/Products/${data.productSection.post1.id}`,
            },
            {
              id: data.productSection.post2.id,
              image: data.productSection.post2.web_image_url,
              date: data.productSection.post2.published_date,
              title: data.productSection.post2.title,
              source: data.productSection.post2.published_by,
              link: `/news/Products/${data.productSection.post2.id}`,
            },
            {
              id: data.productSection.post3.id,
              image: data.productSection.post3.web_image_url,
              date: data.productSection.post3.published_date,
              title: data.productSection.post3.title,
              source: data.productSection.post3.published_by,
              link: `/news/Products/${data.productSection.post3.id}`,
            },
            {
              id: data.productSection.post4.id,
              image: data.productSection.post4.web_image_url,
              date: data.productSection.post4.published_date,
              title: data.productSection.post4.title,
              source: data.productSection.post4.published_by,
              link: `/news/Products/${data.productSection.post4.id}`,
            },
          ],
          ads: [
            {
              id: data.productSection.advt1.id,
              image: data.productSection.advt1.image,
              redirect_url: data.productSection.advt1.redirect_url,
              name: data.productSection.advt1.name,
            },
            {
              id: data.productSection.advt2.id,
              image: data.productSection.advt2.image,
              redirect_url: data.productSection.advt2.redirect_url,
              name: data.productSection.advt2.name,
            },
            {
              id: data.productSection.advt3.id,
              image: data.productSection.advt3.image,
              redirect_url: data.productSection.advt3.redirect_url,
              name: data.productSection.advt3.name,
            },
          ],
        };

        setProductData(formattedData);
      } catch (error) {
        console.error("Error fetching product data:", error);
      }
    };

    fetchProducts();
  }, []);

  if (!productData) {
    return <div>Loading Products...</div>;
  }

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
            {productData.posts.map((product) => (
              <a
                key={product.id}
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
            {productData.ads.map((ad) => (
              <div key={ad.id} className="flex justify-center">
                <a
                  href={ad.redirect_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={ad.image}
                    alt={ad.name}
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
