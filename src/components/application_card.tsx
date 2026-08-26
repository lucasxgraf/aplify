import type { Application } from "../types";

export const ApplicationCard = ({ application }: { application: Application }) => {
    return (
        <div className="bg-white rounded-xl border border-slate-200 p-6 min-h-28">
            <div className="flex flex-row justify-between border-b border-slate-200">
                <div className="flex flex-col mb-4">
                    <span className="text-xl font-bold text-slate-900">{application.company}</span>
                    <span className="text-slate-500">{application.position}</span>
                </div>
                <span className="bg-blue-100 text-blue-700 py-1 px-3 rounded-3xl h-8 text-center">{application.status}</span>
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