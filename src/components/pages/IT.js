import Navbar from "../Navbar";
import { FaCloud, FaLock, FaCogs, FaServer, FaNetworkWired } from 'react-icons/fa';

export default function IT() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen bg-gray-900 text-white">
                <h1 className="text-3xl font-bold underline flex justify-center  text-white py-8">
                    INFORMATION TECHNOLOGY
                </h1>
                <section className="px-4 py-8">
                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Welcome to WITS, your ultimate partner in the IT field. At WITS, we are committed to providing top-notch IT solutions that drive efficiency, innovation, and growth for businesses of all sizes.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaCogs className="text-blue-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">IT Consulting</h3>
                                    <p className="text-sm font-light">Expert guidance to optimize your IT infrastructure and strategy.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaServer className="text-green-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">System Integration</h3>
                                    <p className="text-sm font-light">Seamlessly integrate your systems for improved efficiency and performance.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light mb-6">
                            Our team of skilled professionals excels in delivering a wide range of services, including IT consulting, system integration, cloud solutions, cybersecurity, and managed IT services.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaCloud className="text-purple-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Cloud Solutions</h3>
                                    <p className="text-sm font-light">Scalable and secure cloud solutions tailored to your business needs.</p>
                                </div>
                            </div>
                            <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center">
                                <FaLock className="text-red-500 text-3xl mr-4" />
                                <div>
                                    <h3 className="text-xl font-semibold">Cybersecurity</h3>
                                    <p className="text-sm font-light">Protect your data and systems with top-tier cybersecurity services.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
                        <p className="text-lg font-light">
                            We leverage the latest technologies and industry best practices to ensure that your IT infrastructure is robust, secure, and scalable. Whether you're looking to streamline your operations, enhance data security, or embark on a digital transformation journey, WITS is here to support you every step of the way.
                        </p>
                        <div className="bg-gray-700 p-4 rounded-lg shadow-md flex items-center mt-4">
                            <FaNetworkWired className="text-teal-500 text-3xl mr-4" />
                            <div>
                                <h3 className="text-xl font-semibold">Managed IT Services</h3>
                                <p className="text-sm font-light">Comprehensive IT management to keep your business running smoothly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <p className="text-lg font-light">
                            Partner with us to experience the power of innovative IT solutions tailored to your unique needs.
                        </p>
                    </div>
                </section>
            </div>
        </>
    )
}
