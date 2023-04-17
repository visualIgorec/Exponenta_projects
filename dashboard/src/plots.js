//------------INPUT DATA------------

// input data for bar 1
function getDataBar_1() {
  const y1 = 35;
  const y2 = 20;
  const y3 = 13;
  return [
    String(y1.toFixed(1)) + "%",
    String(y2.toFixed(1)) + "%",
    String(y3.toFixed(1)) + "%",
  ];
}

// input data for bar 2
function getDataBar_2() {
  const u1 = 10;
  const u2 = 22;
  return [String(u1.toFixed(1)) + "%", String(u2.toFixed(1)) + "%"];
}

// uodate step, ms
DELAY = 2000;
// pie plot 1
let VALUE_PIE_PLOT_11 = 80;
let VALUE_PIE_PLOT_12 = 20;
50, 10, 40;
// pie plot 2
let VALUE_PIE_PLOT_21 = 50;
let VALUE_PIE_PLOT_22 = 10;
let VALUE_PIE_PLOT_23 = 40;
// pie plot 3
let VALUE_PIE_PLOT_31 = 36;
let VALUE_PIE_PLOT_32 = 64;
// engineFirstPiepPlot1
let ENGINE_FIRST_PLOT_11 = 80;
let ENGINE_FIRST_PLOT_12 = 20;
//------------END INPUT DATA------------

// plots
function pie_plot_1() {
  const data = [
    {
      values: [VALUE_PIE_PLOT_11, VALUE_PIE_PLOT_12],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
      hoverinfo: "none",
      marker: {
        colors: ["rgb(0, 128, 0)", "rgb(255, 255, 0)"],
      },
    },
  ];

  const layout = {
    height: 130,
    width: 130,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: false,
  };

  Plotly.newPlot("pie_1", data, layout);
}

function pie_plot_2() {
  const data = [
    {
      values: [VALUE_PIE_PLOT_21, VALUE_PIE_PLOT_22, VALUE_PIE_PLOT_23],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
      hoverinfo: "none",
      marker: {
        colors: ["rgb(255, 255, 0)", "rgb(255, 165, 0)", "rgb(0, 128, 0)"],
      },
    },
  ];

  const layout = {
    height: 130,
    width: 130,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: false,
  };

  Plotly.newPlot("pie_2", data, layout);
}

function pie_plot_3() {
  const data = [
    {
      values: [36, 64],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
      hoverinfo: "none",
      marker: {
        colors: ["rgb(255, 165, 0)", "rgb(255, 255, 0)"],
      },
    },
  ];

  const layout = {
    height: 130,
    width: 130,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: false,
  };

  Plotly.newPlot("pie_3", data, layout);
}

function pie_plot_4() {
  const data = [
    {
      values: [VALUE_PIE_PLOT_31, VALUE_PIE_PLOT_32],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
      hoverinfo: "none",
      marker: {
        colors: ["rgb(255, 165, 0)", "rgb(0, 128, 0)"],
      },
    },
  ];

  const layout = {
    height: 130,
    width: 130,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    showlegend: false,
  };

  Plotly.newPlot("pie_4", data, layout);
}

