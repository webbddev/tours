import React from 'react';
import SingleTour from './SingleTour';

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          return <SingleTour key={tour.id} {...tour} removeTour={removeTour} />;
          // {...tour} - accesses all the properties feched and passed to SingleTour component
        })}
      </div>
    </section>
  );
};

export default Tours;
