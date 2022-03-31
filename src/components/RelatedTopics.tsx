import { useParams } from "react-router-dom";
import { useTopics } from "../hooks/useTopics";
import TopicItemProps from "./TopicItem";
import "../assets/components/RelatedTopics.scss";

function RelatedTopics() {
  const { name } = useParams();
  const { topic, loading, error } = useTopics(name);

  if (loading) {
    return (
      <div>
        Loading...
      </div>
    );
  }

  if (error || !topic) {
    return (
      <div>
        Oops... Something went wrong, We're working on it.
      </div>
    );
  }

  return (
    <div className="RelatedTopics">
      <div className="RelatedTopics__currentTopic">
        <TopicItemProps topic={topic} />
      </div>
      <h3 className="RelatedTopics__title">Related topics:</h3>
      <ul className="RelatedTopics__list">
          {
            topic.relatedTopics && topic.relatedTopics.map(
              (topic: any, index: number) => (
                <li key={index} >
                  <TopicItemProps topic={topic} />
                </li>
                )
            )
          }      
      </ul>
    </div>
  )
}

export default RelatedTopics;
