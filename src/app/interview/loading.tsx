export default function Loading() {
  return (
    <div className="flex h-screen flex-col place-items-center justify-center gap-8 text-center">
      <span className="loading loading-spinner loading-xl bg-primary-100" />
      <p className='text-2xl'>면접을 준비하고 있어요! 잠시만 기다려주세요 :)</p>
    </div>
  );
}
