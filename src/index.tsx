import "bulmaswatch/superhero/bulmaswatch.min.css";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import CodeEditor from "./components/CodeEditor";
import Preview from "./components/Preview";
import bundler from "./bundler";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el!);

const App = () => {
  const [code, setCode] = useState("")
  const [input, setInput] = useState("");

  const onClick = async () => {
    const output = await bundler(input)
    setCode(output);
  };

  return (
    <div>
      <CodeEditor initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <div>
        <button onClick={onClick}>Submit</button>
      </div>
      <Preview code={code}/>
    </div>
  );
};

root.render(<App />);
