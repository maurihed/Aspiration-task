import { Link } from "react-router-dom";
import { ITopic } from "../interfaces";
import "../assets/components/TopicItem.scss"

type TopicItemProps = {
    topic: ITopic;
};

function TopicItem({ topic }: TopicItemProps) {
  const handleClick = () => {
    console.log('Click')
  }
  return (
    <li className="TopicItem">
      <Link onClick={handleClick} data-testid="TopicLink" to={{ pathname: `/topic/${topic.name}`, }} className="TopicItem__link">
        <span className="TopicItem__name">{topic.name}</span>
        <span className="TopicItem__count">{topic.stargazerCount}</span>
        <img className="TopicItem__star" src="https://www.svgrepo.com/show/6977/star.svg" alt="stars" />
      </Link>
    </li>
  )
}

export default TopicItem;
