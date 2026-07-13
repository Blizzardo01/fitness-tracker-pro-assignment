import { useState, useEffect } from "react";
import { deleteActivity, getActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";
import { useParams, Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";

export function ActivityItem() {
    const { id } = useParams();
    const { token } = useAuth();
    const [activity, setActivity] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchActivity() {
        const data = await getActivity(id);
        console.log(data);
        setActivity(data);
        }

        fetchActivity();
    }, [id]);

      if (!activity) {
        return <p>Loading...</p>;
    }


    const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      navigate("/");
    } catch (e) {
      setError(e.message);
    }
  };

    return (
        <section>
            <h1>{activity.name}</h1>
            <p>{activity.description}</p>
            <p>{activity.creatorName}</p>
            {token && <button onClick={tryDelete}>Delete Activity</button>}
            
            <Link to="/">
                Go Back
            </Link>
        </section>
    )
}