import { useParams } from "react-router-dom";
import { useTopics } from "../hooks/useTopics";
import TopicItemProps from "./TopicItem";
import "../assets/components/RelatedTopics.scss";

function RelatedTopics() {
  const { name } = useParams();
  const { topics, loading, error } = useTopics(name);

  if (loading) return (
    <div>
      Loading...
    </div>
  );

  if (error) {
    return (
      <div>
        Render error component
      </div>
    );
  }

  return (
    <div className="RelatedTopics">
      <ul className="RelatedTopics__list">
          {topics.map((topic: any) => <TopicItemProps key={topic.name} topic={topic} />)}      
      </ul>
    </div>
  )
}

export default RelatedTopics;
