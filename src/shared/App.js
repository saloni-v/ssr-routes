import './App.css';
import * as React from 'react';
import routes from './routes'
import { Route, Routes } from 'react-router-dom'
import NoMatch from './NoMatch'

function App({serverData=null}) {
  return (<>
    <div className="App">
      Hello World! Welcome {serverData} 
    </div>
    <Routes>
          {routes.map((route) => {
            const {
              path,
              component: C
            } = route;

            return (
              <Route
                key={path}
                path={path}
                element={
                  <C
                    data={serverData}
                  />
                }
              />
            )
          })}
          <Route path='*' element={<NoMatch />} />
        </Routes>
</>
  );
}

export default App;
