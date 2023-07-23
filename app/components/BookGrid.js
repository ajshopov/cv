import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from '@mui/material/Container';
import withStyles from '@mui/styles/withStyles';
import { Button } from "@mui/material";
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";
import startingTemplate from "../../lib/gridInitialLayout";
import BarLoader from "react-spinners/BarLoader";


const styles = {
    gridImage: {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }
  }

const ResponsiveGridLayout = WidthProvider(Responsive);
const initialLayouts = getFromLS("layouts") || startingTemplate;

class MyFirstGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: [],
      layouts: initialLayouts
    };
  }

  componentDidMount() {
    fetch("https://openlibrary.org/people/ashopov/books/already-read.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            books: result.reading_log_entries
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  resetLayout() {
    this.setState({ layouts: startingTemplate });
  }

  onLayoutChange(layout, layouts) {
    saveToLS("layouts", layouts);
    this.setState({ layouts });
  }
  
  render() {
    const { classes } = this.props
    const { error, isLoaded, books } = this.state;
    if (error) {
      return <Container maxWidth="xl">Error: {error.message}</Container>;
    } else if (!isLoaded) {
      return <Container maxWidth="xl"><BarLoader color="#36d7b7"/></Container>;
    } else {
      return (
          <Container maxWidth="xl">
            <Button
              variant="contained"
              style={{ fontFamily: "'Nunito', sans-serif" }}
              onClick={() => this.resetLayout()}
            >
              Reset Grid Layout
            </Button>
            <ResponsiveGridLayout
              layouts={this.state.layouts}
              onLayoutChange={(layout, layouts) =>
                this.onLayoutChange(layout, layouts)
              }
              rowHeight={60}
              compactType={null}
              breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
              cols={{ lg: 10, md: 8, sm: 6, xs: 4, xxs: 2 }}
            >
              {books.map((entry, index) => (
                <div key={index} data-grid={{ x: index, y: 0, w: 1, h: 3 }}>
                  <img className={classes.gridImage} src={`https://covers.openlibrary.org/b/id/${entry.work.cover_id}-L.jpg`}/>
                </div>
              ))}
            </ResponsiveGridLayout>
          </Container>
      );
    }
  }
}

function getFromLS(key) {
  let ls = {};
  if (global.localStorage) {
    try {
      ls = JSON.parse(global.localStorage.getItem("rgl-8")) || {};
    } catch (e) {
      /*Ignore*/
    }
  }
  return ls[key];
}

function saveToLS(key, value) {
  if (global.localStorage) {
    global.localStorage.setItem(
      "rgl-8",
      JSON.stringify({
        [key]: value
      })
    );
  }
}

export default withStyles(styles)(MyFirstGrid);

