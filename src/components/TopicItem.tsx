import { Link } from "react-router-dom";
import { ITopic } from "../interfaces";
import "../assets/components/TopicItem.scss"

type TopicItemProps = {
    topic: ITopic;
};

function TopicItem({ topic }: TopicItemProps) {

  return (
    <Link data-testid="TopicLink" to={{ pathname: `/topic/${topic.name}`, }} className="TopicItem">
      <span className="TopicItem__name">{topic.name}</span>
      <span className="TopicItem__count">{topic.stargazerCount}</span>
      <img className="TopicItem__star" src="https://www.svgrepo.com/show/6977/star.svg" alt="stars" />
    </Link>
  )
}

export default TopicItem;
