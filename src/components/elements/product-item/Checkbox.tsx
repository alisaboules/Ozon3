import { Check } from "lucide-react";
import { cn } from "@/utils/cn";

interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
}

export function Checkbox({ checked, onChange }: CheckboxProps) {
  return (
    <button
      type="button"
      onClick={onChange}
      className={cn(
        "flex h-6 w-6 items-center justify-center rounded-lg border transition-colors",
        checked
          ? "border-primary bg-primary text-white"
          : "border-[#d7dee9] bg-white hover:bg-[#003078]/10"
      )}
    >
      {checked && <Check size={16} strokeWidth={3} />}
    </button>
  );
}