import { Statusbar } from './statusbar'
import { ApplicationCard } from './application_card'
import type { Application } from '../types'

const applications: Application[] = [
    {
        id:1,
        company:'Google',
        position:'Fullstack Developer',
        status:'Abgelehnt',
        appliedDate:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        jobPostingUrl: 'https://google.com'
    },
    {
        id:2,
        company:'Facebook',
        position:'Software Engineer',
        status:'Interview',
        appliedDate:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        jobPostingUrl: 'https://facebook.com'
    },
    {
        id:3,
        company:'Facebook',
        position:'Software Engineer',
        status:'Interview',
        appliedDate:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        jobPostingUrl: 'https://facebook.com'
    },
    {
        id:4,
        company:'Facebook',
        position:'AI Software Engineer',
        status:'Zurückgezogen',
        appliedDate:new Date(Date.now() - 1000 * 60 * 60 * 24 * 3),
        jobPostingUrl: 'https://facebook.com'
    },
]

export const ApplicationDashboard = () => {
    return (
        <div className="min-h-dvh bg-slate-50 p-8">
            <div className="flex items-end justify-between">
                <div className="flex flex-col gap-2">
                    <h1 className="text-4xl font-bold text-slate-900">Meine Bewerbungen</h1>
                    <p className="text-slate-500">12 Bewerbungen • 3 laufende Interviews</p>
                </div>
                <button className='text-white font-bold bg-indigo-600 py-2 px-4 rounded-xl cursor-pointer'>
                    + Neue Bewerbung
                </button>
            </div>
            <Statusbar />
            <div className='grid grid-cols-3  gap-4'>
                {
                    applications.map((application) => (
                        <ApplicationCard 
                            key={application.id}
                            application={application}
                        />
                    ))
                }
            </div>
        </div>
    );
}