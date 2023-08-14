import { FormProvider } from "./context/form-context";
import Layout from "./components/layout";
/**
 * App component is the starting point of our app 
 * it's contains the layout of the app and the ContextApi provider for the form
 * @returns 
 * 
 */
function App() {
  return (
    <div className="flex h-screen flex-col">
      <FormProvider>
        <Layout />
      </FormProvider>
    </div>
  );
}

export default App;
