// import { getFeaturedEvents } from '../../events-model';
import { getFeaturedEvents } from '../helpers/api-util';
import EventList from '../components/events/event-list';

export default function Home({ events }: any) {
  // we can use useEffect to fetch
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}

// it make sense to pre render it for SEO since its a home page or root rather
export async function getStaticProps() {
  const featuredEvents = await getFeaturedEvents();

  return {
    props: {
      events: featuredEvents,
    },
    revalidate: 1800,
  };
}
