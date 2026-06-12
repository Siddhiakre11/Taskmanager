import { Home, CheckSquare, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-slate-950 text-white min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-10">
        TaskFlow
      </h1>

      <div className="space-y-4">
        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <Home size={20} />
          Dashboard
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <CheckSquare size={20} />
          Tasks
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-cyan-400">
          <Settings size={20} />
          Settings
        </div>
      </div>
    </div>
  );
}