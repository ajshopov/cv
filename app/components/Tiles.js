import React from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import Container from '@mui/material/Container';
import withStyles from '@mui/styles/withStyles';
import "../../node_modules/react-grid-layout/css/styles.css";
import "../../node_modules/react-resizable/css/styles.css";


const styles = {
    gridImage: {
      objectFit: 'cover',
      width: '100%',
      height: '100%'
    }
  }
  const ResponsiveGridLayout = WidthProvider(Responsive);

class MyFirstGrid extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      books: []
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
  
  render() {
    const { classes } = this.props
    const { error, isLoaded, books } = this.state;
    const layoutLG = [
      { i: "0", x: 0, y: 0, w: 2, h: 5},
      { i: "1", x: 2, y: 0, w: 2, h: 5},
      { i: "2", x: 4, y: 0, w: 2, h: 5}
    ];
    const layoutXXS = [
        { i: "0", x: 0, y: 0, w: 1, h: 4},
        { i: "1", x: 1, y: 0, w: 1, h: 4}
      ];
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <Container maxWidth="xl" disableGutters>
          <ResponsiveGridLayout
            rowHeight={60}
            width={1536}
            // isResizable={false}
            verticalCompact={false}
            breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
            cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
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

export default withStyles(styles)(MyFirstGrid);