
import React from 'react';
import { FaBullhorn, FaCloud, FaBriefcase } from 'react-icons/fa'; // Import icons
import Navbar from '../Navbar';

export default function Products() {
  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen text-white py-12">
        <h1 className="text-4xl font-bold text-center  text-white mb-12">PRODUCTS</h1>
        <div className="flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaBullhorn className="text-yellow-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Digital Marketing</h3>
                <p className="text-base">
                  Social Media Management, SEO Optimization Services, Content Creation & Strategy.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaCloud className="text-blue-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">IT Services</h3>
                <p className="text-base">
                  Cloud Computing Solutions, Network Security & Monitoring, IT Support & Helpdesk Services.
                </p>
              </div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-4">
              <FaBriefcase className="text-green-500 text-4xl" />
              <div>
                <h3 className="text-2xl font-semibold mb-2">Business Services</h3>
                <p className="text-base">
                  Strategic Business Planning, Market Research & Analysis, Business Process Optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


// import React from 'react';
// import '../../App.css';
// import Navbar from '../Navbar';
// export default function Products() {
//   return(
//    <>
//     <Navbar/>
//     <h1>PRODUCTS</h1>
//       <div className="megaContainer">
//         <div />
//         <div className="container">
//           <div className="subContainer">
//             <div className="card">
//               <h3>Digital Marketing</h3>
//               <p>
//                Social Media Management,
//  SEO Optimization Services,
//  Content Creation & Strategy.
//               </p>
//             </div>
//             <div className="card">
//               <h3> IT Services</h3>
//               <p>
//               Cloud Computing Solutions,
//  Network Security & Monitoring,
// IT Support & Helpdesk Services.
//               </p>
//             </div>
//             <div className="card">
//               <h3>Business Services</h3>
//               <p>
//               1. Strategic Business Planning,
// Market Research & Analysis, Business Process Optimization
//               </p>
//             </div>
           
//             </div>
//           </div>
//         </div>
      
//     </>
//   );
// }
