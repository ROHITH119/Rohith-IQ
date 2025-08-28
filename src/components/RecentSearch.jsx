import React from "react";

const RecentSearch = (props) => {
  const { recentHistory, setRecentHistory, setSelectedHistory } = props;

  const clearHistory = () => {
    localStorage.clear();
    setRecentHistory([]);
  };
  return (
    <>
      <div className="dark:bg-zinc-800 bg-red-100 text-center col-span-1 pt-3 h-full">
        <h1 className="text-xl dark:text-white text-zinc-700 flex justify-center">
          <span> Recent Search </span>
          <button
            onClick={clearHistory}
            className="flex items-end cursor-pointer dark:bg-zinc-700 rounded-full  "
          >
            <svg
              className="mb-0.5 dark:text-white text-zinc-700 "
              xmlns="http://www.w3.org/2000/svg"
              height="20px"
              viewBox="0 -960 960 960"
              width="20px"
              fill="currentColor"
            >
              <path d="M312-144q-29.7 0-50.85-21.15Q240-186.3 240-216v-480h-48v-72h192v-48h192v48h192v72h-48v479.57Q720-186 698.85-165T648-144H312Zm336-552H312v480h336v-480ZM384-288h72v-336h-72v336Zm120 0h72v-336h-72v336ZM312-696v480-480Z" />
            </svg>
          </button>
        </h1>
        <ul className="text-left overflow-auto px-5 mt-1">
          {recentHistory &&
            recentHistory.map((item, index) => {
              return (
                <li
                  className="px-5 my-1 text-lg font-medium pl-5 truncate dark:text-zinc-400 cursor-pointer hover:bg-zinc-700 hover:text-zinc-200"
                  onClick={() => setSelectedHistory(item)}
                  key={index}
                >
                  {item}
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default RecentSearch;
