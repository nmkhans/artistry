import React from "react";
import CTAOne from "../../assets/cta_one.jpg";
import CTATwo from "../../assets/cta_two.jpg";

const CTA = () => {
  return (
    <section className="py-[80px]">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-5">
              Timeless Artifacts from Ancient Civilizations
            </h2>
            <p className="text-slate-600 leading-10">
              Discover the stories of the past, preserved in stone,
              scroll, and steel. These extraordinary artifacts unveil
              the craftsmanship, culture, and legacy of bygone eras.
              Whether it’s a ceremonial blade, a sacred manuscript, or
              a mysterious relic unearthed from the sands of time—each
              piece holds a unique voice from history. <br />
              <b>
                Explore the wonder of ancient design and innovation.
              </b>
            </p>
          </div>
          <div>
            <div className="relative">
              <div className="bg-secondary p-2 rounded-lg w-[400px] border-gray-500">
                <img
                  className="w-full"
                  src={CTAOne}
                  alt="call to action"
                />
              </div>
              <div className="absolute top-22 right-0 bg-secondary p-2 rounded-lg w-[400px] border-gray-500">
                <img src={CTATwo} alt="call to action" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
