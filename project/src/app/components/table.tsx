import Image from "next/image";
import Link from "next/link";
import { Product } from "../types";

export default function Table({data}: {data: Array<Product>}) {
  return (
    <table className="table-auto w-full mt-10">
      <thead className="border-b-2 border-[#d1d5db] h-10">
        <tr>
          <th className="text-left text-sm">Name</th>
          <th className="text-left text-sm">Seller</th>
          <th className="text-left text-sm">Status</th>
          <th className="text-left text-sm">Price</th>
          <th className="text-left text-sm"></th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({
            id,
            image,
            name,
            seller,
            active,
            price,
          }: {
            id: string;
            image: string;
            name: string;
            seller: string;
            active: boolean;
            price: string;
          }) => (
            <tr className="h-20 border-b border-[#d1d5db]" key={id}>
              <td>
                <div>
                  <Image
                    src={image}
                    alt="Company Logo"
                    className="inline mr-8"
                    width={40}
                    height={40}
                  />
                  <Link href={`/item/${id}`}>{name}</Link>
                </div>
              </td>
              <td>{seller}</td>
              <td>
                {active && (
                  <span className="rounded-full text-[#166534] font-bold bg-[#dcfce7] px-2 py-1">
                    Active
                  </span>
                )}
              </td>
              <td className="font-bold">${price}</td>
              <td>
                <span className="font-bold text-red-600">Remove</span>
              </td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}
