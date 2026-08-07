import { Metadata } from "next";
import Favourites from "./Favourites";

export const metadata: Metadata = {
  title: 'Favourites',
}

export default function Page() {
  return (
    <Favourites />
  );
}