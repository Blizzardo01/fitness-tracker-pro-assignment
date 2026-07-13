import { deleteActivity } from "../api/activities";
import { useAuth } from "../auth/AuthContext";

export function ActivityItem({ activity }) {

    const backHandler = () => {
        
    }

    const tryDelete = async () => {
    setError(null);

    try {
      await deleteActivity(token, activity.id);
      syncActivities();
    } catch (e) {
      setError(e.message);
    }
  };

    return (
        <section>
            <h1>Activity: {activity.name}</h1>
            <p>Description: {activity.description}</p>
            <p>Created by {activity.creatorname}</p>
            <button onClick={tryDelete}>Delete Activity</button>
            <button onClick={backHandler}>Go Back</button>
        </section>
    )
}