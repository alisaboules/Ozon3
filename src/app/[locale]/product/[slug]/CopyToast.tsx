import Cross from '@/assets/cross.svg';
import CheckMark from '@/assets/check_mark.svg';

interface Props {
  show: boolean;
  text: string;
  onClose: () => void;
}

export function CopyToast({ show, text, onClose }: Props) {
  return (
    <div
        className={`
          fixed bottom-6 right-6 w-auto 
          rounded-xl bg-black text-white shadow-lg
          transition-all duration-300 flex gap-3 z-'9999' items-center 
          ${show ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-4'}
        `}>
        <div className="flex items-center gap-2 m-3 p-1 mr-10">
          <CheckMark className="h-6 w-6 text-green-500" />
          <span className="text-sm">{text}</span>
        </div>

        <button
          onClick={onClose}
          className="absolute top-0.5 right-0.5 rounded-md p-1 text-white/70 hover:bg-white/10 hover:text-white"
          aria-label="Закрыть">
          <Cross className="h-4 w-4" />
        </button>
      </div>
  );
}