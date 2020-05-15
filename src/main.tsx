import { Aurum } from "aurumjs";
import "../scss/example.scss";
import { Dummy } from './components/dummy/dummy_component';


Aurum.attach(<div><b>Hello Bubbly Cat!</b> <br/> Eventually, we will have a gallery here <br/> <Dummy /> </div>, document.body);
