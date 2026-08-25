import { useState } from 'react';

type StatusBadgeProps = {
  label: string;
  active: boolean;
  onClick: () => void;
};

function StatusBadge({ label, active, onClick }: StatusBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "text-white bg-indigo-600 px-4 py-1 rounded-3xl cursor-pointer"
          : "text-slate-900 px-4 py-1 border border-slate-200 rounded-3xl cursor-pointer"
      }
    >
      {label}
    </button>
  );
}

export function FilterBar() {
  const [activeStatus, setActiveStatus] = useState("Alle");
  const statuses = ["Alle", "Beworben", "Interview", "Angebot", "Abgelehnt", "Zurückgezogen"];

  return (
    <div className="flex gap-2">
      {statuses.map((status) => (
        <StatusBadge
          key={status}
          label={status}
          active={status === activeStatus}
          onClick={() => setActiveStatus(status)}
        />
      ))}
    </div>
  );
}

export default StatusBadge;
