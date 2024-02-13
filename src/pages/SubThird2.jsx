import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

export default function SubThird2() {
    const [searchParams, setSearchParams] = useSearchParams();
    const pageName2 = searchParams.get("pageName");
    const seconDprop2 = searchParams.get("seconDprop");
    console.log(pageName2);
    console.log(seconDprop2);
    const [id] = useState(2);
    const [pageName] = useState("subthird2");
    const [seconDprop] = useState("seconDprop2");
    const paramsId = useParams();
    console.log(paramsId);
    return (
        <div>
            <p>SubThird2</p>
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
