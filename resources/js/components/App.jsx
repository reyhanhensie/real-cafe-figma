import React from 'react';

export default function App() {
    return (
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
                <div className="h-12 w-12 bg-blue-500 rounded-full"></div>
            </div>
            <div>
                <h2 className="text-xl font-medium text-black">Tailwind is working!</h2>
                <p className="text-slate-500">If you see styled elements, Tailwind is installed correctly.</p>
            </div>
        </div>
    );
}