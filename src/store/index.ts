import { atomWithStorage } from "jotai/utils";

export const favouritesProductIdAtom = atomWithStorage<string[]>('favouritesProductId', [])
export const compareProductIdAtom = atomWithStorage<string[]>('compareProduct', []);
