export default function Loading() {
  return (
    <div className="flex h-screen flex-col place-items-center justify-center gap-8 text-center">
      <span className="loading loading-spinner loading-xl bg-primary-100" />
      <p className="text-2xl">
        AI 응답을 기다리고 있어요. 조금만 기다려주세요!
      </p>
    </div>
  );
}
