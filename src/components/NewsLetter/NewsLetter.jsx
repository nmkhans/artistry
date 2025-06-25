import React from "react";
import newsLetterBg from "../../assets/newsletter.jpg";
import { Twitter, Facebook, Instagram } from "lucide-react";

const NewsLetter = () => {
  return (
    <section
      style={{ background: `url(${newsLetterBg})` }}
      className="py-[40px] bg-center bg-no-repeat bg-cover"
    >
      <div className="container mx-auto px-5 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div>
            <h3 className="text-2xl font-semibold">
              Get the Latest Relaiable Updates
            </h3>
            <fieldset className="fieldset bg-transparent rounded-box w-full mt-5">
              <div className="join">
                <input
                  type="text"
                  className="input join-item p-6"
                  placeholder="Your main address"
                />
                <button className="btn btn-primary join-item p-6 text-white">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">Join Community</h3>
            <div>
              <div className="join mt-5 space-x-5">
                <button className="btn join-item btn-primary">
                  <Facebook />
                </button>
                <button className="btn join-item btn-primary">
                  <Twitter />
                </button>
                <button className="btn join-item btn-primary">
                  <Instagram />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
