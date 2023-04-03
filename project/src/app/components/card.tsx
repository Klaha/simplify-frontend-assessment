import Image from "next/image";
import Link from "next/link";

export default function Card({
  id,
  image,
  name,
  price,
  active,
}: {
  id: string;
  image: string;
  name: string;
  active: boolean;
  price: string;
}) {
  return (
    <div
      className="w-48 h-56 bg-white drop-shadow rounded-lg relative"
      key={id}
    >
      <div className="flex justify-center items-center flex-col text-black">
        <div className="h-20 w-20 m-2 relative">
          <Image src={image} alt="Company Logo" className="rounded-xl" fill />
        </div>
        <span className="text-[10px] text-center font-bold py-1 text-ellipsis whitespace-nowrap overflow-hidden	w-[85%]">
          {name}
        </span>
        <span className="text-[10px] pb-1">{`$${price}`}</span>
        {active ? (
          <span className="text-[10px] rounded-full text-[#166534] font-bold bg-[#dcfce7] px-2 py-1">
            Active
          </span>
        ) : (
          <span className="text-[10px] rounded-full text-red-600 font-bold bg-red-300 px-2 py-1">
            Inactive
          </span>
        )}
        <div className="flex w-full h-[58px] border-t border-[#d1d5db] mt-2">
          <div className="border-r border-[#d1d5db] w-full h-full text-center flex justify-center items-center">
            <span className="font-bold text-red-600">Remove</span>
          </div>
          <div className="w-full h-full text-center flex justify-center items-center">
            <Link className="font-bold text-black" href={`/item/${id}`}>
              View
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
