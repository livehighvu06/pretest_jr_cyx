import PriceInput from "./components/PriceInput";
import AgeGroupSelect from "./components/AgeGroupSelect";

function addComma(number) {
  // 將數字轉換為千分位格式
  return number.toFixed(4).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
}

// 測試
const result = addComma(-78559424342348.9527);
console.log(result);

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <PriceInput />
      <AgeGroupSelect />
    </div>
  );
}

export default App;
