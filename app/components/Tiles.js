import React from "react";
import GridLayout from "react-grid-layout";
import withStyles from '@mui/styles/withStyles';

const styles = {
    gridImage: {
      maxWidth: '100%',
      maxHeight: '100%'
    }
  }


class MyFirstGrid extends React.Component {
  render() {
    const { classes } = this.props
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
        rowHeight={60}
        width={1200}
        verticalCompact={false}
      >
        <div key="a" style={{ border: '1px solid black' }}>
            <img className={classes.gridImage} src="https://covers.openlibrary.org/b/id/5546156-L.jpg"/>
        </div>
        <div key="b" style={{ border: '1px solid black' }}>
            <img className={classes.gridImage} src="https://covers.openlibrary.org/b/isbn/9780465066933-L.jpg"/>
        </div>
        <div key="c" style={{ border: '1px solid black' }}>
            <img className={classes.gridImage} src="https://covers.openlibrary.org/b/isbn/9780465066933-L.jpg"/>
        </div>
        <div key="d" style={{ border: '1px solid black' }}>
            <img className={classes.gridImage} src="https://covers.openlibrary.org/b/isbn/9780393339758-L.jpg"/>
        </div>
        <div key="e" style={{ border: '1px solid black' }}>
            <img className={classes.gridImage} src="https://covers.openlibrary.org/b/isbn/9780465066933-L.jpg"/>
        </div>
      </GridLayout>
    );
  }
}

export default withStyles(styles)(MyFirstGrid);