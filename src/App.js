import PriceInput from "./components/PriceInput";
import AgeGroupSelect from "./components/AgeGroupSelect";

function addComma(number) {
  // 將數字轉換為千分位格式
  return number.toFixed(4).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

// 測試
const result = addComma(-78559424342348.9527);
console.log(result);

// function getNumberIntervals(intervals) {
//   const result = {
//     overlap: [],
//     notInclude: []
//   };

//   // 產生 0 到 20 的區間陣列
//   const allIntervals = Array.from({ length: 21 }, (_, i) => i);
//   // 遍歷給定區間，標記重疊和未包含的區間
//   for (const interval of intervals) {
//     const [start, end] = interval;
//     const overlap = allIntervals.slice(start, end + 1);
//       console.log(start,end)
//       console.log(overlap);

//     if (overlap.length > 0) {
//       result.overlap.push([start, end]);
//     } else {
//       result.notInclude.push([start, end]);
//     }
//   }

//   return result;
// }

// const inputIntervals = [[6, 11], [5, 8], [17, 20], [7, 7], [14,17]];
// const output = getNumberIntervals(inputIntervals);

// console.log(output);

function App() {
  return (
    <div className="App max-w-lg mx-auto flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold underline mb-10">AsiaYo 前測</h1>
      <PriceInput />
      <AgeGroupSelect />
    </div>
  );
}

export default App;
