import Card from "./components/Card";
import "./App.css";

function App() {
  let myObj = {
    username: "tanishi",
    age: 19,
  };
  let newArr = [1, 2, 3];

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl mb-4">
        Tailwind test
      </h1>
      <Card username="tan" btnText="Click me" />
      <Card username="jan" btnText="See more" />
      <Card />
    </>
  );
}

export default App;
