export default function OrderInfo({price} : {price: string}) {
  return (
    <div className="w-2/6 bg-white rounded-lg shadow-md px-4 py-4">
      <div className="flex items-baseline	mb-8">
        <input type="radio" name="1" id="1" defaultChecked />
        <div className="pl-3 flex flex-col">
          <h2 className="font-bold">Buy New:</h2>
          <h2 className="text-3xl font-bold">{`$${price}`}</h2>
          <span className="text-[#707784]">Same-Day</span>
          <span className="text-[#306f83]">Free Returns</span>
          <p className="py-2">
            FREE delivery <strong>Today 2 PM - 6 PM</strong>. Order within{" "}
            <span className="text-[#31741e]">1 hr 15 mins</span>
          </p>
          <div className="flex mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 inline -ml-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span className="text-[#0E65E9] pl-2">Deliver to Tom Cook</span>
          </div>
          <h2 className="text-[#31741e] font-bold text-xl">In Stock</h2>
        </div>
      </div>
      <div>
        <button className="rounded-md bg-[#47454E] text-white py-2 px-3 justify-between w-full my-1">
          Add to Cart
        </button>
        <button className="rounded-md bg-[#2563EB] text-white py-2 px-3 justify-between w-full">
          Buy Now
        </button>
      </div>
    </div>
  );
}
