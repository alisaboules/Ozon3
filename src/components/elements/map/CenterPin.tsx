export function CenterPin() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-full">
      <div className="flex flex-col items-center">
        <div className="h-5 w-5 rounded-full border-4 border-white bg-blue-600 shadow-lg" />

        <div className="-mt-1 h-6 w-0.5 bg-blue-600" />
      </div>
    </div>
  );
}