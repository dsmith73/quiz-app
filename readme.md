# quiz app  

https://create-react-app.dev  
  * `npx create-react-app my-app --template typescript`  
  * remove all in src/ but App & Index.tsx and react-app-env  
  * remove references to css in app & index.tsx  
  * update `<div className="App">Quiz</div>`  
  * `npm i styled-components @types/styled-components`  
  * `npm start`  
  * launch browser to `localhost:3000`  
    * webpage comes up - says Quiz  
  * get background from https://unsplash.com  
  * create /src/images  
  * put img in /images  
  * get some google fonts from https://fonts.google.com  
    * I selected catamaran, & Emplema One  
    * `<link href="https://fonts.googleapis.com/css2?family=Catamaran:wght@700&family=Emblema+One&display=swap" rel="stylesheet">`  
    * CSS rules `font-family: 'Bungee Inline', cursive;`  
                `font-family: 'Catamaran', sans-serif;`  
  * get the embed links & add to index.html  
  * check out the site to use for questions https://opentdb.com  
  * make your api selections and get the api link  
    * `https://opentdb.com/api.php?amount=10&type=multiple`  
  * create src/components  
  * create components/QuestionCard.tsx and populate  
  * create src/API.ts  
  * create src/utils.ts  
  * update App.tsx
    * we'll be using arrow functions for this implementation  
    * `function App()` to `const App = () =>`  
  * update QuestionCard.tsx
  * update API.ts
  * 