//bar
function pie_bar_1() {
  const xValue = ["ДВ 1", "ДВ 2", "ДВ 3"];

  const yValue = getDataBar_1();

  const trace1 = {
    x: xValue,
    y: yValue,
    type: "bar",
    text: yValue.map(String),
    textposition: "auto",
    hoverinfo: "none",
    marker: {
      color: "rgb(0, 128, 0)",
      opacity: 0.6,
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };

  const data = [trace1];

  const layout = {
    barmode: "stack",
    height: 130,
    width: 140,
    margin: { t: 0, b: 20, l: 0, r: 30 },
  };

  Plotly.newPlot("bar_1", data, layout);
}

function pie_bar_2() {
  const xValue = ["ДВ 2", "ДВ 3"];

  const yValue = getDataBar_2();

  const trace1 = {
    x: xValue,
    y: yValue,
    type: "bar",
    text: yValue.map(String),
    textposition: "auto",
    hoverinfo: "none",
    marker: {
      color: "rgb(255, 165, 0)",
      opacity: 0.6,
      line: {
        color: "rgb(8,48,107)",
        width: 1.5,
      },
    },
  };

  const data = [trace1];

  const layout = {
    barmode: "stack",
    height: 130,
    width: 120,
    margin: { t: 0, b: 20, l: 0, r: 0 },
  };

  Plotly.newPlot("bar_2", data, layout);
}

// ------ сигналы мониторинга и спектрограммы -------- //
// graph vibro
let cnt = 0;
let y_seq_0 = [];
let y_seq_1 = [];
let y_seq_2 = [];
function lineVibro() {
  y_seq_0.push(Math.random());
  let trace1 = {
    y: y_seq_0,
    type: "scatter",
  };
  y_seq_1.push(Math.random());
  let trace2 = {
    y: y_seq_1,
    type: "scatter",
  };
  y_seq_2.push(Math.random());
  let trace3 = {
    y: y_seq_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("vibro", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt += 1;
  if (cnt > 5) {
    Plotly.relayout("vibro", {
      xaxis: {
        range: [cnt - 5, cnt],
      },
    });
  }
}

// graph vibro frequency
let y_seq_frequency_0 = [];
let y_seq_frequency_1 = [];
let y_seq_frequency_2 = [];
let cnt_0 = 0;
function lineVibroFreq() {
  y_seq_frequency_0.push(Math.random());
  let trace1 = {
    y: y_seq_frequency_0,
    type: "scatter",
  };
  y_seq_frequency_1.push(Math.random());
  let trace2 = {
    y: y_seq_frequency_1,
    type: "scatter",
  };
  y_seq_frequency_2.push(Math.random());
  let trace3 = {
    y: y_seq_frequency_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("vibro_freq", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt_0 += 1;
  if (cnt_0 > 5) {
    Plotly.relayout("vibro_freq", {
      xaxis: {
        range: [cnt_0 - 5, cnt_0],
      },
    });
  }
}

// graph current
let cnt_1 = 0;
let y_seq_current_0 = [];
let y_seq_current_1 = [];
let y_seq_current_2 = [];
function lineCurrent() {
  y_seq_current_0.push(Math.random());
  let trace1 = {
    y: y_seq_current_0,
    type: "scatter",
  };
  y_seq_current_1.push(Math.random());
  let trace2 = {
    y: y_seq_current_1,
    type: "scatter",
  };
  y_seq_current_2.push(Math.random());
  let trace3 = {
    y: y_seq_current_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("current", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt_1 += 1;
  if (cnt_1 > 5) {
    Plotly.relayout("current", {
      xaxis: {
        range: [cnt_1 - 5, cnt_1],
      },
    });
  }
}

// graph current frequency
let cnt_2 = 0;
let y_seq_current_freq_0 = [];
let y_seq_current_freq_1 = [];
let y_seq_current_freq_2 = [];
function lineCurrentFreq() {
  y_seq_current_freq_0.push(Math.random());
  let trace1 = {
    y: y_seq_current_freq_0,
    type: "scatter",
  };
  y_seq_current_freq_1.push(Math.random());
  let trace2 = {
    y: y_seq_current_freq_1,
    type: "scatter",
  };
  y_seq_current_freq_2.push(Math.random());
  let trace3 = {
    y: y_seq_current_freq_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("current_freq", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt_2 += 1;
  if (cnt_2 > 5) {
    Plotly.relayout("current_freq", {
      xaxis: {
        range: [cnt_2 - 5, cnt_2],
      },
    });
  }
}

// graph acustic
let cnt_3 = 0;
let y_seq_acustic_0 = [];
let y_seq_acustic_1 = [];
let y_seq_acustic_2 = [];
function lineAcustic() {
  y_seq_acustic_0.push(Math.random());
  let trace1 = {
    y: y_seq_acustic_0,
    type: "scatter",
  };
  y_seq_acustic_1.push(Math.random());
  let trace2 = {
    y: y_seq_acustic_1,
    type: "scatter",
  };
  y_seq_acustic_2.push(Math.random());
  let trace3 = {
    y: y_seq_acustic_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("acustic", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt_3 += 1;
  if (cnt_3 > 5) {
    Plotly.relayout("acustic", {
      xaxis: {
        range: [cnt_3 - 5, cnt_3],
      },
    });
  }
}

// graph acustic frequency
let cnt_4 = 0;
let y_seq_acustic_freq_0 = [];
let y_seq_acustic_freq_1 = [];
let y_seq_acustic_freq_2 = [];
function lineAcusticFreq() {
  y_seq_acustic_freq_0.push(Math.random());
  let trace1 = {
    y: y_seq_acustic_freq_0,
    type: "scatter",
  };
  y_seq_acustic_freq_1.push(Math.random());
  let trace2 = {
    y: y_seq_acustic_freq_1,
    type: "scatter",
  };
  y_seq_acustic_freq_2.push(Math.random());
  let trace3 = {
    y: y_seq_acustic_freq_2,
    type: "scatter",
  };

  let data = [trace1, trace2, trace3];
  const layout = {
    barmode: "stack",
    height: 170,
    width: 400,
    margin: { t: 5, b: 15, l: 60, r: 80 },
  };

  // build plot
  Plotly.newPlot("acustic_freq", data, layout);

  // update plot
  //Plotly.redraw("vibro");
  cnt_4 += 1;
  if (cnt_4 > 5) {
    Plotly.relayout("acustic_freq", {
      xaxis: {
        range: [cnt_4 - 5, cnt_4],
      },
    });
  }
}

// table data
function createTable() {
  const ListRUL = [
    {
      Equipment: "Двигатель AИР 1",
      Deviation_detection: "Норма",
      RUL: "Норма",
    },
    {
      Equipment: "Двигатель АИР 2",
      Deviation_detection: "Ослабленное крепление. Подшипник",
      RUL: "5 дней",
    },
  ];

  // функция заполнения
  idx = 0;
  ListRUL.forEach((rul) => {
    const trContent = `
                          <td>${rul.Equipment}</td>
                          <td>${rul.Deviation_detection}</td>
                          <td>${rul.RUL}</td> 
                      `;
    document.getElementById("table-roi_" + String(idx)).innerHTML = trContent;
    idx += 1;
  });
}

// ---- ДВ АИР 1 ---- //
function engineFirstPiepPlot1() {
  const data = [
    {
      values: [ENGINE_FIRST_PLOT_11, ENGINE_FIRST_PLOT_12],
      labels: ["Residential", "Non-Residential", "Utility"],
      type: "pie",
      hoverinfo: "none",
      marker: {
        colors: ["rgb(0, 128, 0)", "rgb(255, 165, 0)"],
      },
    },
  ];

  const layout = {
    height: 170,
    width: 170,
    margin: { t: 0, b: 5, l: 40, r: 0 },
    showlegend: false,
  };

  Plotly.newPlot("engine_pie_1", data, layout);
}

// call all functions for main
function updateMainFunction() {
  pie_plot_1();
  pie_plot_2();
  pie_plot_3();
  pie_plot_4();
  pie_bar_1();
  pie_bar_2();
  createTable();
}

// call all functions for stat
function updateStatInfoFunction() {
  lineVibro();
  lineVibroFreq();

  lineCurrent();
  lineCurrentFreq();

  lineAcustic();
  lineAcusticFreq();
}

// call all functions for engineStat
function updateEnginesInfo() {
  engineFirstPiepPlot1();
}

// updating function
setInterval(updateMainFunction, DELAY);
setInterval(updateStatInfoFunction, DELAY);
setInterval(engineFirstPiepPlot1, DELAY);
