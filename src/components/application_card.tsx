import type { Application, Status } from "../types";

const statusColors: Record<Status, string> = {
  Beworben: "bg-blue-100 text-blue-700",
  Interview: "bg-amber-100 text-amber-700",
  Angebot: "bg-emerald-100 text-emerald-700",
  Abgelehnt: "bg-rose-100 text-rose-700",
  Zurückgezogen: "bg-slate-100 text-slate-600",
};

export const ApplicationCard = ({ application }: { application: Application }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 min-h-28">
            <div className="flex flex-row justify-between border-b border-slate-200">
                <div className="flex flex-col mb-4">
                    <span className="text-xl font-bold text-slate-900">{application.company}</span>
                    <span className="text-slate-500">{application.position}</span>
                </div>
                <span className={`${statusColors[application.status]} py-1 px-3 rounded-3xl h-8 text-center`}>{application.status}</span>
            </div>
            <div className="flex flex-row justify-between items-center mt-4">
                <span className="text-slate-900">{application.appliedDate.toLocaleDateString()}</span>
                {application.jobPostingUrl ? (
                    <a href={application.jobPostingUrl} target="_blank" rel='noopener noreferrer'>
                        <span className="text-blue-700 cursor-pointer">Stellenanzeige ↗</span>
                    </a>
                ) : (
                    application.notes ? <span className="text-slate-500">Notiz vorhanden</span> : null
                )}
            </div>
        </div>
    );
}