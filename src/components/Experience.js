import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <section id="experience" className="experience">
      <h2>Professional Experience</h2>
      <div className="job">
        <h3 className="job-title">Data Scientist</h3>
        <h4 className="company-name">Pacific Life Re</h4>
        <ul className="experience-list">
          <li>
            Played a key role in a £10bn longevity risk transfer deal involving Lloyd's pension schemes. 
            Developed predictive models enabling accurate risk assessment and successful collaboration across stakeholders. Read more about the transaction{" "}
            <a href="https://www.theactuary.com/news/2020/01/29/lloyds-pension-schemes-agree-ps10bn-longevity-swap">here</a>.
          </li>
          <li>
            Designed and deployed an end-to-end ETL and ML pipeline using Python, AWS (SageMaker), and Redshift, 
            enabling accurate insights for major business tenders. This system improved operational efficiency 
            and supported critical decision-making across underwriting and pricing teams.
          </li>
          <li>
            Led the creation of Tableau dashboards to visualize complex data insights, ensuring key metrics 
            were accessible and actionable for business development, pricing, and R&D teams.
          </li>
          <li>
            Collaborated with cross-functional teams to leverage advanced statistical methods and machine learning 
            models for assessing risk and driving data-driven decision-making.
          </li>
        </ul>
      </div>
    </section>
  );
}


export default Experience;
