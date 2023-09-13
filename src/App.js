import{ useState } from 'react';
import './App.css';

function App() {
let [paino, setPaino] = useState(0)
let [annokset, setAnn] = useState(0)
let [sukupuoli,setSukupuoli] = useState ('');
let [aika, setAik] = useState(0);
let [tulos, setTulos] = useState (0);
 
const numbers = new Array(100).fill(null).map((_,i) => i+1)

function Laskepromillet(e) {
  e.preventDefault()
 const litroja = annokset * 0.33;
 let grammoja = litroja * 8 * 4.5;
 const palaminen = paino / 10;
 let grammojaa = grammoja - (palaminen * aika);

let tulos2;

if (sukupuoli ==='Mies'){
  tulos2 = grammojaa / (paino * 0.7);
}
else if (sukupuoli === 'Nainen'){
  tulos2 = grammojaa / (paino * 0.6);
}
else if (sukupuoli === 'Trans'){
  tulos2 = grammojaa / (paino * 0.4);
}
else {
  tulos2 = grammojaa / (paino * 9.8);
}

 setTulos(tulos2);

}

  return (
    <div id="containter">
      <form onSubmit={Laskepromillet}>
        <div>
        <label>Paino</label>
        <input type="number" value={paino} onChange={e => setPaino(e.target.value)}/>
        </div>
        <div>
          <label>Annokset</label>
          <select value={annokset} onChange={(e) => setAnn(e.target.value)}>
            {
              numbers.map(TENTTUPULLO => {
             return <option value={TENTTUPULLO}>{TENTTUPULLO} </option>
            })
          }
          </select>
        </div>
        <div>
          <label>Aika</label>
          <select value={aika} onChange={(e) => setAik(e.target.value)}>
            {
              numbers.map(TENTTUPULLO => {
             return <option value={TENTTUPULLO}>{TENTTUPULLO} </option>
            })
          }
          </select>
        </div>
        <div>
        <label>
          Sukupuoli
        </label>
        <input type="radio" name="sukupuoli" value="Mies" checked={sukupuoli === 'Mies'} onChange={() => setSukupuoli('Mies')} /><label>Mies</label>
        <input type="radio" name="sukupuoli" value="Nainen" checked={sukupuoli === 'Nainen'} onChange={() => setSukupuoli('Nainen')} /><label>Nainen</label>
        <input type="radio" name="sukupuoli" value="Trans" checked={sukupuoli === 'Trans'} onChange={() => setSukupuoli('Trans')} /><label>Trans</label>
        <input type="radio" name="sukupuoli" value="Unisex" checked={sukupuoli === 'Unisex'} onChange={() => setSukupuoli('Unisex')} /><label>unisex</label>
        </div>
          <div>
            <output>Olet {tulos.toFixed(2)} promillen seipäässä</output>
          </div>
        <button>Laskepromillet</button>
      </form>
    </div>
  );
}

export default App;

