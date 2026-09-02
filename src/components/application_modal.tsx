import { useState, useEffect } from 'react'
import type { ModalProps, Application, Status } from '../types'

export const ApplicationModal = ({ isModalOpen, onClose, onSubmit, activeApplication, deleteApplication }: ModalProps) => {
    const [formData, setFormData] = useState<Omit<Application, "id">>({
        company:"",
        position:"",
        status:"Beworben",
        appliedDate: new Date(),
        jobPostingUrl:"",
        notes:""
    })
    const statuses: Status[] = ["Beworben", "Interview", "Angebot", "Abgelehnt", "Zurückgezogen"];

    useEffect(() => {
        if (activeApplication) {
            setFormData({...activeApplication});
        } else {
            setFormData({
                company: "",
                position: "",
                status: "Beworben",
                appliedDate: new Date(),
                jobPostingUrl: "",
                notes: ""
            });
        }
    }, [activeApplication])

  return (
    <div>
      {isModalOpen &&
        <div className="flex items-center justify-center fixed top-0 left-0 w-full h-full z-50 bg-slate-900/45">
            <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-[620px] max-h-[90vh] overflow-y-auto">
                <div className="flex items-start justify-between gap-4 px-7 pt-6 pb-[18px] border-b border-slate-200 dark:border-slate-700">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-slate-900 dark:text-slate-100 text-lg font-semibold">{activeApplication ? "Bewerbung bearbeiten" : "Neue Bewerbung"}</h1>
                        <span className="text-slate-500 dark:text-slate-400 text-sm">Pflichtfelder sind mit * markiert.</span>
                    </div>
                    <button
                        onClick={() => onClose()}
                        className="w-8 h-8 flex items-center justify-center border border-slate-200 dark:border-slate-600 rounded-lg text-slate-500 dark:text-slate-300 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700"
                    > ✕
                    </button>
                </div>

                <form className="flex flex-col" onSubmit={(e) => {e.preventDefault(); onSubmit(formData)}}>
                    <div className="flex flex-col gap-6 px-7 py-6">
                        <div className="flex flex-col gap-3">
                            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-semibold uppercase tracking-wider">Position</span>
                            <div className="grid grid-cols-2 gap-3.5">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">Firmenname *</label>
                                    <input
                                        type="text"
                                        className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
                                        value={formData.company}
                                        onChange={(e) => {
                                            setFormData({...formData, company: e.target.value});
                                        }}
                                    />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">Position / Jobtitel *</label>
                                    <input
                                        type="text"
                                        className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
                                        value={formData.position}
                                        onChange={(e) => {
                                            setFormData({...formData, position: e.target.value});
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-semibold uppercase tracking-wider">Status &amp; Datum</span>
                            <div className="flex border border-slate-300 dark:border-slate-600 rounded-lg overflow-hidden">
                                {statuses.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => setFormData({ ...formData, status: option })}
                                        className={
                                        formData.status === option
                                            ? "flex-1 text-center py-2 px-1.5 text-sm font-medium bg-indigo-600 text-white cursor-pointer"
                                            : "flex-1 text-center py-2 px-1.5 text-sm font-medium text-slate-600 dark:text-slate-300 border-l border-slate-200 dark:border-slate-600 cursor-pointer"
                                        }
                                    >
                                        {option}
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-1.5 max-w-[240px]">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">Datum der Bewerbung *</label>
                                <input
                                    type="date"
                                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100 cursor-pointer"
                                    value={formData.appliedDate.toISOString().split('T')[0]}
                                    onChange={(e) => {
                                        setFormData({...formData, appliedDate: new Date(e.target.value)});
                                    }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <span className="text-slate-400 dark:text-slate-500 text-[11px] font-semibold uppercase tracking-wider">Optional</span>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">Link zur Stellenanzeige</label>
                                <input
                                    type="url"
                                    placeholder="https://..."
                                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100"
                                    value={formData.jobPostingUrl}
                                    onChange={(e) => {
                                        setFormData({...formData, jobPostingUrl: e.target.value});
                                    }}
                                />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-slate-700 dark:text-slate-300 text-sm font-medium">Notizen</label>
                                <textarea
                                    rows={3}
                                    className="bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-600 rounded-lg px-3 py-2 text-slate-900 dark:text-slate-100 resize-none min-h-[76px]"
                                    value={formData.notes}
                                    onChange={(e) => {
                                        setFormData({...formData, notes: e.target.value});
                                    }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-end gap-2.5 px-7 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 rounded-b-2xl">
                        {activeApplication &&
                        <button
                            type="button"
                            onClick={() => deleteApplication(activeApplication.id)}
                            className="mr-auto text-rose-500 dark:text-rose-300 bg-rose-50 dark:bg-rose-950 px-4 py-2 rounded-lg border border-rose-100 dark:border-rose-900 cursor-pointer hover:bg-rose-100 dark:hover:bg-rose-900"
                        >
                            Löschen
                        </button>
                        }
                        <div className="flex gap-2.5">
                            <button
                                type="button"
                                onClick={() => onClose()}
                                className="text-slate-700 dark:text-slate-300 px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-600 cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800"
                            >
                                Abbrechen
                            </button>
                            <button
                                type="submit"
                                className="text-white font-semibold bg-indigo-600 px-4 py-2 rounded-lg cursor-pointer hover:bg-indigo-700"
                            >
                                Speichern
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
      }
    </div>
  );
}
