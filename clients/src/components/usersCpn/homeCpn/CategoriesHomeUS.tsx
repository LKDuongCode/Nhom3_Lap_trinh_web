export default function CategoriesHomeUS() {
  return (
    <div className="container py-16">
      <h2 className="text-2xl font-semibold text-gray-800 uppercase mb-6 ml-5">
        shop by category
      </h2>
      <div className="grid grid-cols-3 gap-3 px-5">
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNng1L1C_GAGHZg_soGqNZolLzFCVdcgokjQ&s"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Smart Phone
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNng1L1C_GAGHZg_soGqNZolLzFCVdcgokjQ&s"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Smart Phone
          </a>
        </div>
        <div className="relative rounded-sm overflow-hidden group">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNng1L1C_GAGHZg_soGqNZolLzFCVdcgokjQ&s"
            alt="category 1"
            className="w-full"
          />
          <a
            href="#"
            className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-xl text-white font-roboto font-medium group-hover:bg-opacity-60 transition"
          >
            Smart Phone
          </a>
        </div>
      </div>
    </div>
  );
}
