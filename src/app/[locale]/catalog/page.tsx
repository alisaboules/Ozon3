import { db } from "@/lib/db";
import { Metadata } from "next";
import { buildCategoryTree } from "./BuildCategory";
import { CatalogContent } from "./Catalog";

export const metadata: Metadata = {
  title: 'Каталог',
};

export default async function Page() {
  const data = await db.query.categories.findMany();
  const tree = buildCategoryTree(data);
  return (
    <>
      <div className="mt-10 mb-20">
        <h1 className="font-bold text-4xl mb-10">Каталог</h1>
        <CatalogContent tree={tree} />
      </div>
      
    </>
  );
}