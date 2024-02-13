import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function SubThird3() {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageName3 = searchParams.get("pageName");
    const seconDprop3 = searchParams.get("seconDprop");
    console.log(pageName3);
    console.log(seconDprop3);
    const [id] = useState(3);
    const [pageName] = useState("subthird3");
    const [seconDprop] = useState("seconDprop3");
    const paramsId = useParams();
    console.log(paramsId);
    return (
        <div>
            <p>SubThird3</p>
            <Link
                to={`/thirdpage/subthird1/${id}?pageName=${pageName}&seconDprop=${seconDprop}`}
            >
                Subthird1
            </Link>
            <Link
                to={`/thirdpage/subthird2/${id}?pageName=${pageName}&seconDprop=${seconDprop}`}
            >
                Subthird2
            </Link>
            <Link
                to={`/thirdpage/subthird3/${id}?pageName=${pageName}&seconDprop=${seconDprop}`}
            >
                Subthird3
            </Link>
            <Link to="/">Back</Link>
        </div>
    );
}
