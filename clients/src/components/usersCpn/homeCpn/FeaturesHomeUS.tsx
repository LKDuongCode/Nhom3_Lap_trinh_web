export default function FeaturesHomeUS() {
  return (
    <div className="container py-16">
      <div className="w-10/12 grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto justify-center">
        <div className="border-2 border-red-500 border-solid rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/assets%2Fdelivery-van.svg?alt=media&token=2b360f11-1304-4a73-87c0-c131e931cf72"
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Free Shipping</h4>
            <p className="text-gray-500 text-sm">Order over $200</p>
          </div>
        </div>
        <div className="border-2 border-red-500 border-solid  rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/assets%2Fmoney-back.svg?alt=media&token=8a324a1d-1883-45f1-a3d1-00c0905e4633"
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">Money Rturns</h4>
            <p className="text-gray-500 text-sm">30 days money returs</p>
          </div>
        </div>
        <div className="border-2 border-red-500 border-solid  rounded-sm px-3 py-6 flex justify-center items-center gap-5">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/project-module4-react.appspot.com/o/assets%2Fservice-hours.svg?alt=media&token=eebeb42a-6f4f-47b4-838a-a7214f746801"
            alt="Delivery"
            className="w-12 h-12 object-contain"
          />
          <div>
            <h4 className="font-medium capitalize text-lg">24/7 Support</h4>
            <p className="text-gray-500 text-sm">Customer support</p>
          </div>
        </div>
      </div>
    </div>
  );
}
