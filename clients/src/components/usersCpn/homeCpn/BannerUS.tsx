import { Link } from "react-router-dom";

export default function BannerUS() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center py-36"
      style={{
        backgroundImage:
          'url("https://illuminatedpromotions.co.uk/wp-content/uploads/2022/05/promotional-gadgets-blog-banner.jpg")',
      }}
    >
      <div className="container text-cyan-600 pl-5">
        <h1 className="text-6xl font-medium mb-4 capitalize ">
          best collection for <br /> your home
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam{" "}
          <br />
          accusantium perspiciatis, sapiente magni eos dolorum ex quos dolores
          odio
        </p>
        <div className="mt-12">
          <Link
            to={"categories"}
            className=" border-2 border-cyan-200 border-solid bg-cyan-500  text-white px-8 py-3 font-medium 
            rounded-md hover:bg-transparent  transition-colors hover:text-cyan-600"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </div>
  );
}
