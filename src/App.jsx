import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import HomePage from "./pages/HomePage";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import SubThird1 from "./pages/SubThird1";
import SubThird2 from "./pages/SubThird2";
import SubThird3 from "./pages/SubThird3";
import PageNotFound from "./pages/PageNotFound";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/firstpage" element={<FirstPage />} />
                <Route path="/secondpage" element={<SecondPage />} />
                <Route path="/thirdpage" element={<ThirdPage />}>
                    <Route index element={<SubThird1 />} />
                    {/* <Route path="subthird1" element={<SubThird1 />} /> */}
                    <Route path="subthird1/:id" element={<SubThird1 />} />
                    {/* <Route path="subthird2" element={<SubThird2 />} /> */}
                    <Route path="subthird2/:id" element={<SubThird2 />} />
                    {/* <Route path="subthird3" element={<SubThird3 />} /> */}
                    <Route path="subthird3/:id" element={<SubThird3 />} />
                    <Route path="*" element={<PageNotFound />} />
                    <Route />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
