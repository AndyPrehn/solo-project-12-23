import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <p>
            This application is an expense tracker that will build a budget
            based on your spending each month. The goal is to build the habit of
            recording and tracking your expenses and at the end of the month
            build your budget based on your spending. It is a habit building
            tool to use alongside other resources to teach people to be more in
            control of their finanaces.
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
