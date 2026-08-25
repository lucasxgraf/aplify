import { Component } from 'react';


class ApplicationDashboard extends Component {
    state = {  } 
    render() { 
        return (
            <main className="h-dvh bg-slate-50">
                <div className="flex items-end justify-between p-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold text-slate-900">Meine Bewerbungen</h1>
                        <p className="text-slate-500 text">12 Bewerbungen • 3 laufende Interviews</p>
                    </div>
                    <button className='text-white font-bold bg-indigo-600 py-2 px-4 rounded-xl'>
                        + Neue Bewerbung
                    </button>
                </div>
            </main>
        );
    }
}


export default ApplicationDashboard;