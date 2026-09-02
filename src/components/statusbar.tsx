import { FilterBar } from './status_badge'
import type { StatusbarProps } from '../types';

export const Statusbar = ({activeStatus, onStatusChange, activeSort, onSortChange}: StatusbarProps) => {
    return (
        <div className="my-6 sm:my-10 px-4 sm:px-6 py-4 w-full bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row gap-4 sm:gap-8">
            <div className="flex flex-col gap-2 flex-1 min-w-0">
                <span className="text-slate-500 dark:text-slate-400 shrink-0 uppercase">Status</span>
                <FilterBar activeStatus={activeStatus} onStatusChange={onStatusChange} />
            </div>
            <div className="flex flex-col gap-2">
                <span className="text-slate-500 dark:text-slate-400 shrink-0 uppercase">Sortieren</span>
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
