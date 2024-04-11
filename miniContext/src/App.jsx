import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    // we get access to the context provider by wrapping the components that need the context
    // here we get access of user variable(currently which contains username and password) and setUser function(which is used to set the username and password) globally
    // inside usercontextprovider we have to pass the value which we want to share with the components
    // we can also pass the children to the context provider and it will be rendered inside the context provider

    <UserContextProvider>
      <h1>Context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
