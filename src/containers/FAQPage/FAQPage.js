import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './FAQPage.css';

const FAQPage = () => {
  return (
  <StaticPage
    title="Frequently Asked Questions"
    schema={{
      "@context": "http://schema.org",
       "@type": "FAQPage",
       "description": "Frequently asked questions in CottageDays marketplace.",
       "name": "Frequently Asked Questions",
       "mainEntity": [
         {
           "@type": "Question",
           "name": "Question 1?",
           "acceptedAnswer": {
             "@type": "Answer",
             "text": "Answer: Lorem ipsum"
           }
         }
       ]
    }}>
    <LayoutSingleColumn>
      <LayoutWrapperTopbar>
        <TopbarContainer />
      </LayoutWrapperTopbar>

      <LayoutWrapperMain className={css.mainWrapper}>
        <h1>FAQ</h1>

        <div>
          <h3>How many snakes does Oskar have?</h3>
          <p>Two too many</p>
        </div>
      </LayoutWrapperMain>

      <LayoutWrapperFooter>
        <Footer />
      </LayoutWrapperFooter>
    </LayoutSingleColumn>
  </StaticPage>
);

};

export default FAQPage;
