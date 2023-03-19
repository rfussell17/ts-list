import "./App.css";
import Alert from "./components/Alert";
import Button from "./components/Button";
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
      <br></br>
      <Alert>
        Hello{" "}
        <span>
          <strong>World</strong>
        </span>
      </Alert>
      <Button color="danger">Primary</Button>
    </div>
  );
}

export default App;
