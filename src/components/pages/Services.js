import React from "react";
import { FaCode, FaMobileAlt, FaPaintBrush } from "react-icons/fa";
import Navbar from "../Navbar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-white py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          SERVICES
        </h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaCode className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
                <p className="text-base">
                  We offer professional web development services using the latest technologies.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaMobileAlt className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Mobile Development</h3>
                <p className="text-base">
                  Create responsive and high-performance mobile applications with our expert team.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaPaintBrush className="text-purple-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">UI/UX Design</h3>
                <p className="text-base">
                  Enhance user satisfaction with our creative and user-friendly design solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// import React from "react";
// // import './../Services.css';
// import Navbar from "../Navbar";

// export default function Services() {
//   return (
//     <>
//       <Navbar />
//       <h1>SERVICES</h1>
//       <div className="megaContainer">
//         <div />
//         <div className="container">
//           <div className="subContainer">
//             <div className="card">
//               <h3>Web Development</h3>
//               <p>
//                 We offer professional web development services using the latest
//                 technologies.
//               </p>
//               </div>
//             <div className="card">
//               <h3>Mobile Development</h3>
//               <p>
//                 Create responsive and high-performance mobile applications with
//                 our expert team.
//               </p>
//             </div>
//             <div className="card">
//               <h3>UI/UX Design</h3>
//               <p>
//                 Enhance user satisfaction with our creative and user-friendly
//                 design solutions.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
