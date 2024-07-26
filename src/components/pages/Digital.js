import Navbar from "../Navbar";
import { FaDigitalTachograph, FaShieldAlt, FaChartPie, FaNetworkWired } from 'react-icons/fa';

export default function Digital() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold underline flex justify-center  text-white py-8">
                    DIGITALS
                </h1>
                <section className="px-4 py-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Welcome to WITS Solutions, your go-to expert in the digital field of the IT industry. At WITS Solutions, we specialize in providing comprehensive digital services that drive innovation and growth for IT companies.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaDigitalTachograph className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Digital Strategies</h3>
                                    <p className="text-sm font-light">Develop robust digital strategies to drive innovation and growth.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaNetworkWired className="text-green-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Online Presence</h3>
                                    <p className="text-sm font-light">Optimize your online presence to reach a wider audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Our team of experienced professionals is dedicated to helping you navigate the ever-evolving digital landscape with ease and efficiency.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaChartPie className="text-yellow-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Advanced Analytics</h3>
                                    <p className="text-sm font-light">Implement advanced analytics to make data-driven decisions.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaShieldAlt className="text-red-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Cybersecurity</h3>
                                    <p className="text-sm font-light">Ensure top-tier cybersecurity to protect your digital assets.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-light">
                            From developing robust digital strategies and optimizing your online presence to implementing advanced analytics and ensuring top-tier cybersecurity, we offer a full spectrum of services designed to elevate your business. Partner with WITS Solutions to harness the power of digital transformation and achieve unparalleled success in the IT world.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
