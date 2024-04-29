// AboutUs.js

import React from 'react';
import { Img } from "components";

const AboutUs = () => {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-20">
        <div className="bg-white rounded-lg shadow-lg p-10 md:p-20">
          <h2 className="text-3xl font-bold text-center mb-10">About Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                <Img src="team-member-1.jpg" alt="John Doe" />
              </div>
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                <Img src="team-member-2.jpg" alt="Jane Smith" />
              </div>
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-600">Head of Operations</p>
            </div>
            <div className="text-center">
              <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6">
                <Img src="team-member-3.jpg" alt="Michael Johnson" />
              </div>
              <h3 className="text-xl font-bold mb-2">Michael Johnson</h3>
              <p className="text-gray-600">Lead Instructor</p>
            </div>
          </div>
          <p className="text-center mt-10 text-gray-700">
            SkillSphere is a platform dedicated to helping individuals develop their skills
            and achieve their career goals. We provide high-quality courses and resources
            designed by industry experts to empower learners worldwide.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
