export default function Alert({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="mb-4 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-700 dark:text-red-400"
      role="alert"
    >
      <span className="font-medium">Oops!</span>
      {children}
    </div>
  );
}
