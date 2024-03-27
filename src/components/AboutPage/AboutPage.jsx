import React from 'react';
import './About.css';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="flex-container">
      <div>
        <p>
            This application is a habit building expense tracker that will build a budget
            based on your spending each month.
            The goal is to build the habit of
            recording and tracking your expenses each day
            and at the end of the month it will 
            build your budget based on your spending. 
            It is a habit building
            tool to use alongside other resources  
            to teach people to be more in
            control of their finanaces.
          </p>
          <p>
            The 1st goal should be to build the habit of 
            recording your spending daily.
            </p>
            <p>
            The 2nd goal should be to record your income
            when it comes in.
            </p>
            <p>
            The 3rd goal should be to look at it as a whole
            and determine what your monthly finances look like.
          </p>
      </div>
    </div>
  );
}

export default AboutPage;
