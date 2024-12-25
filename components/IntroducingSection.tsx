// *********************
// Role of the component: IntroducingSection with the text "Introducing Singitronic"
// Name of the component: IntroducingSection.tsx
// Developer: Aleksandar Kuzmanovic
// Version: 1.0
// Component call: <IntroducingSection />
// Input parameters: no input parameters
// Output: Section with the text "Introducing Singitronic" and button
// *********************

import Link from "next/link";
import React from "react";

const IntroducingSection = () => {
  return (
    <div className="py-20 pt-24 bg-gradient-to-l from-white to-green-600">
      <div className="text-center flex flex-col gap-y-5 items-center">
        <h2 className="text-white text-8xl font-extrabold text-center mb-2 max-md:text-6xl max-[480px]:text-4xl">
          Prezantojme <span className="text-black">UBT</span><span className="text-green-600">AgroMarket</span>
        </h2>
        <div>
          <p className="text-black text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Blej produktet më të mira bujqësore.
          </p>
          <p className="text-black text-center text-2xl font-semibold max-md:text-xl max-[480px]:text-base">
            Zgjidhjet ideale për fermerët modernë.
          </p>
          <Link href="/shop" className="block text-green-600 bg-black font-bold px-12 py-3 text-xl w-96 mt-2 max-md:text-lg max-md:w-72 max-[480px]:w-60 mx-auto rounded-lg">
            Bli Tani
          </Link>
        </div>
      </div>
    </div>
  );
};

export default IntroducingSection;
