import { useState, useEffect } from 'react';
import { Statusbar } from './statusbar'
import { ApplicationCard } from './application_card'
import { ApplicationModal } from './application_modal'
import type { Application } from '../types'

export const ApplicationDashboard = () => {
    const [activeStatus, setActiveStatus] = useState<string>("Alle");
    const [activeSort, setActiveSort] = useState<string>("Datum Neu-Alt");
    const [applications, setApplications] = useState<Application[]>(() => {
        const storedApplications = localStorage.getItem("applications");
        const parsedApplications = storedApplications ? JSON.parse(storedApplications) : [
            {
                id:1,
                company:'Test Unternehmen',
                position:'Fullstack Developer',
                status:'Beworben',
                appliedDate:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
                jobPostingUrl: 'https://google.com'
            }
        ];
        return parsedApplications.map((app: Application) => {
            return {
                ...app,
                appliedDate: new Date(app.appliedDate),
            }
        })
    })

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [activeApplication, setActiveApplication] = useState<Application | null>(null);

    const visibleApplications = applications.filter(
        (app) => activeStatus === "Alle" || app.status === activeStatus
    );

    const deleteApplication = () => {
        if (window.confirm(`Bewerbung bei ${activeApplication?.company} wirklich löschen?`)) {
            setApplications(applications.filter(
                (app) => app.id !== activeApplication?.id
            ))
            setIsModalOpen(false);
            setActiveApplication(null);
        }
    }

    const visivbleSortedApplications = visibleApplications.sort(
        (a, b) => {
            if (activeSort === "Datum Neu-Alt") {
                return b.appliedDate.getTime() - a.appliedDate.getTime();
            }
            else if (activeSort === "Datum Alt-Neu") {
                return a.appliedDate.getTime() - b.appliedDate.getTime();
            }
            else if (activeSort === "Unternehmen A-Z") {
                return a.company.localeCompare(b.company);
            }
            else if (activeSort === "Unternehmen Z-A") {
                return b.company.localeCompare(a.company);
            } else {
                return 0;
            }
        }
    )

    const onSubmit = (newApplication: Omit<Application, "id">) => {
        if (activeApplication != null) {
            setApplications(applications.map(app => app.id == activeApplication.id ? {...app, ...newApplication} : app))
        } else {
            const newApplicationWithId: Application = {
                ...newApplication,
                id: applications.length === 0 
                ? 1 
                : Math.max(...applications.map(a => a.id)) + 1, 
            };
            setApplications([...applications, newApplicationWithId])
        }
        setIsModalOpen(false)
        setActiveApplication(null)
    }

    useEffect(() => {
        localStorage.setItem("applications", JSON.stringify(applications));
    }, [applications])

    return (
        <div className="min-h-dvh bg-slate-50 p-8">
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-slate-900">Meine Bewerbungen</h1>
                    <p className="text-slate-500">{applications.length} Bewerbungen • {applications.filter((app) => app.status === "Interview").length} laufende Interviews</p>
                </div>
                <button className='text-white font-bold bg-indigo-600 py-2 px-4 rounded-xl cursor-pointer' onClick={() => {setIsModalOpen(true); setActiveApplication(null);}} >
                    + Neue Bewerbung
                </button>
            </div>
            <ApplicationModal isModalOpen={isModalOpen} onClose={() => {setIsModalOpen(false); setActiveApplication(null)}} onSubmit={onSubmit} activeApplication={activeApplication} deleteApplication={deleteApplication}
            />
            <Statusbar activeStatus={activeStatus} onStatusChange={setActiveStatus} activeSort={activeSort} onSortChange={setActiveSort}/>
            <div className='grid grid-cols-3  gap-4'>
                {visivbleSortedApplications.map((application) => (
                    <ApplicationCard
                        key={application.id}
                        application={application}
                        onClick={() => {
                            setActiveApplication(application);
                            setIsModalOpen(true);
                        }}
                    />
                ))
                }
            </div>
        </div>
    );
}