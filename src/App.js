import './App.css';
import CaseCocher from './components/CaseCocher.js';
function App() {
  const date=  new Date();
  const hours= date.getHours();
 let msg;  
  const h1Style={
    fontSize:100
  }
  if (hours < 12){
    msg="bonjour"
    h1Style.color="#04567F"
  }
  else if (hours <18) {
     msg="bon apres-midi"
     h1Style.color="#0914A3"
  }
  else{
   msg="bonne nuit"
   h1Style.color="#D940000"
  }
  return (
    <div>
     <h1 style={h1Style}>{msg}</h1>
     <div className="css-liste">
          <CaseCocher/>
          <CaseCocher/>
          <CaseCocher/>
          <CaseCocher/>
     </div>
    </div>
  );
}
export default App;
