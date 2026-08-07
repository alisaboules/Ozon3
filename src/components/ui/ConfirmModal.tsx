'use client';
import { X } from 'lucide-react';

interface ConfirmModalProps {
  open: boolean;
  title: string;
  description: string;
  confirmText?: string;
  cancelText?: string;
  confirmButtonClassName?: string;
  onConfirm: () => void;
  onClose: () => void;
}

export function ConfirmModal({
  open,
  title,
  description,
  confirmText = 'Удалить',
  cancelText = 'Отмена',
  confirmButtonClassName = 'bg-primary hover:bg-primary/90',
  onConfirm,
  onClose,
}: ConfirmModalProps) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-150 flex items-center justify-center bg-black/40" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-10" onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="absolute right-4 top-4 rounded-3xl p-1 bg-gray-200 hover:bg-gray-300">
          <X size={20} className='text-[#001a33]/40 stroke-3'/>
        </button>
        <h2 className="text-xl font-bold">{title}</h2>
        <div className='bg-gray-200 h-px my-3'/>
        <p className="mt-2 text-sm text-black">
          {description}
        </p>
        <div className="mt-6 flex gap-3">
          <button onClick={onClose} className="flex-1 rounded-xl bg-gray-100 py-3 font-medium hover:bg-gray-200">
            {cancelText}
          </button>
          <button onClick={onConfirm} className={`flex-1 rounded-xl py-3 font-medium text-white ${confirmButtonClassName}`}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}