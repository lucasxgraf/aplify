import { FilterBar } from './status_badge'
import type { StatusbarProps } from '../types';

export const Statusbar = ({activeStatus, onStatusChange, activeSort, onSortChange}: StatusbarProps) => {
    return (
        <div className="my-10 px-6 w-full h-16 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex items-center justify-between">
            <div className="flex gap-4 items-center ">
                <span className="text-slate-500 dark:text-slate-400">STATUS</span>
                <FilterBar activeStatus={activeStatus} onStatusChange={onStatusChange} />
            </div>
            <div className="flex items-center gap-4">
                <span className="text-slate-500 dark:text-slate-400">Sortieren</span>
                <select onChange={(e) => onSortChange(e.target.value)} value={activeSort} className="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 text-center py-1 border border-slate-200 dark:border-slate-600 rounded-xl cursor-pointer">
                    <option>Datum Neu-Alt</option>
                    <option>Datum Alt-Neu</option>
                    <option>Unternehmen A-Z</option>
                    <option>Unternehmen Z-A</option>
                </select>
            </div>
        </div>
    );
}
