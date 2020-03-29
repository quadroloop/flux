import React from 'react'
import Table from './components/Table'
import Tabs from './components/Tabs'
import TraceChart from './components/TraceChart';

const App = () => {
  return (
    <div className="App">
      <div className="top-half">
        <div className="row">
          <div className="col-md-8">
            <TraceChart />
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-8 p-3">
          <Table />
        </div>
        <div className="col-md-3">
          <Tabs />
        </div>
      </div>
    </div>
  )
}

export default App;