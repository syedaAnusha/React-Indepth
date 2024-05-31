import { Fragment } from "react";
function App() {
  const DATA = [
    { product: "Cupboard", quantity: 11 },
    { product: "Chair", quantity: 4 },
    { product: "Sofa", quantity: 10 },
    { product: "Blanket", quantity: 2 },
    { product: "Spray", quantity: 5 },
    { product: "Iron Stand", quantity: 7 },
    { product: "Stool", quantity: 8 },
    { product: "Cupboard", quantity: 11 },
  ];

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   setData(DATA);
  // }, []);

  return (
    <Fragment>
      <div>
        <ul>
          {DATA.map((item, index) => (
            <li key={index}>{item.product}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

//* Calling a function!
console.log(App());

//* Calling a component!
// console.log(<App />);

export default App;
