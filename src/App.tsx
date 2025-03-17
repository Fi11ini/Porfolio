import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";

import {TechStack} from "./layout/section/techStack/TechStack.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
            <Projects/>
        </div>
    )
}

export default App

