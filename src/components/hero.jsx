const Hero = () => {
    return (
        <div className="min-h-screen flex flex-col-reverse lg:flex-row items-center px-8 lg:px-20 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white">
            <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Halo, Saya <br />
                    <span className="text-yellow-300">Sely</span>
                </h1>
                <p className="text-lg lg:text-xl">
                    Saya seorang profesional yang berfokus pada pengembangan dan desain web. Saya siap membantu Anda mencapai tujuan digital Anda.
                </p>
                <div className="flex justify-center lg:justify-start space-x-4">
                    <button className="px-6 py-3 bg-yellow-400 text-indigo-800 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-200">
                        Hubungi Saya
                    </button>
                    <button className="px-6 py-3 bg-transparent border border-white rounded-lg shadow-lg hover:bg-white hover:text-indigo-800 transition duration-200">
                        Lihat Portofolio
                    </button>
                </div>
            </div>

            <div className="lg:w-1/2 flex justify-center">
                <img 
                    src="https://via.placeholder.com/400" 
                    alt="Hero Image" 
                    className="max-w-full h-auto rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}

export default Hero;
