export default function ProductInfo({
  brand,
  model,
  color,
  category,
  description,
}: {
  brand: string;
  model: string;
  color: string;
  category: string;
  description: string;
}) {
  return (
    <div className="w-4/6 bg-white rounded-lg shadow-md">
      <div className="py-4 border-b border-[#d1d5db] px-8">
        <h1 className="text-base font-bold">Product Information</h1>
        <p className="text-[10px] text-[#707784]">Item and seller details</p>
      </div>
      <div className="flex w-full px-8 py-4">
        <div className="w-1/2">
          <p className="text-xs text-[#707784]">Brand</p>
          <p className="text-xs">{brand}</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs text-[#707784]">Model Name</p>
          <p className="text-xs">{model}</p>
        </div>
      </div>
      <div className="flex w-full px-8 py-4">
        <div className="w-1/2">
          <p className="text-xs text-[#707784]">Color</p>
          <p className="text-xs">{color}</p>
        </div>
        <div className="w-1/2">
          <p className="text-xs text-[#707784]">Category</p>
          <p className="text-xs">{category}</p>
        </div>
      </div>
      <div className="px-8 py-8">
        <p className="text-xs text-[#707784]">About</p>
        <p className="text-xs py-2">{description}</p>
      </div>
    </div>
  );
}
