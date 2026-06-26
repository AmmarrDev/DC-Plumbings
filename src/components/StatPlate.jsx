export default function StatPlate({ value, label }) {
  return (
    <div className="border-l-2 border-brand-blue pl-4">
      <div className="font-mono text-2xl font-semibold text-navy-900 sm:text-3xl">
        {value}
      </div>
      <div className="mt-1 text-sm text-steel-600">{label}</div>
    </div>
  );
}
