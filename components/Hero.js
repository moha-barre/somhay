export default function Hero() {
  return (
    <section className="relative bg-gray-950 text-white min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Global Products, Local Access
        </h1>

        {/* Short Business Paragraph */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          Somhay connects businesses in emerging markets with trusted Chinese suppliers. 
          From sourcing and logistics to secure payments, we make global trade simple, 
          affordable, and reliable. so you can focus on growing your business.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex justify-center space-x-4">
          <a
            href="/about"
            className="bg-[#4169E1] hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-medium text-lg transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}