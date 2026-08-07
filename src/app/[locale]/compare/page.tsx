import type { Metadata } from "next";
import Compare from "./Compare";

export const metadata: Metadata = {
  title: 'Сравнение'
}

export default function Page() {
  return (
    <Compare />
  );
}
