import React, { useState } from "react";

const AgeGroupSelect = () => {
  const [startAge, setStartAge] = useState(0);
  const [endAge, setEndAge] = useState(20);
  const [error, setError] = useState(false);

  const handleStartAgeChange = (e) => {
    const newStartAge = parseInt(e.target.value, 10);
    setStartAge(newStartAge);
    setError(newStartAge === endAge);
  };

  const handleEndAgeChange = (e) => {
    const newEndAge = parseInt(e.target.value, 10);
    setEndAge(newEndAge);
    setError(startAge === newEndAge);
  };

  return (
    <div className="p-4 border border-dashed w-[300px] mb-4">
      <p className="text-gray-600 mb-2">年齡</p>
      <div className="flex">
        <select
          id="startAge"
          className="appearance-none w-20 p-2 border rounded-r-none rounded-l-xl flex-1 cursor-pointer"
          value={startAge}
          onChange={handleStartAgeChange}
        >
          {Array.from({ length: 21 }, (_, i) => i).map((age) => (
            <option key={age} value={age} disabled={age > endAge}>
              {age}
            </option>
          ))}
        </select>
        <div className="px-4 bg-slate-300 flex items-center">~</div>
        <select
          id="endAge"
          className="appearance-none w-20 p-2 border rounded-l-none rounded-r-xl flex-1 cursor-pointer"
          value={endAge}
          onChange={handleEndAgeChange}
        >
          {Array.from({ length: 21 }, (_, i) => i).map((age) => (
            <option key={age} value={age} disabled={age < startAge}>
              {age}
            </option>
          ))}
        </select>
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2 p-2 bg-red-100">
          年齡區間不可重疊
        </div>
      )}
    </div>
  );
};

export default AgeGroupSelect;
