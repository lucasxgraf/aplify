import { Component } from 'react';
import Statusbar from './statusbar'


class ApplicationDashboard extends Component {
    state = {  } 
    render() { 
        return (
            <div className="min-h-dvh bg-slate-50">
                <div className="p-8">
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
                </div>
            </div>
        );
    }
}


export default ApplicationDashboard;