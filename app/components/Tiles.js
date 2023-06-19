import React from "react";
import GridLayout from "react-grid-layout";

class MyFirstGrid extends React.Component {
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const layout = [
      { i: "a", x: 0, y: 0, w: 1, h: 2},
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
      { i: "d", x: 4, y: 0, w: 1, h: 2 },
      { i: "e", x: 4, y: 0, w: 1, h: 2 },
    ];
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
        verticalCompact={false}
      >
        <div key="a" style={{ border: '1px solid black' }}>a</div>
        <div key="b" style={{ border: '1px solid black' }}>b</div>
        <div key="c" style={{ border: '1px solid black' }}>c</div>
        <div key="d" style={{ border: '1px solid black' }}>d</div>
        <div key="e" style={{ border: '1px solid black' }}>e</div>
      </GridLayout>
    );
  }
}

export default MyFirstGrid;