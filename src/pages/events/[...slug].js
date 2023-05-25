import { Fragment } from 'react';
import { useRouter } from 'next/router';

import { getFilteredEvents } from '../../../events-model';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';

function FilteredEvents() {
  let errorMsg;
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className='center'>Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const isInvalidInputs =
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12;

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  const noEvents = !filteredEvents || filteredEvents.length === 0;

  const hasError = isInvalidInputs || noEvents;

  if (noEvents) errorMsg = 'No events found for the chosen filter!';

  if (isInvalidInputs) errorMsg = 'Invalid filter. Please adjust your values!';

  return (
    <Fragment>
      {hasError ? (
        <>
          <ErrorAlert>
            <p>{errorMsg}</p>
          </ErrorAlert>
          <div className='center'>
            <Button link='/events'>Show All Events</Button>
          </div>
        </>
      ) : (
        <>
          <ResultsTitle date={date} />
          <EventList events={filteredEvents} />
        </>
      )}
    </Fragment>
  );
}

export default FilteredEvents;
