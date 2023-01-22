import Header from "./components/Header";
import Main from "./components/Main";
import "./App.css";

export const App = () => {

  const [menuIsVisible, setMenuIsVisible] = useState(true);

  return (
    <>
      <MenuMobile 
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header />
      <Main />
    </>  
  );
}