import { Link } from "react-router-dom";

export default function HomePage() {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "colunm",
                marginRight: "10px",
            }}
        >
            <Link to="/firstpage">Primeira pagina</Link>
            <Link to="/secondpage">Segunda pagina</Link>
            <Link to="/thirdpage/subthird1/1">Terceira pagina</Link>
        </div>
    );
}
