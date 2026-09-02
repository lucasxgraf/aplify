import type { StatusBadgeProps, FilterBarProps } from "../types";

const statuses = [
  "Alle",
  "Beworben",
  "Interview",
  "Angebot",
  "Abgelehnt",
  "Zurückgezogen"
];

export const StatusBadge = ({ label, active, onClick }: StatusBadgeProps) => {
  return (
    <button
      onClick={onClick}
      className={
        active
          ? "text-white bg-indigo-600 px-4 py-1 rounded-3xl cursor-pointer"
          : "text-slate-900 dark:text-slate-100 px-4 py-1 border border-slate-200 dark:border-slate-600 rounded-3xl cursor-pointer"
      }
    >
      {label}
    </button>
  );
}

export const FilterBar = ({ activeStatus, onStatusChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {statuses.map((status) => (
        <StatusBadge
          key={status}
          label={status}
          active={status === activeStatus}
          onClick={() => onStatusChange(status)}
        />
      ))}
    </div>
  );
}
