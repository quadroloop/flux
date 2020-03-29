import React from 'react'

const TraceChart = () => {
  return (
    <div className="trace-chart">
      <div id="container">
        <canvas id="canvas"></canvas>
      </div>
      <button id="randomizeData">Randomize Data</button>
      <button id="addDataset">Add Dataset</button>
      <button id="removeDataset">Remove Dataset</button>
      <button id="addData">Add Data</button>
      <button id="removeData">Remove Data</button>
    </div>
  )
}

export default TraceChart;