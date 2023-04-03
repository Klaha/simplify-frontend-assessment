import OrderInfo from "@/app/components/orderInfo";
import ProductInfo from "@/app/components/productInfo";
import { getItemDetail } from "@/app/lib/get-item-detail";
import { Params } from "@/app/types";
import Image from "next/image";
import { redirect } from 'next/navigation';

export default async function ItemPage(props: Params) {
  const {id} = props.params;
  const itemDetail = await getItemDetail(id);
  !itemDetail && redirect('/dashboard/card');

  const { image, name, brand, model, color, category, description, price } = itemDetail;

  return (
    <main className="px-8 py-5 text-black">
      <div className="flex">
        <div>
          <Image src={image} alt="Company Logo" width={50} height={50} />
        </div>
        <div className="pl-4 flex flex-col">
          <span className="font-bold">{name}</span>
          <span className="text-[10px] text-[#707784]">{brand}</span>
        </div>
      </div>
      <div className="flex w-full mt-10 gap-8">
        <ProductInfo
          brand={brand}
          model={model}
          color={color}
          category={category}
          description={description}
        />
        <OrderInfo
          price={price}
        />
      </div>
    </main>
  );
}
