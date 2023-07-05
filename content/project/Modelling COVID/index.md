---
date: "2023-06-04T00:00:00Z"
external_link: ""
image:
  caption: Waves of COVID-19
  focal_point: Smart
links:
- icon: fab fa-link
  name: website
  url: https://covind19.org/
# slides: example
summary: An in-depth exploration of modelling undetected COVID-19 cases in India, incorporating false negatives of COVID-19 RT-PCR tests, and selection bias arising from various sources.
tags:
- COVID-19
- Statistics
- Biostatistics
- Epidemiology
- Public Health
title: "Modelling COVID-19: Estimating the Undetected"
url_code: ""
url_pdf: ""
url_slides: ""
url_video: ""
---

In the summer of 2020, as the world grappled with the COVID-19 pandemic, I found myself at the epicenter of a critical research initiative. I was part of the COVIND-19 research group, a collective formed at the University of Michigan, Ann Arbor, under the guidance of Dr. Bhramar Mukherjee, the chair of the Department of Biostatistics. The group, initially composed of professors, PhD students, and postdocs from the University of Michigan, later expanded to include researchers from Johns Hopkins, Cambridge, and premier Indian institutes. Our mission was to conduct timely and impactful research on crucial aspects of COVID-19.

Our primary focus was on modelling the dynamics of COVID-19 in India and other countries, with a particular emphasis on incorporating the false negatives of COVID-19 RT-PCR tests and the selection bias arising from various sources such as symptom-based testing and the lack of affordable, accessible testing. The theoretical underpinnings of our model were published in the paper titled ["Extending the susceptible‐exposed‐infected‐removed (SEIR) model to handle the false negative rate and symptom‐based administration of COVID‐19 diagnostic tests: SEIR‐fansy"](https://onlinelibrary.wiley.com/doi/pdfdirect/10.1002/sim.9357). Our method enabled us to calculate the number of undetected COVID infections, including false negatives and untested (primarily asymptomatic) individuals. This led to the calculation of the underreporting factors, as detailed in the paper ["Estimating the infection fatality rate from SARS-CoV-2 in India"](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3798552).

One of the significant challenges we encountered during this research project was modelling undetected COVID cases, partitioned into untested and tested negatives. The absence of data on these compartments made model training challenging. We adopted a Bayesian approach with reasonable priors, informed by previous literature, to train our model. We also successfully navigated the convergence issues associated with the Bayesian approach.

A pivotal moment in our research journey was when the underreporting factors predicted by our model aligned closely with those from a seroprevalence study conducted by the Government of India in Delhi. This alignment, detailed in the paper ["Incorporating false negative tests in epidemiological models for SARS-CoV-2 transmission and reconciling with seroprevalence estimates"](https://www.nature.com/articles/s41598-021-89127-1), provided a significant validation of our approach.

Our research journey led us to explore and compare different epidemiological models for predicting SARS-CoV-2 transmission in India. In our paper, ["A comparison of five epidemiological models for transmission of SARS-CoV-2 in India"](https://bmcinfectdis.biomedcentral.com/articles/10.1186/s12879-021-06077-9), we dissected the strengths and weaknesses of five distinct models. This comparative analysis offered valuable insights, aiding policymakers and fellow researchers in selecting the most suitable model for their specific contexts. In another stride, we delved into the estimation of infection fatality rates from SARS-CoV-2 during the first and second waves of the pandemic in India. Our findings, published in ["Estimating the wave 1 and wave 2 infection fatality rates from SARS-CoV-2 in India"](https://bmcresnotes.biomedcentral.com/articles/10.1186/s13104-021-05652-2), shed light on the varying severity of the pandemic across its different phases in India. Further, we undertook a comprehensive review and meta-analysis of the infection fatality rates of SARS-CoV-2 in India. Our paper, ["SARS-CoV-2 infection fatality rates in India: systematic review, meta-analysis and model-based estimation"](https://journals.sagepub.com/doi/abs/10.1177/23210222211054324), aimed to provide a more accurate estimate of the infection fatality rates. This study not only offered a global and regional prevalence of SARS-CoV-2 infection but also estimated disease severity among COVID-19 vaccinated individuals, thereby contributing to the global understanding of the pandemic's impact. We also wrote a review article titled "COVID-19 Pandemic in India: Through the Lens of Modeling". The article discussed how the pandemic exposed structural barriers and deep-rooted problems with India's societal and public health infrastructure. It identified challenges faced by India - poor healthcare, lack of data, inefficient communication systems, and clear lack of interdisciplinary expertise to address problems posed by these kinds of pandemics. The article concluded by calling for substantial resource allocations and leadership to strengthen the agenda of health security, especially in the control of communicable diseases.

Our work had a substantial impact. Professor Mukherjee gave multiple TV interviews based on our model's predictions, highlighting the severe threat posed by COVID and the most effective policies that would not devastate the economy. We also maintained a dashboard with daily updated predictions at covind19.org, unless it has been taken down after the World Health Organization (WHO) declared COVID-19 as a non-emergency. This dashboard served as a valuable resource for policymakers, healthcare professionals, and the general public, providing them with up-to-date predictions and insights into the pandemic's trajectory.

This research journey was not just about the scientific discoveries and contributions we made. It was also a journey of personal growth and learning. It heightened my awareness of the practical needs and challenges in healthcare, which further piqued my interest in biostatistics. Even though my interests extend beyond the field of biology, I now ensure that my methods are applied and practical. I always try to identify the computational bottlenecks of my methods clearly and strive to make them more accessible to practitioners. Presenting my work to diverse audiences, including healthcare professionals, doctors, and lawmakers, underscored the importance of tailoring my presentations to my audience and ensuring that my work appeals to a broad audience with diverse backgrounds and skillsets.
