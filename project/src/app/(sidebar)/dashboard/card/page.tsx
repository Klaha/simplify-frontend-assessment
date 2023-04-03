"use client";
import useSWR from "swr";
import Card from "@/app/components/card";
import Loading from "@/app/components/loading";
import { Product } from "@/app/types";

export default function CardPage() {
  const { data, isLoading }: {data: Array<Product>, isLoading: boolean} = useSWR("/api/favorites", (apiURL: string) =>
    fetch(apiURL).then((res) => res.json())
  );

  return (
    <main>
      {!isLoading ? (
        <>
          <h1 className="text-black px-8 pt-4 text-3xl font-bold">Dashboard</h1>
          <div className="grid grid-cols-4 gap-y-10 gap-x-10 mt-10 ml-16">
            {data.map(
              ({
                id,
                image,
                name,
                active,
                price,
              }: {
                id: string;
                image: string;
                name: string;
                active: boolean;
                price: string;
              }) => 
                <Card 
                  key={id}
                  id={id}
                  image={image}
                  name={name}
                  active={active}
                  price={price}
                />
            )}
          </div>
        </>
      ) : 
        <Loading />
      }
    </main>
  );
}
