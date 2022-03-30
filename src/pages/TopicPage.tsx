import RelatedTopics from '../components/RelatedTopics';
import TopicProvider from '../context/TopicContext';
import '../assets/pages/TopicPage.scss';

function TopicPage() {
    return <div className="Topic">
        <TopicProvider>
            <RelatedTopics />
        </TopicProvider>
    </div>
}

export default TopicPage