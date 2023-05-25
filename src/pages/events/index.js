import { getAllEvents } from '../../../events-model';
import EventList from '../../components/events/event-list';

export default function Events() {
  const events = getAllEvents();
  return (
    <div>
      <EventList events={events} />
    </div>
  );
}
