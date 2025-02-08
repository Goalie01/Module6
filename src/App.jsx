// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
// import PropsDisplayer from './components/PropsDisplayer'
// import City from './components/City'
// import Address from './components/Address'
// import Pets from './components/Pets'
// import Greeting from './components/Greeting'
// import FullName from './components/FullName'//
// import FancyBox from './components/FancyBox'; 
// import ComplexComment from './components/ComplexComment';
// import MoviesList from './components/MoviesList';
// 
// import BigCats from './components/BigCats';
// import LoginForm from './components/LoginForm';
// import MoodChanger from './components/MoodChanger'
// import Emoji from './components/Emoji';
// import BirthdayTranslator from './components/BirthdayTranslator';
// import Weather from './components/Weather';
import Calculator from './components/Calculator'; 

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Custom Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 2)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>

//     // Module 6 - Slide 16


//   )
// }

// const spiderman = { 
//   name: 'Spiderman', 
//   alterEgo: 'Peter Parker', 
//   catchPhrase: 'with great power comes great responsibility',
// };

// const spideyJSX = (<div>
//   <h3>{spiderman.name}</h3>
//   <blockquote>{spiderman.catchPhrase}</blockquote><cite>{spiderman.alterEgo}</cite>
//   </div>
// )

// // single parent fragment element
// const spideyJSXFragment = (<>
//   <h3>{spiderman.name}</h3>
//   <blockquote>{spiderman.catchPhrase}</blockquote>
//   <cite>{spiderman.alterEgo}</cite>
//   </>);

  // This creates a new component as a function that returns some JSX.
// Add this in App.jsx ABOVE the App component
// function ExampleComponent() {

//   return (
//   <div className="ExampleComponent componentBox">
//   <h1>My Example Component</h1>
//   <p>My first React component!</p>
//   </div>
//   )
//   }

  // function ExampleComponent2() {

  //   return (
  //   <div className="ExampleComponent componentBox">
  //   <h1>My Example Component 2</h1>
  //   <p>My first React component!</p>
  //   </div>
  //   )
  //   }

  // Module 6 - Slide 21 - 22

  // function Welcome(props) { // custom Welcome component
  //   return (
  //   <div className="Welcome componentBox">
  //   {/* if the 'name' prop exists, render it on the screen */}
  //   <h3>Welcome {props.name}!</h3>
  //   {/* if this component has children, render them here */}
  //   {props.children}
  //   </div>
  //   )
  // }

  // object storing comment data - passed as props
// const comment = {
//   date: new Date(),
//   text: 'I hope you enjoy learning React!',
//   author: { // author is also an object
//   name: 'Hello Kitty',
//   avatarUrl: 'https://placekitten.com/g/64/64',
//   },
//   };

function App() {
  return (
    <div className="App">
      {/* {spideyJSX}
      {spideyJSXFragment} */}
      {/* <ExampleComponent/> */}
      {/* <ExampleComponent2/> */}
      {/* <Welcome name="students">
        <p>Children of Welcome Component</p>
      </Welcome> */}
      {/* <PropsDisplayer />
      <PropsDisplayer myProp="first prop"/>
      <PropsDisplayer prop1="first" prop2="second" prop3={3}/> */}
      {/* <PropsDisplayer name="Harry Styles" age={29}/>
      <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */}
      {/* <PropsDisplayer reactLogo={reactLogo} buttonCount={count}/> */}
      {/* <City name="Melbourne" state="VIC"/> */}
      {/* <City name="Chicago" state="Illinois" country="USA"/> */}
      {/* <Address Street="380 Simona Hollow"/> */}
      {/* <City name="Newcastle">
        <div>Newcastle is a harbour city in the Australian state
          of New South Wales.</div>
          <div><strong>Population:</strong> 322,278 (2016)</div>
          <div><strong>Random:</strong>HELOOOO!</div>
      </City> */}
      {/* <Pets name="random" type="randomtype" colour="brown"/> */}
      {/* <Greeting name="John"/>
      <div>Children of John</div> */}
      {/* <FullName first="Kendrick" middle="Mustarrrrrd" last="Lamar"/> */}
      {/* <ComplexComment/> */}
      {/* <ComplexComment author={comment.author}
      date={comment.date}
      text={comment.text}/> */}

{/* // render the Callout component with FullName as children */}
    {/* <Callout title="Nested React Component"
    message="Simple message with a fancy box applied via composition">
    <FullName first="Elon" last="Musk" />
    </Callout>  */}
    {/* <MoviesList/> */}
    {/* <BigCats/> */}
    {/* <LoginForm/> */}
    {/* <ExplodingBomb/> */}
    <Calculator/>

    {/* <MoodChanger/> */}
      {/* <Emoji/> */}
      {/* <BirthdayTranslator/> */}
      {/* <Weather/> */}


    </div>
  )
}

export default App;