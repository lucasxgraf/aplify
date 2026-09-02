import type { Application, Status } from "../types";

const statusColors: Record<Status, string> = {
  Beworben: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  Interview: "bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300",
  Angebot: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300",
  Abgelehnt: "bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-300",
  Zurückgezogen: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
};

export const ApplicationCard = ({ application, onClick }: { application: Application, onClick: () => void }) => {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6 min-h-28 cursor-pointer" onClick={onClick}>
            <div className="flex flex-row justify-between border-b border-slate-200 dark:border-slate-700">
                <div className="flex flex-col mb-4">
                    <span className="text-xl font-bold text-slate-900 dark:text-slate-100">{application.company}</span>
                    <span className="text-slate-500 dark:text-slate-400">{application.position}</span>
                </div>
                <span className={`${statusColors[application.status]} py-1 px-3 rounded-3xl h-8 text-center`}>{application.status}</span>
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
                <span className="text-slate-900 dark:text-slate-100">{application.appliedDate.toLocaleDateString()}</span>
                {application.jobPostingUrl ? (
                    <a href={application.jobPostingUrl} target="_blank" rel='noopener noreferrer'>
                        <span className="text-blue-700 dark:text-blue-400 cursor-pointer">Stellenanzeige ↗</span>
                    </a>
                ) : (
                    application.notes ? <span className="text-slate-500 dark:text-slate-400">Notiz vorhanden</span> : null
                )}
            </div>
        </div>
    );
}
