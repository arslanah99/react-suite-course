import logo from './logo.svg';
import './App.css';
import {Button, ButtonGroup, ButtonToolbar, IconButton} from "rsuite"
// import default style
import 'rsuite/dist/rsuite.min.css'
import {Gear, Message} from '@rsuite/icons';

function App() {
  return (
    <div className="App">
    <Button appearance='subtle'>Hello World</Button>
    <ButtonToolbar>
      <Button color="red" appearance='ghost' size="lg">Large</Button>
      <Button>md</Button>
      <Button size="sm">small</Button>
      <Button color="yellow" appearance='link' size="xs">xs</Button>
    </ButtonToolbar>
    <ButtonToolbar>
      <IconButton icon={<Gear />}/>
      <IconButton icon={<Message />} color="orange" appearance='primary' placement="right" circle>Message</IconButton>

    </ButtonToolbar>
    <Button block disabled loading appearance="primary">BUTTON</Button>
    <ButtonToolbar>
      <ButtonGroup>
        <Button>#1</Button>
        <Button>#2</Button>
        <Button>#3</Button>
        <Button>#4</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button appearance='primary'>#1</Button>
        <Button appearance='primary'>#2</Button>
        <Button appearance='primary'>#3</Button>
        <Button appearance='primary'>#4</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button appearance='ghost'>#69</Button>
      </ButtonGroup>
    </ButtonToolbar>
    </div>
  );
}

export default App;
