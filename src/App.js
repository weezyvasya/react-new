import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import TabSection from "./components/TabSection/TabSection";
import ListUsers from "./components/ListUsers/ListUsers";
import Form from "./components/Form/Form";
import Quize from "./components/Quize/Quize";
import { users } from "./constants/data";


function App() {
  return (
    <div className="App">
      <Header/>
      <Main />
      <TabSection />
      <ListUsers data={users} />
      <Form />
      <Quize />
    </div>
  );
}

export default App;
