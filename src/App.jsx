import { DefaultTemplate } from "./components/DefaultTemplate";
import { RoutesMain } from "./routes";

function App() {
   return (
      <>
         <DefaultTemplate>
            <RoutesMain />
         </DefaultTemplate>
      </>
   );
}

export default App;
