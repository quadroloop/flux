import React from 'react'
import Table from './components/Table'
import Tabs from './components/Tabs'
import TraceChart from './components/TraceChart';
import InfoCard from './components/InfoCard';

const App = () => {
  return (
    <div className="App">
      <div className="top-half">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8">
            <TraceChart />
          </div>
          <div className="col-md-3">
            <InfoCard />
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center pt-3" id="info-segment">
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