export default function SuccessAlert({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children && (
        <div
          className="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-800 dark:bg-gray-800 dark:text-green-400"
          role="alert"
        >
          <span className="font-medium">Hurray! </span>
          {children}
        </div>
      )}
    </>
  );
}
