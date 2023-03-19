import "./App.css";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "New Jersey", "California", "Texas", "Florida"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;