import logo from './logo.svg';
import './App.css';
import { Greet, Hello } from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import { EventBind } from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import Stylesheet from './components/Stylesheet';
import  Inline  from './components/Inline';
import  Form  from './components/Form';
import  LifecycleA  from './components/LifecycleA';
import  FragmentDemo  from './components/FragmentDemo';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import FocusInput from './components/FocusInput';
// import Hero from './components/Hero';
import CounterClick from './components/CounterClick';
import HoverClick from './components/HoverClick';
import UsestateHooks from './components/UsestateHooks';
import ClassCounterOne from './components/ClassCounterOne';
import HookCounterOne from './components/HookCounterOne';
import DataFetching from './components/DataFetching';
import CounterOneReducer from './components/CounterOneReducer';
import DataFetchingReducer from './components/DataFetchingReducer';
import DataFetchingReducerOne from './components/DataFetchingReducerOne';
import CounterUseMemo from './components/CounterUseMemo';
import FocusInputUseRef from './components/FocusInputUseRef';



function App() {
  return (
    <div className="App">
      {/* <Greet name="Shreeja">
        <p>This is a childern</p></Greet>
       <Hello/>
      <Welcome place="sillod"/>
      <Message/>
      <Counter/>
      <EventBind/>
      <ParentComponent/>
      <NameList/>

      <Stylesheet header={true}/>
      <Inline/>

      <Form/>
      <LifecycleA/>
      <FragmentDemo/>
      <ParentComp/>
      <RefsDemo/>
      <FocusInput /> */}
      {/* <Hero name="sachin"/> */}

      {/* <CounterClick/>
      <HoverClick/> */}
      {/* <UsestateHooks/> */}
      {/* <ClassCounterOne/> */}
      {/* <HookCounterOne/> */}
      {/* <DataFetching/>
      <CounterOneReducer/> */}
      {/* <DataFetchingReducer/> */}
      {/* <DataFetchingReducerOne/> */}
      {/* <CounterUseMemo/> */}
      <FocusInputUseRef/>
      
    </div>
  );
}

export default App;
