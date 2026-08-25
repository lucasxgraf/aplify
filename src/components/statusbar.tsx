import { Component } from 'react';
import { FilterBar } from './status_badge'


class Statusbar extends Component {
    state = {  }
    render() {
        return (
            <div className="my-10 px-6 w-full h-16 bg-white rounded-xl border border-slate-200 flex items-center justify-between">
                <div className="flex gap-4 items-center ">
                    <span className="text-slate-500">STATUS</span>
                    <FilterBar />
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-slate-500">Sortieren</span>
                    <button className="text-slate-900 px-4 py-1 border border-slate-200 rounded-xl cursor-pointer"> Datum - neuste zuerst ⏷</button>
                </div>
            </div>
        );
    }
}


export default Statusbar;
