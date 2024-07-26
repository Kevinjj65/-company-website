import Navbar from "../Navbar";
import { FaChartLine, FaLightbulb, FaCogs, FaBullseye } from "react-icons/fa";

export default function Business() {
    return (
        <>
            <Navbar />
            <div className="bg-gray-900 min-h-screen text-white">
                <div className="px-6 py-12 max-w-4xl mx-auto">
                    <h1 className="text-4xl font-bold underline text-center  text-white mb-8">
                        BUSINESS SERVICES
                    </h1>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Welcome to WITS</h2>
                        <p className="text-lg leading-relaxed font-light">
                            Welcome to WITS, your strategic partner in the business field of the IT industry. At WITS, we are committed to empowering IT companies with innovative business solutions that drive growth and success. Our expert team excels in providing a wide range of services, including business consulting, market analysis, strategic planning, and operational optimization.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaChartLine className="mr-2 text-blue-500" /> Our Approach
                        </h2>
                        <p className="text-lg leading-relaxed font-light">
                            We understand the unique challenges of the IT sector and tailor our solutions to meet your specific needs, ensuring you stay ahead in a competitive market. Our approach includes data-driven strategies and innovative solutions to help you achieve your business goals.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaLightbulb className="mr-2 text-yellow-500" /> Why Choose Us?
                        </h2>
                        <ul className="list-disc list-inside text-lg leading-relaxed font-light">
                            <li>Expert team with a track record of successful campaigns.</li>
                            <li>Customized strategies tailored to your business needs.</li>
                            <li>Cutting-edge technology and creative solutions.</li>
                            <li>Comprehensive services from SEO to social media marketing.</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg mb-8">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaCogs className="mr-2 text-green-500" /> Services We Offer
                        </h2>
                        <p className="text-lg leading-relaxed font-light">
                            Our services include:
                        </p>
                        <ul className="list-disc list-inside text-lg leading-relaxed font-light">
                            <li>Business Consulting</li>
                            <li>Market Analysis</li>
                            <li>Strategic Planning</li>
                            <li>Operational Optimization</li>
                        </ul>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                        <h2 className="text-2xl font-semibold mb-4 flex items-center">
                            <FaBullseye className="mr-2 text-red-500" /> Contact Us
                        </h2>
                        <p className="text-lg leading-relaxed font-light">
                            Ready to take your business to the next level? Contact us today to learn more about our services and how we can help you achieve your goals.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

