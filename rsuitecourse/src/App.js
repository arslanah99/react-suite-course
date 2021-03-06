import './App.css';
import {
  ButtonToolbar,
  CustomProvider,
  IconButton,
  Navbar,
  Nav,
  Container,
  Header,
  Content,
  Footer,
  FlexboxGrid,
  Col,
  List,
  Panel,
  AvatarGroup,
  Avatar,
  Badge,
} from 'rsuite';
// import default style
import 'rsuite/dist/rsuite.min.css';
import {
  Visible,
  Unvisible,
  Others,
  ArrowUp,
  TextImage,
  Review,
} from '@rsuite/icons';
import {forwardRef, useEffect, useState} from 'react';
import FlexboxGridItem from 'rsuite/esm/FlexboxGrid/FlexboxGridItem';
import ListItem from 'rsuite/esm/List/ListItem';
import {Link, BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/Home.js';
import FormComponent from './components/Forms.js';

function App() {
  const [toggleMode, setToggleMode] = useState(
    localStorage.getItem('toggle-mode') === 'true'
  );
  useEffect(() => {
    localStorage.setItem('toggle-mode', toggleMode);
  }, [toggleMode]);
  const toggleModeFunc = () => {
    setToggleMode(!toggleMode);
  };
  const NavLink = forwardRef(({href, children, ...rest}, ref) => (
    <Link ref={ref} to={href} {...rest}>
      {children}
    </Link>
  ));

  return (
    <Router>
      <CustomProvider theme={toggleMode ? 'dark' : 'light'}>
        <Container style={{minHeight: '100vh'}}>
          <Header>
            <Navbar>
              <Navbar.Brand>THE GOAT COURSE</Navbar.Brand>
              <Nav>
                <Nav.Item
                  as={NavLink}
                  children={<Home />}
                  href="/"
                  icon={<ArrowUp />}
                >
                  Home
                </Nav.Item>
                <Nav.Item
                  as={NavLink}
                  children={<FormComponent />}
                  href="/form"
                icon={<Others />}>Form</Nav.Item>
                <Nav.Menu title="About">
                  <Nav.Item icon={<TextImage />}>Home</Nav.Item>
                  <Nav.Item icon={<Review />}>Modal</Nav.Item>
                </Nav.Menu>
              </Nav>
              <Nav pullRight>
                <Nav.Item>
                  <ButtonToolbar>
                    <IconButton
                      onClick={toggleModeFunc}
                      color="red"
                      appearance="ghost"
                      size="lg"
                      icon={toggleMode ? <Visible /> : <Unvisible />}
                    />
                  </ButtonToolbar>
                </Nav.Item>
                <Nav.Item>
                  <Badge content="69">
                    <Avatar
                      size="md"
                      src="https://i1.sndcdn.com/artworks-PhbFrkdPgRxZp94y-Zu7Hzw-t500x500.jpg"
                      alt="@madara"
                    />
                  </Badge>
                </Nav.Item>
              </Nav>
            </Navbar>
          </Header>
          <Content>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/form" element={<FormComponent />} />
            </Routes>
          </Content>
          <Footer>
            <List>
              <FlexboxGrid justify="space-between">
                <FlexboxGridItem
                  style={{
                    marginBottom: 5,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  as={Col}
                  colspan={6}
                >
                  <List>
                    <h6>THICC MEMES INC</h6>
                    <ListItem>342-420-6969</ListItem>
                    <ListItem>Moscow, Russia</ListItem>
                    <ListItem>123 Streeet South North</ListItem>
                  </List>
                </FlexboxGridItem>
                <FlexboxGridItem
                  style={{
                    marginBottom: 5,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  as={Col}
                  colspan={6}
                >
                  <List>
                    <h6>Stuff</h6>
                    <ListItem>DANK MEMES</ListItem>
                    <ListItem>OTHER STUFF</ListItem>
                    <ListItem>GUD STUFF</ListItem>
                  </List>
                </FlexboxGridItem>
                <FlexboxGridItem
                  style={{
                    marginBottom: 5,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                  as={Col}
                  colspan={6}
                >
                  <List>
                    <h6>WELL ANOTHER COLUMN</h6>
                    <ListItem>DANK MEMES</ListItem>
                    <ListItem>OTHER STUFF</ListItem>
                    <ListItem>GUD STUFF</ListItem>
                  </List>{' '}
                </FlexboxGridItem>
              </FlexboxGrid>
              <FlexboxGrid justify="center">
                <FlexboxGridItem>
                  <p>
                    &copy;{new Date().getFullYear()} THICC MEMES | All rights
                    reserved | Terms Of Service | Privacy
                  </p>
                </FlexboxGridItem>
              </FlexboxGrid>
            </List>
          </Footer>
        </Container>
      </CustomProvider>
    </Router>
  );
}

export default App;
