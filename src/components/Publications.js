/* Publications Section */
import React from 'react';
import './Publications.css';

function Publications() {
  return (
    <section id="phd-thesis" className="publications">
      <h2>PhD Thesis </h2>
      <h3> Impact of Factors Associated with Short-Term Transplant Outcomes </h3>
      <p>
        This project was funded by the NHSBT and University of Southampton <it>Vice Chancellor's Scholarship</it>. Analysis was carried out in a combination of R, Python and Linux (utilising Southampton University's supercomputer for HPC). </p> 
        <p> The table below describes at a high level the key chapters of the thesis. You can download the published thesis with the button below the table  </p>
      <table className="thesis-table">
        <thead>
          <tr>
            <th>Chapter</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>3</td>
            <td>
              Benchmarks various ML models for predicting Delayed Graft Function (Random Forest, Conditional Random Forest, AdaBoost, XGBoost) and a Hierarchical (Random Intercept) Logistic Regression.
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>
              Dynamically predicts donor death time during treatment withdrawal using a multivariate Joint Bayesian Longitudinal and Survival model to optimize logistic resources for maximum graft quality.
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>
              Investigates how features of physiological variables' trajectories in the treatment withdrawal phase are associated with graft quality, using a two-stage mixed effects model and a two-stage joint modeling approach.
            </td>
          </tr>
        </tbody>
      </table>
      <a
        href="https://eprints.soton.ac.uk/452894/"
        target="_blank"
        rel="noopener noreferrer"
        className="thesis-button"
      >
        View Thesis on University of Southampton’s ePrints repository
      </a>
   </section>
  );
}

export default Publications;
