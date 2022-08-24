import './App.css';

export const tenHighestPopulation = [
  { country: 'World', population: 7693165599 },
  { country: 'China', population: 1377422166 },
  { country: 'India', population: 1295210000 },
  { country: 'United States of America', population: 323947000 },
  { country: 'Indonesia', population: 258705000 },
  { country: 'Brazil', population: 206135893 },
  { country: 'Pakistan', population: 194125062 },
  { country: 'Nigeria', population: 186988000 },
  { country: 'Bangladesh', population: 161006790 },
  { country: 'Russian Federation', population: 146599183 },
  { country: 'Japan', population: 126960000 },
]

function App() {
  
  return (
    <div className="text-center font-bold">
      <h1 className="">30 Days Of React</h1>
      <h3 className="">Hexadecimal Colours</h3>
      <div className="">
        {
          tenHighestPopulation.map(( {country, population} ) => {
            let width = (population / tenHighestPopulation[0].population) * 700
            return(
            <div className="flex m-1">
              <h1 className="inline float-left w-52">{country}</h1>
              <div style={{color: "red", width:`${width}px`, backgroundColor:'red'}} /* className={`inline-block h-10 bg-yellow-400 w-${width}`}*/></div>
              <h1 className="inline float-right">{population}</h1>
            </div>
            )})
        }
      </div>
    </div>
  );
}

export default App;
