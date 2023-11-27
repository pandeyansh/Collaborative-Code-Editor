import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { RecoilRoot } from "recoil";
import LogIn from './LogIn';
import Signup from './Signup';
import ChatBox from './pages/ChatBox';
function App() {
    return (
        <>
            <div>
                <Toaster
                    position="top-center"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>
            </div>
            <BrowserRouter>
                <RecoilRoot>
                    <Routes>
                    <Route path="*" element={<LogIn/>}></Route>
                    <Route path="/signup" element={<Signup></Signup>}></Route>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/ChatBox" element={<ChatBox></ChatBox>}></Route>
                        <Route
                            path="/editor/:roomId"
                            element={<EditorPage />}
                        ></Route>
                    </Routes>
                </RecoilRoot>
            </BrowserRouter>
        </>
    );
}
export default App;