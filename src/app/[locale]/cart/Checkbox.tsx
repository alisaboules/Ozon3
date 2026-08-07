'use client';

import { Checkbox } from "@/components/elements/product-item/Checkbox";

interface Props {
  checked: boolean;
  onChange: () => void;
}

export function SelectAll({ checked, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox
        checked={checked}
        onChange={onChange}
      />

      <span className="font-normal text-base text-[#070707]">
        Выбрать все
      </span>
    </div>
  );
}