export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200">
            <div className="flex items-center gap-x-2">
                <span className="bg-indigo-600 rounded-lg p-4"></span>
                <span className="text-slate-900 text-xl font-bold">aplify</span>
            </div>
            <span className="bg-slate-200 rounded-3xl p-5"></span>
        </nav>
    );
}