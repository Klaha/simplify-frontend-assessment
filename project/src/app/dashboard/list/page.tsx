"use client";
import useSWR from "swr";
import Loading from "@/app/components/loading";
import Table from "@/app/components/table";

export default function ListPage() {
  const { data, isLoading } = useSWR(
    "/api/favorites",
    (apiURL: string) => fetch(apiURL).then((res) => res.json())
  );

  return (
    <main className="text-black px-8 py-2">
      {!isLoading ? (
        <article>
          <div className="flex w-full">
            <div className="w-9/12">
              <span className="font-bold">Favorites</span>
              <p className="text-[#626060] text-xs">
                A list of your favorites items to keep track of.
              </p>
            </div>
            <div className="w-3/12 flex justify-end">
              <button className="rounded-md bg-[#4F46E5] text-white py-2 px-3 justify-between">
                + Add
              </button>
            </div>
          </div>
          <Table 
            data={data}
          />
        </article>
      ) : (
        <Loading />
      )}
    </main>
  );
}
