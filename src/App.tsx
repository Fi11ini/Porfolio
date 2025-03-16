import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";

import {TechStack} from "./layout/section/techStack/TechStack.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
        </div>
    )
}

export default App

