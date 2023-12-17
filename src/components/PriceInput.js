import React, { useState } from "react";

const PriceInput = () => {
  const [price, setPrice] = useState("");
  const [error, setError] = useState("不可以為空白");

  // 允許輸入小數點與顯示
  const formatNumber = (value) => {
    const parts = value.split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.length === 1 ? parts[0] : parts.join(".");
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    const cleanedInput = inputText.replace(/[^0-9.]/g, "");
    const formattedInput = formatNumber(cleanedInput);

    if (cleanedInput === "") {
      setError("不可以為空白");
    } else {
      setError("");
    }

    setPrice(formattedInput);
  };

  return (
    <div className="p-4 border border-dashed max-w-fit">
      <div className="text-gray-600 mb-2">入住費用（每人每晚）：</div>
      <div className="flex">
        <label
          htmlFor="input-label"
          className="bg-[#000] w-[50px] leading-[50px] text-center uppercase text-white"
        >
          twd
        </label>
        <input
          id="input-label"
          type="text"
          className={`border ${
            error ? "border-red-500" : "border-gray-300"
          } p-2 text-gray-800`}
          placeholder="請輸入費用"
          value={price}
          onChange={handleInputChange}
        />
      </div>
      {error && (
        <div className="text-red-500 text-sm mt-2 p-2 bg-red-100">{error}</div>
      )}
      <div className="text-right text-xs mt-2">輸入0表示免費</div>
    </div>
  );
};

export default PriceInput;
