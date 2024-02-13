import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function SubThird1() {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageName1 = searchParams.get("pageName");
    const seconDprop1 = searchParams.get("seconDprop");
    console.log(pageName1);
    console.log(seconDprop1);
    const [id] = useState(1);
    const [pageName] = useState("subthird1");
    const [seconDprop] = useState("seconDprop1");
    const paramsId = useParams();
    console.log(paramsId);
    return (
        <div>
            <p>SubThird1</p>
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
