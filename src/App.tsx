import './App.css'
import {Header} from "./layout/header/Header.tsx";
import {Main} from "./layout/section/main/Main.tsx";
import {Footer} from "./layout/section/footer/Footer.tsx"
import {TechStack} from "./layout/section/techStack/TechStack.tsx";
import {Projects} from "./layout/section/projects/Projects.tsx";
import {Question} from "./layout/section/question/Question.tsx";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <TechStack/>
            <Projects/>
            <Question />
            <Footer/>
        </div>
    )
}

export default App

