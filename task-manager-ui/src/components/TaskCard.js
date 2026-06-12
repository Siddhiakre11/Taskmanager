function TaskCard({ task, onDelete }) {
  return (
    <div
      className="
      bg-white
      rounded-xl
      p-5
      shadow-md
      hover:shadow-xl
      transition-all
      "
    >
      <h3 className="text-lg font-semibold">
        {task.title}
      </h3>

      <p className="text-gray-500 mt-2">
        {task.description}
      </p>

      <div className="mt-3 text-sm">
        📅 Due: {task.deadline}
      </div>

      <div className="mt-2">
        Priority: {task.priority}
      </div>

      <div className="mt-2">
        Status: {task.status}
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="
        mt-4
        bg-red-500
        hover:bg-red-600
        text-white
        px-4
        py-2
        rounded-lg
        "
      >
        Delete
      </button>
    </div>
  );
}

export default TaskCard;