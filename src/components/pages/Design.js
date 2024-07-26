import Navbar from "../Navbar";
import { FaLaptopCode, FaMobileAlt, FaPaintBrush, FaUserAlt } from 'react-icons/fa';

export default function Design() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold underline flex  text-white justify-center py-8">
                    DESIGN
                </h1>
                <section className="px-4 py-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Welcome to WITS DESIGN, your trusted partner in the design field of the IT industry. At WITS, we specialize in creating visually stunning and user-friendly designs that set your IT company apart from the competition.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaLaptopCode className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Website Design</h3>
                                    <p className="text-sm font-light">Create visually appealing and responsive websites that captivate your audience.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaMobileAlt className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">App Design</h3>
                                    <p className="text-sm font-light">Design user-friendly mobile applications that provide an exceptional user experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Our talented team of designers is dedicated to delivering customized solutions that enhance user experience, boost engagement, and reflect your brand's unique identity.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaPaintBrush className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">UI Design</h3>
                                    <p className="text-sm font-light">Optimize user interfaces to create intuitive and engaging user interactions.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaUserAlt className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">UX Design</h3>
                                    <p className="text-sm font-light">Enhance user experiences to increase satisfaction and engagement.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-light">
                            From website and app design to user interface (UI) and user experience (UX) optimization, we offer a full range of design services to meet your specific needs. Let InnovateDesign transform your vision into reality with cutting-edge designs that captivate and inspire.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
