export type PreprintServer = "arxiv" | "biorxiv" | "medrxiv";

export type Publication = {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: string;
  abstract?: string;
  featured?: boolean;
  bibtex: string;
  /** arXiv, bioRxiv, or medRxiv page; shown as a compact preprint badge (hover: "preprint"). */
  preprint?: { href: string; server: PreprintServer };
  /** Publisher / journal landing page (hover: "journal"). */
  journalUrl?: string;
  links?: { label: string; href: string }[];
};

/** Newest year first; within a year, alphabetical by title (Google Scholar–style ordering by date). */
function comparePublications(a: Publication, b: Publication): number {
  const yDiff = parseInt(b.year, 10) - parseInt(a.year, 10);
  if (yDiff !== 0) return yDiff;
  return a.title.localeCompare(b.title);
}

const publicationsUnsorted: Publication[] = [
  {
    slug: "bhaduri2025conditioning",
    title: "Conditioning on posterior samples for flexible frequentist goodness-of-fit testing",
    authors: "Ritwik Bhaduri, Aabesh Bhattacharyya, Rina Foygel Barber, Lucas Janson",
    venue: "arXiv",
    year: "2025",
    featured: true,
    abstract:
      "Tests of goodness of fit are used in nearly every domain where statistics is applied. One powerful and flexible approach is to sample artificial data sets that are exchangeable with the real data under the null hypothesis (but not under the alternative), as this allows the analyst to conduct a valid test using any test statistic they desire. Such sampling is typically done by conditioning on either an exact or approximate sufficient statistic, but existing methods for doing so have significant limitations, which either preclude their use or substantially reduce their power or computational tractability for many important models. In this paper, we propose to condition on samples from a Bayesian posterior distribution, which constitute a very different type of approximate sufficient statistic than those considered in prior work. Our approach, approximately co-sufficient sampling via Bayes (aCSS-B), considerably expands the scope of this flexible type of goodness-of-fit testing. We prove the approximate validity of the resulting test, and demonstrate its utility on three common null models where no existing methods apply, as well as its outperformance on models where existing methods do apply.",
    preprint: { href: "https://arxiv.org/abs/2511.05281", server: "arxiv" },
    bibtex: `@misc{bhaduri2025conditioning,
  title={Conditioning on posterior samples for flexible frequentist goodness-of-fit testing},
  author={Ritwik Bhaduri and Aabesh Bhattacharyya and Rina Foygel Barber and Lucas Janson},
  year={2025},
  eprint={2511.05281},
  archivePrefix={arXiv},
  primaryClass={stat.ME},
  url={https://arxiv.org/abs/2511.05281},
  abstract={Tests of goodness of fit are used in nearly every domain where statistics is applied. One powerful and flexible approach is to sample artificial data sets that are exchangeable with the real data under the null hypothesis (but not under the alternative), as this allows the analyst to conduct a valid test using any test statistic they desire. Such sampling is typically done by conditioning on either an exact or approximate sufficient statistic, but existing methods for doing so have significant limitations, which either preclude their use or substantially reduce their power or computational tractability for many important models. In this paper, we propose to condition on samples from a Bayesian posterior distribution, which constitute a very different type of approximate sufficient statistic than those considered in prior work. Our approach, approximately co-sufficient sampling via Bayes (aCSS-B), considerably expands the scope of this flexible type of goodness-of-fit testing. We prove the approximate validity of the resulting test, and demonstrate its utility on three common null models where no existing methods apply, as well as its outperformance on models where existing methods do apply.}
}`
  },
  {
    slug: "bhaduri2024compositional",
    title: "Compositional Covariate Importance Testing via Partial Conjunction of Bivariate Hypotheses",
    authors: "Ritwik Bhaduri, Siyuan Ma, Lucas Janson",
    venue: "arXiv",
    year: "2024",
    abstract:
      "Compositional data (i.e., data comprising random variables that sum up to a constant) arises in many applications including microbiome studies, chemical ecology, political science, and experimental designs. Yet when compositional data serve as covariates in a regression, the sum constraint renders every covariate automatically conditionally independent of the response given the other covariates, since each covariate is a deterministic function of the others. Since essentially all covariate importance tests and variable selection methods, including parametric ones, are at their core testing conditional independence, they are all completely powerless on regression problems with compositional covariates. In fact, compositionality causes ambiguity in the very notion of relevant covariates. To address this problem, we identify a natural way to translate the typical notion of relevant covariates to the setting with compositional covariates and establish that it is intuitive, well-defined, and unique. We then develop corresponding hypothesis tests and controlled variable selection procedures via a novel connection with bivariate conditional independence testing and partial conjunction hypothesis testing. Finally, we provide theoretical guarantees of the validity of our methods, and through numerical experiments demonstrate that our methods are not only valid but also powerful across a range of data-generating scenarios.",
    preprint: { href: "https://arxiv.org/abs/2501.00566", server: "arxiv" },
    bibtex: `@misc{bhaduri2024compositional,
  title={Compositional Covariate Importance Testing via Partial Conjunction of Bivariate Hypotheses},
  author={Ritwik Bhaduri and Siyuan Ma and Lucas Janson},
  year={2024},
  eprint={2501.00566},
  archivePrefix={arXiv},
  primaryClass={stat.ME},
  url={https://arxiv.org/abs/2501.00566},
  abstract={Compositional data (i.e., data comprising random variables that sum up to a constant) arises in many applications including microbiome studies, chemical ecology, political science, and experimental designs. Yet when compositional data serve as covariates in a regression, the sum constraint renders every covariate automatically conditionally independent of the response given the other covariates, since each covariate is a deterministic function of the others. Since essentially all covariate importance tests and variable selection methods, including parametric ones, are at their core testing conditional independence, they are all completely powerless on regression problems with compositional covariates. In fact, compositionality causes ambiguity in the very notion of relevant covariates. To address this problem, we identify a natural way to translate the typical notion of relevant covariates to the setting with compositional covariates and establish that it is intuitive, well-defined, and unique. We then develop corresponding hypothesis tests and controlled variable selection procedures via a novel connection with bivariate conditional independence testing and partial conjunction hypothesis testing. Finally, we provide theoretical guarantees of the validity of our methods, and through numerical experiments demonstrate that our methods are not only valid but also powerful across a range of data-generating scenarios.}
}`
  },
  {
    slug: "drozario2023circulating",
    title: "Circulating interleukin-8 dynamics parallels disease course and is linked to clinical outcomes in severe COVID-19",
    authors:
      "Ranit D'Rozario, Deblina Raychaudhuri, Purbita Bandopadhyay, Jafar Sarif, Priyanka Mehta, Chinky Shiu Chen Liu, Bishnu Prasad Sinha, Jayasree Roy, Ritwik Bhaduri, Monidipa Das, et al.",
    venue: "Viruses",
    year: "2023",
    abstract:
      "Severe COVID-19 frequently features a systemic deluge of cytokines. Circulating cytokines that can stratify risks are useful for more effective triage and management. Here, we ran a machine-learning algorithm on a dataset of 36 plasma cytokines in a cohort of severe COVID-19 to identify cytokine/s useful for describing the dynamic clinical state in multiple regression analysis. We performed RNA-sequencing of circulating blood cells collected at different time-points. From a Bayesian Information Criterion analysis, a combination of interleukin-8 (IL-8), Eotaxin, and Interferon-γ (IFNγ) was found to be significantly linked to blood oxygenation over seven days. Individually testing the cytokines in receiver operator characteristics analyses identified IL-8 as a strong stratifier for clinical outcomes. Circulating IL-8 dynamics paralleled disease course. We also revealed key transitions in immune transcriptome in patients stratified for circulating IL-8 at three time-points. The study identifies plasma IL-8 as a key pathogenic cytokine linking systemic hyper-inflammation to the clinical outcomes in COVID-19.",
    journalUrl: "https://doi.org/10.3390/v15020549",
    bibtex: `@article{drozario2023circulating,
  title={Circulating interleukin-8 dynamics parallels disease course and is linked to clinical outcomes in severe COVID-19},
  author={Ranit D'Rozario and Deblina Raychaudhuri and Purbita Bandopadhyay and Jafar Sarif and Priyanka Mehta and Chinky Shiu Chen Liu and Bishnu Prasad Sinha and Jayasree Roy and Ritwik Bhaduri and Monidipa Das and others},
  journal={Viruses},
  year={2023},
  abstract={Severe COVID-19 frequently features a systemic deluge of cytokines. Circulating cytokines that can stratify risks are useful for more effective triage and management. Here, we ran a machine-learning algorithm on a dataset of 36 plasma cytokines in a cohort of severe COVID-19 to identify cytokine/s useful for describing the dynamic clinical state in multiple regression analysis. We performed RNA-sequencing of circulating blood cells collected at different time-points. From a Bayesian Information Criterion analysis, a combination of interleukin-8 (IL-8), Eotaxin, and Interferon-gamma (IFNgamma) was found to be significantly linked to blood oxygenation over seven days. Individually testing the cytokines in receiver operator characteristics analyses identified IL-8 as a strong stratifier for clinical outcomes. Circulating IL-8 dynamics paralleled disease course. We also revealed key transitions in immune transcriptome in patients stratified for circulating IL-8 at three time-points. The study identifies plasma IL-8 as a key pathogenic cytokine linking systemic hyper-inflammation to the clinical outcomes in COVID-19.}
}`
  },
  {
    slug: "ray2022phase2",
    title: "A phase 2 single center open label randomised control trial for convalescent plasma therapy in patients with severe COVID-19",
    authors:
      "Yogiraj Ray, Shekhar Ranjan Paul, Purbita Bandopadhyay, Ranit D'Rozario, Jafar Sarif, Deblina Raychaudhuri, Debaleena Bhowmik, Abhishake Lahiri, Janani Srinivasa Vasudevan, Ranjeet Maurya, et al.",
    venue: "Nature Communications",
    year: "2022",
    abstract:
      "A single center open label phase 2 randomised control trial (Clinical Trial Registry of India No. CTRI/2020/05/025209) was done to assess clinical and immunological benefits of passive immunization using convalescent plasma therapy. At the Infectious Diseases and Beleghata General Hospital in Kolkata, India, 80 patients hospitalized with severe COVID-19 disease were recruited and randomized into either standard of care (SOC, N = 40) or convalescent plasma therapy (CPT, N = 40). Primary outcomes were all-cause mortality by day 30 of enrolment and immunological correlates of response to therapy, for which plasma abundance of a large panel of cytokines was quantitated before and after intervention. The trial found that all-cause mortality was not significantly different among severe COVID-19 patients with ARDS randomized to the two treatment arms (Mantel-Haenszel Hazard Ratio 0.6731, 95% CI 0.3010–1.505, P = 0.3424). No adverse effect was reported with CPT. In severe COVID-19 patients with mild or moderate ARDS no significant clinical benefit was registered in this clinical trial with convalescent plasma therapy in terms of prespecified outcomes.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.11.25.20237883v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1038/s41467-022-28064-7",
    bibtex: `@article{ray2022phase2,
  title={A phase 2 single center open label randomised control trial for convalescent plasma therapy in patients with severe COVID-19},
  author={Yogiraj Ray and Shekhar Ranjan Paul and Purbita Bandopadhyay and Ranit D'Rozario and Jafar Sarif and Deblina Raychaudhuri and Debaleena Bhowmik and Abhishake Lahiri and Janani Srinivasa Vasudevan and Ranjeet Maurya and others},
  journal={Nature Communications},
  year={2022},
  doi={10.1038/s41467-022-28064-7},
  abstract={A single center open label phase 2 randomised control trial (Clinical Trial Registry of India No. CTRI/2020/05/025209) was done to assess clinical and immunological benefits of passive immunization using convalescent plasma therapy. At the Infectious Diseases and Beleghata General Hospital in Kolkata, India, 80 patients hospitalized with severe COVID-19 disease were recruited and randomized into either standard of care (SOC, N = 40) or convalescent plasma therapy (CPT, N = 40). Primary outcomes were all-cause mortality by day 30 of enrolment and immunological correlates of response to therapy. The trial found that all-cause mortality was not significantly different among severe COVID-19 patients with ARDS randomized to the two treatment arms (Mantel-Haenszel Hazard Ratio 0.6731, 95% CI 0.3010-1.505, P = 0.3424). No adverse effect was reported with CPT. In severe COVID-19 patients with mild or moderate ARDS no significant clinical benefit was registered in this clinical trial with convalescent plasma therapy in terms of prespecified outcomes.}
}`
  },
  {
    slug: "raychaudhuri2022clinical",
    title: "Clinical Trial Subgroup Analyses to Investigate Clinical and Immunological Outcomes of Convalescent Plasma Therapy in Severe COVID-19",
    authors:
      "Deblina Raychaudhuri, Purbita Bandopadhyay, Ranit D'Rozario, Jafar Sarif, Yogiraj Ray, Shekhar Ranjan Paul, Praveen Singh, Kausik Chaudhuri, Ritwik Bhaduri, Rajesh Pandey, et al.",
    venue: "Mayo Clinic Proceedings: Innovations, Quality & Outcomes",
    year: "2022",
    abstract:
      "A series of subclass analyses were performed on previously published outcome data and accompanying clinical metadata from a completed randomized controlled trial (CTRI/2020/05/025209) assessing clinical and immunological benefits of convalescent plasma therapy (CPT). Although the primary clinical outcomes were not significantly different in the RCT across all age groups, significant immediate mitigation of hypoxia, reduction in hospital stay, and significant survival benefit were registered in younger patients (under 67 years of age) with severe COVID-19 and acute respiratory distress syndrome on receiving CPT. In addition to neutralizing the antibody content of convalescent plasma, its anti-inflammatory proteome, by attenuation of the systemic cytokine deluge, significantly contributed to the clinical benefits of CPT. Subgroup analyses revealed that clinical benefits of CPT in severe COVID-19 are linked to the anti-inflammatory protein content of convalescent plasma apart from the anti-SARS-CoV-2 neutralizing antibody content.",
    journalUrl: "https://doi.org/10.1016/j.mayocpiqo.2022.09.001",
    bibtex: `@article{raychaudhuri2022clinical,
  title={Clinical Trial Subgroup Analyses to Investigate Clinical and Immunological Outcomes of Convalescent Plasma Therapy in Severe COVID-19},
  author={Deblina Raychaudhuri and Purbita Bandopadhyay and Ranit D'Rozario and Jafar Sarif and Yogiraj Ray and Shekhar Ranjan Paul and Praveen Singh and Kausik Chaudhuri and Ritwik Bhaduri and Rajesh Pandey and others},
  journal={Mayo Clinic Proceedings: Innovations, Quality \& Outcomes},
  year={2022},
  doi={10.1016/j.mayocpiqo.2022.09.001},
  abstract={A series of subclass analyses were performed on previously published outcome data and accompanying clinical metadata from a completed randomized controlled trial assessing clinical and immunological benefits of convalescent plasma therapy (CPT). Although the primary clinical outcomes were not significantly different in the RCT across all age groups, significant immediate mitigation of hypoxia, reduction in hospital stay, and significant survival benefit were registered in younger patients with severe COVID-19 and acute respiratory distress syndrome on receiving CPT. Subgroup analyses revealed that clinical benefits of CPT in severe COVID-19 are linked to the anti-inflammatory protein content of convalescent plasma apart from the anti-SARS-CoV-2 neutralizing antibody content.}
}`
  },
  {
    slug: "bhaduri2022seirfansy",
    title: "Extending the susceptible-exposed-infected-removed (SEIR) model to handle the false negative rate and symptom-based administration of COVID-19 diagnostic tests: SEIR-fansy",
    authors:
      "Ritwik Bhaduri, Ritoban Kundu, Soumik Purkayastha, Michael Kleinsasser, Lauren J. Beesley, Bhramar Mukherjee, et al.",
    venue: "Statistics in Medicine",
    year: "2022",
    featured: true,
    abstract:
      "False negative rates of diagnostic tests for SARS-CoV-2, together with selection bias due to prioritized testing, can result in inaccurate modeling of COVID-19 transmission dynamics based on reported case counts. We propose an extension of the widely used Susceptible-Exposed-Infected-Removed (SEIR) model that accounts for misclassification error and selection bias, and derive an analytic expression for the basic reproduction number R₀ as a function of false negative rates of the diagnostic tests and selection probabilities for getting tested. Analyzing data from the first two waves of the pandemic in India, we show that correcting for misclassification and selection leads to more accurate prediction in a test sample. We provide estimates of undetected infections and deaths between April 1, 2020 and August 31, 2021. At the end of the first wave in India, the estimated under-reporting factor for cases was 11.1 (95% CI: 10.7, 11.5) and for deaths 3.58 (95% CI: 3.5, 3.66) as of February 1, 2021, changing to 19.2 (95% CI: 17.9, 19.9) and 4.55 (95% CI: 4.32, 4.68) as of July 1, 2021. Extensive simulation studies demonstrate the effect of misclassification and selection on estimation of R₀ and prediction of future infections. An R-package SEIRfansy is developed for broader dissemination.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.09.24.20200238v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1002/sim.9357",
    bibtex: `@article{bhaduri2022seirfansy,
  title={Extending the susceptible-exposed-infected-removed ({SEIR}) model to handle the false negative rate and symptom-based administration of {COVID}-19 diagnostic tests: {SEIR-fansy}},
  author={Ritwik Bhaduri and Ritoban Kundu and Soumik Purkayastha and Michael Kleinsasser and Lauren J. Beesley and Bhramar Mukherjee and others},
  journal={Statistics in Medicine},
  year={2022},
  doi={10.1002/sim.9357},
  abstract={False negative rates of diagnostic tests for SARS-CoV-2, together with selection bias due to prioritized testing, can result in inaccurate modeling of COVID-19 transmission dynamics based on reported case counts. We propose an extension of the widely used SEIR model that accounts for misclassification error and selection bias, and derive an analytic expression for the basic reproduction number R0 as a function of false negative rates of the diagnostic tests and selection probabilities for getting tested. Analyzing data from the first two waves of the pandemic in India, we show that correcting for misclassification and selection leads to more accurate prediction in a test sample. An R-package SEIRfansy is developed for broader dissemination.}
}`
  },
  {
    slug: "bhaduri2022roughfuzzy",
    title: "Rough-Fuzzy CPD: a gradual change point detection algorithm",
    authors: "Ritwik Bhaduri, Subhrajyoty Roy, Sankar K. Pal",
    venue: "Journal of Data, Information and Management",
    year: "2022",
    featured: true,
    abstract:
      "Changepoint detection is the problem of finding abrupt or gradual changes in time series data when the distribution of the time series changes significantly. There are many sophisticated statistical algorithms for solving changepoint detection, although there is not much work devoted towards gradual changepoints as compared to abrupt ones. Here we present a new approach to solve changepoint detection using fuzzy rough set theory which is able to detect such gradual changepoints. An expression for the rough-fuzzy estimate of changepoints is derived along with its mathematical properties concerning fast computation. In a statistical hypothesis testing framework, asymptotic distribution of the proposed statistic on both single and multiple changepoints is derived under the null hypothesis enabling multiple changepoint detection. Extensive simulation studies have been performed to investigate how crude statistical measures of disparity can be used to improve efficiency in estimation of gradual changepoints. The rough-fuzzy estimate is robust to signal-to-noise ratio, high degree of fuzziness in true changepoints, and hyper parameter values. Simulation studies reveal that the proposed method beats other fuzzy methods and also popular crisp methods like WBS, PELT and BOCD in detecting gradual changepoints. The applicability of the estimate is demonstrated using multiple real-life datasets including Covid-19. We have developed the Python package 'roufcp' for broader dissemination of the methods.",
    preprint: { href: "https://arxiv.org/abs/2010.06370", server: "arxiv" },
    journalUrl: "https://doi.org/10.1007/s42488-022-00077-3",
    bibtex: `@article{bhaduri2022roughfuzzy,
  title={Rough-Fuzzy {CPD}: a gradual change point detection algorithm},
  author={Ritwik Bhaduri and Subhrajyoty Roy and Sankar K. Pal},
  journal={Journal of Data, Information and Management},
  year={2022},
  doi={10.1007/s42488-022-00077-3},
  abstract={Changepoint detection is the problem of finding abrupt or gradual changes in time series data when the distribution of the time series changes significantly. Here we present a new approach to solve changepoint detection using fuzzy rough set theory which is able to detect such gradual changepoints. An expression for the rough-fuzzy estimate of changepoints is derived along with its mathematical properties concerning fast computation. Simulation studies reveal that the proposed method beats other fuzzy methods and also popular crisp methods like WBS, PELT and BOCD in detecting gradual changepoints. We have developed the Python package 'roufcp' for broader dissemination of the methods.}
}`
  },
  {
    slug: "purkayastha2021comparison",
    title: "A comparison of five epidemiological models for transmission of SARS-CoV-2 in India",
    authors:
      "Soumik Purkayastha, Rupam Bhattacharyya, Ritwik Bhaduri, Ritoban Kundu, Xuelin Gu, Maxwell Salvatore, Debashree Ray, Swapnil Mishra, et al.",
    venue: "BMC Infectious Diseases",
    year: "2021",
    abstract:
      "Many popular disease transmission models have helped nations respond to the COVID-19 pandemic by informing decisions about pandemic planning, resource allocation, implementation of social distancing measures, lockdowns, and other non-pharmaceutical interventions. We study how five epidemiological models forecast and assess the course of the pandemic in India: a baseline curve-fitting model, an extended SIR (eSIR) model, two extended SEIR (SAPHIRE and SEIR-fansy) models, and a semi-mechanistic Bayesian hierarchical model (ICM). Using COVID-19 case-recovery-death count data reported in India from March 15 to October 15, 2020, we generate predictions from each of the five models from October 16 to December 31, 2020, and compare prediction accuracy with respect to reported cumulative and active case counts and death counts. For cumulative case counts, SMAPE values range from 2.25% (SAPHIRE) to 6.89% (baseline). Three models also return total (reported + unreported) cumulative case counts: the SEIR-fansy model yields an underreporting factor of 7.25 and the ICM model yields 4.54 for cumulative cases as of October 31, 2020. Overall, the SEIR-fansy model appeared to be a good choice with a publicly available R-package and desired flexibility plus accuracy.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.09.19.20198010v2",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1186/s12879-021-06077-9",
    bibtex: `@article{purkayastha2021comparison,
  title={A comparison of five epidemiological models for transmission of {SARS-CoV-2} in India},
  author={Soumik Purkayastha and Rupam Bhattacharyya and Ritwik Bhaduri and Ritoban Kundu and Xuelin Gu and Maxwell Salvatore and Debashree Ray and Swapnil Mishra and others},
  journal={BMC Infectious Diseases},
  year={2021},
  doi={10.1186/s12879-021-06077-9},
  abstract={We study how five epidemiological models forecast and assess the course of the COVID-19 pandemic in India: a baseline curve-fitting model, an extended SIR (eSIR) model, two extended SEIR (SAPHIRE and SEIR-fansy) models, and a semi-mechanistic Bayesian hierarchical model (ICM). Using COVID-19 case-recovery-death count data reported in India from March 15 to October 15, 2020, we generate predictions and compare prediction accuracy. For cumulative case counts, SMAPE values range from 2.25% (SAPHIRE) to 6.89% (baseline). Overall, the SEIR-fansy model appeared to be a good choice with a publicly available R-package and desired flexibility plus accuracy.}
}`
  },
  {
    slug: "babu2021covid",
    title: "COVID-19 pandemic in India: Through the lens of modeling",
    authors:
      "Giridhara R. Babu, Debashree Ray, Ritwik Bhaduri, Aritra Halder, Ritoban Kundu, Gautam I. Menon, et al.",
    venue: "Global Health: Science and Practice",
    year: "2021",
    abstract:
      "India has devised innovative strategies to reduce the spread of COVID-19 within the constraints of a low-resource setting, while also making some questionable policy decisions. In this commentary, as a team of public health data scientists engaged in modeling the pandemic since early 2020, we reflect on India's journey over the past year, examining the landscape of epidemiological models, the challenges of mismeasured case and death counts, lessons from the Indian experience for public health and data infrastructure, and implications that can be globally valuable.",
    journalUrl: "https://doi.org/10.9745/GHSP-D-21-00233",
    bibtex: `@article{babu2021covid,
  title={{COVID}-19 pandemic in India: Through the lens of modeling},
  author={Giridhara R. Babu and Debashree Ray and Ritwik Bhaduri and Aritra Halder and Ritoban Kundu and Gautam I. Menon and others},
  journal={Global Health: Science and Practice},
  year={2021},
  doi={10.9745/GHSP-D-21-00233},
  abstract={India has devised innovative strategies to reduce the spread of COVID-19 within the constraints of a low-resource setting, while also making some questionable policy decisions. In this commentary, as a team of public health data scientists engaged in modeling the pandemic since early 2020, we reflect on India's journey over the past year, examining the landscape of epidemiological models, the challenges of mismeasured case and death counts, and lessons for public health and data infrastructure that can be globally valuable.}
}`
  },
  {
    slug: "mukherjee2021estimating",
    title: "Estimating the infection fatality rate from SARS-CoV-2 in India",
    authors:
      "Bhramar Mukherjee, Soumik Purkayashtha, Ritoban Kundu, Ritwik Bhaduri, et al.",
    venue: "SSRN",
    year: "2021",
    abstract:
      "There has been much discussion and debate around the underreporting of COVID-19 infections and deaths in India. In this short report we first estimate this underreporting factor for infections from publicly available data released by the Indian Council of Medical Research from national seroprevalence surveys. We then use a rigorous compartmental epidemiologic model to estimate the undetected number of infections and deaths. Both estimates qualitatively show that there is a large degree of 'covert infections' in India, with model-based estimated underreporting factor for infections as 11.11 (95% CI 10.71–11.47) and for deaths as 3.56 (95% CI 3.48–3.64). This implies approximately 91% of infections and 72% of deaths related to COVID-19 remain unreported in India. These estimates enable us to calculate the infection fatality rate (IFR) for India: if we rely on only reported deaths the IFR estimate is 0.13%, while taking underreporting of deaths into account, the IFR estimate is 0.46%. There is considerable variation in these estimates across states.",
    journalUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3798552",
    bibtex: `@misc{mukherjee2021estimating,
  title={Estimating the infection fatality rate from {SARS-CoV-2} in India},
  author={Bhramar Mukherjee and Soumik Purkayashtha and Ritoban Kundu and Ritwik Bhaduri and others},
  year={2021},
  note={Available at SSRN 3798552},
  doi={10.2139/ssrn.3798552},
  abstract={There has been much discussion and debate around the underreporting of COVID-19 infections and deaths in India. We estimate the underreporting factor for infections from national seroprevalence surveys and use a rigorous compartmental epidemiologic model to estimate the undetected number of infections and deaths. Model-based estimated underreporting factor for infections is 11.11 (95% CI 10.71-11.47) and for deaths is 3.56 (95% CI 3.48-3.64), implying approximately 91% of infections and 72% of deaths remain unreported. The infection fatality rate for India is estimated at 0.13% based on reported deaths and 0.46% when accounting for death underreporting.}
}`
  },
  {
    slug: "purkayastha2021estimating",
    title: "Estimating the wave 1 and wave 2 infection fatality rates from SARS-CoV-2 in India",
    authors:
      "Soumik Purkayastha, Ritoban Kundu, Ritwik Bhaduri, Daniel Barker, Michael Kleinsasser, Debashree Ray, et al.",
    venue: "BMC Research Notes",
    year: "2021",
    abstract:
      "There has been much discussion and debate around the underreporting of COVID-19 infections and deaths in India. We first estimate the underreporting factor for infections from publicly available data released by the Indian Council of Medical Research on reported number of cases and national seroprevalence surveys. We then use a compartmental epidemiologic model to estimate the undetected number of infections and deaths across two periods: the first wave (April 1, 2020–January 31, 2021) and part of the second wave (February 1–May 15, 2021). Both wave estimates show a large degree of covert infections, with model-based estimated underreporting factor for infections as 11.11 (95% CrI 10.71–11.47) and for deaths as 3.56 (95% CrI 3.48–3.64) for wave 1. For wave 2, underreporting factors escalate to 26.77 (95% CrI 24.26–28.81) for infections and 5.77 (95% CrI 5.34–6.15) for deaths. Combining waves 1 and 2, as of May 15, 2021, estimated total infections stand at 491 million (36% of the population) and deaths at 1.21 million, yielding an estimated combined infection fatality rate of 0.25%.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2021.05.25.21257823v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1186/s13104-021-05652-2",
    bibtex: `@article{purkayastha2021estimating,
  title={Estimating the wave 1 and wave 2 infection fatality rates from {SARS-CoV-2} in India},
  author={Soumik Purkayastha and Ritoban Kundu and Ritwik Bhaduri and Daniel Barker and Michael Kleinsasser and Debashree Ray and others},
  journal={BMC Research Notes},
  year={2021},
  doi={10.1186/s13104-021-05652-2},
  abstract={We estimate the underreporting factor for COVID-19 infections and deaths in India using a compartmental epidemiologic model across two waves: wave 1 (April 1, 2020-January 31, 2021) and part of wave 2 (February 1-May 15, 2021). Model-based estimated underreporting factor for infections is 11.11 (95% CrI 10.71-11.47) for wave 1 and 26.77 (95% CrI 24.26-28.81) for wave 2. Combining waves 1 and 2, estimated total infections stand at 491 million (36% of the population) with a combined IFR of 0.25%.}
}`
  },
  {
    slug: "bhattacharyya2021incorporating",
    title: "Incorporating false negative tests in epidemiological models for SARS-CoV-2 transmission and reconciling with seroprevalence estimates",
    authors:
      "Rupam Bhattacharyya, Ritoban Kundu, Ritwik Bhaduri, Debashree Ray, Lauren J. Beesley, Maxwell Salvatore, Bhramar Mukherjee",
    venue: "Scientific Reports",
    year: "2021",
    featured: true,
    abstract:
      "Susceptible-Exposed-Infected-Removed (SEIR)-type epidemiologic models, modeling unascertained infections latently, can predict unreported cases and deaths assuming perfect testing. We apply a method to account for the high false negative rates of diagnostic RT-PCR tests for detecting an active SARS-CoV-2 infection in a classic SEIR model. The number of unascertained cases and false negatives being unobservable in a real study, population-based serosurveys can help validate model projections. Applying our method to training data from Delhi, India, during March 15–June 30, 2020, we estimate the underreporting factor for cases at 34–53 (deaths: 8–13) on July 10, 2020, largely consistent with the findings of the first round of serosurveys for Delhi (June 27–July 10, 2020) with an estimated 22.86% IgG antibody prevalence, yielding estimated underreporting factors of 30–42 for cases. Together, these imply approximately 96–98% of cases in Delhi remained unreported. Updated calculations yield estimated underreporting factors for cases at 13–22 (deaths: 3–7) on January 23, 2021, consistent with the fifth round of serosurveys for Delhi with an estimated 56.13% IgG antibody prevalence. Such model-based estimates provide a viable alternative to repeated resource-intensive serosurveys for tracking unreported cases and deaths.",
    journalUrl: "https://doi.org/10.1038/s41598-021-89127-1",
    bibtex: `@article{bhattacharyya2021incorporating,
  title={Incorporating false negative tests in epidemiological models for {SARS-CoV-2} transmission and reconciling with seroprevalence estimates},
  author={Rupam Bhattacharyya and Ritoban Kundu and Ritwik Bhaduri and Debashree Ray and Lauren J. Beesley and Maxwell Salvatore and Bhramar Mukherjee},
  journal={Scientific Reports},
  year={2021},
  doi={10.1038/s41598-021-89127-1},
  abstract={SEIR-type epidemiologic models can predict unreported cases and deaths assuming perfect testing. We apply a method to account for the high false negative rates of diagnostic RT-PCR tests for SARS-CoV-2 in a classic SEIR model and validate projections against population-based serosurveys for Delhi, India. Applying our method to training data from Delhi (March 15-June 30, 2020), we estimate the underreporting factor for cases at 34-53 (deaths: 8-13), consistent with the first round of serosurveys with 22.86% IgG antibody prevalence. Such model-based estimates provide a viable alternative to resource-intensive serosurveys for tracking unreported cases and deaths.}
}`
  },
  {
    slug: "zimmermann2021sars",
    title: "SARS-CoV-2 infection fatality rates in India: systematic review, meta-analysis and model-based estimation",
    authors:
      "Lauren Zimmermann, Subarna Bhattacharya, Soumik Purkayastha, Ritoban Kundu, Ritwik Bhaduri, Parikshit Ghosh, et al.",
    venue: "Studies in Microeconomics",
    year: "2021",
    abstract:
      "We synthesize the existing literature on the true SARS-CoV-2 excess deaths and infection fatality rates (IFR) in India through a systematic review followed by meta-analysis. Following PRISMA guidelines, databases PubMed, Embase, Global Index Medicus, and preprint servers were searched on July 3, 2021. Altogether, 4,765 initial citations were screened, resulting in 37 citations included in the narrative review and 19 studies with 41 datapoints included in the quantitative synthesis. Underreporting factors (URF) for cases (from serosurveys) range from 14.3–29.1 across four nationwide serosurveys; URFs for deaths (from excess death reports) range from 4.4–11.9, with cumulative excess deaths ranging from 1.79–4.9 million as of June 2021. Nationwide pooled IFR estimates are 0.097% (95% CI: 0.067–0.140) based on reported deaths and 0.365%–0.485% (95% CI: 0.264–0.685) when accounting for death underreporting. We also provide updated epidemiological model-based estimates using an extension of the SEIR model with data from April 1, 2020 to June 30, 2021, which largely reconcile with the empirical findings.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2021.09.08.21263296v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1177/23210222211054324",
    bibtex: `@article{zimmermann2021sars,
  title={{SARS-CoV-2} infection fatality rates in India: systematic review, meta-analysis and model-based estimation},
  author={Lauren Zimmermann and Subarna Bhattacharya and Soumik Purkayastha and Ritoban Kundu and Ritwik Bhaduri and Parikshit Ghosh and others},
  journal={Studies in Microeconomics},
  year={2021},
  doi={10.1177/23210222211054324},
  abstract={We synthesize the existing literature on SARS-CoV-2 infection fatality rates (IFR) in India through systematic review and meta-analysis. Nationwide pooled IFR estimates are 0.097% (95% CI: 0.067-0.140) based on reported deaths and 0.365%-0.485% when accounting for death underreporting. Underreporting factors for cases range from 14.3-29.1 across four nationwide serosurveys; for deaths they range from 4.4-11.9, with cumulative excess deaths of 1.79-4.9 million as of June 2021. Updated SEIR model-based estimates largely reconcile with the empirical findings.}
}`
  },
  {
    slug: "bhattacharyya2020reconciling",
    title: "Reconciling epidemiological models with misclassified case-counts for SARS-CoV-2 with seroprevalence surveys: a case study in Delhi, India",
    authors:
      "Rupam Bhattacharyya, Ritwik Bhaduri, Ritoban Kundu, Maxwell Salvatore, et al.",
    venue: "medRxiv",
    year: "2020",
    abstract:
      "Underreporting of COVID-19 cases and deaths is a hindrance to correctly modeling and monitoring the pandemic. This is primarily due to limited testing, lack of reporting infrastructure, and a large number of asymptomatic infections. In addition, diagnostic tests (RT-PCR tests for detecting current infection) and serological antibody tests for IgG (to assess past infections) are imperfect—in particular, the diagnostic tests have a high false negative rate. Epidemiologic models with a latent compartment for unascertained infections like the SEIR model can provide predictions for unreported cases and deaths under certain assumptions. In this paper, we develop a method to account for high false negative rates in RT-PCR in an extension to the classic SEIR model. We apply this method to Delhi, the national capital region of India, obtaining estimates of the underreporting factor for cases at 34–53 times and for deaths at 8–13 times. Based on a recently released serological survey for Delhi with an estimated 22.86% seroprevalence, we compute adjusted estimates of the true number of infections, yielding an underreporting factor for cases from 30–42, implying approximately 96–98% of cases in Delhi remained unreported.",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.07.31.20166249v1",
      server: "medrxiv"
    },
    bibtex: `@misc{bhattacharyya2020reconciling,
  title={Reconciling epidemiological models with misclassified case-counts for {SARS-CoV-2} with seroprevalence surveys: a case study in Delhi, India},
  author={Rupam Bhattacharyya and Ritwik Bhaduri and Ritoban Kundu and Maxwell Salvatore and others},
  year={2020},
  howpublished={medRxiv},
  doi={10.1101/2020.07.31.20166249},
  abstract={Underreporting of COVID-19 cases and deaths is a hindrance to correctly modeling and monitoring the pandemic. We develop a method to account for high false negative rates in RT-PCR in an extension to the classic SEIR model, applying it to Delhi, India. We obtain estimates of the underreporting factor for cases at 34-53 times and for deaths at 8-13 times, largely consistent with the first round of serosurveys for Delhi with an estimated 22.86% seroprevalence, implying approximately 96-98% of cases in Delhi remained unreported.}
}`
  },
  {
    slug: "bhaduri2019onset",
    title: "Onset detection: A new approach to QBH system",
    authors: "Ritwik Bhaduri, Soham Bonnerjee, Subhrajyoty Roy",
    venue: "arXiv",
    year: "2019",
    abstract:
      "Query by Humming (QBH) is a system to provide a user with the song(s) which the user hums to the system. Current QBH methods require the extraction of onset and pitch information in order to track similarity with various versions of different songs. However, we here focus on detecting precise onsets only and use them to build a QBH system which is better than existing methods in terms of speed and memory, and empirically in terms of accuracy. We also provide statistical analogy for onset detection functions and provide a measure of error in our algorithm.",
    preprint: { href: "https://arxiv.org/abs/1908.07409", server: "arxiv" },
    bibtex: `@misc{bhaduri2019onset,
  title={Onset detection: A new approach to {QBH} system},
  author={Ritwik Bhaduri and Soham Bonnerjee and Subhrajyoty Roy},
  year={2019},
  eprint={1908.07409},
  archivePrefix={arXiv},
  primaryClass={stat.AP},
  url={https://arxiv.org/abs/1908.07409},
  abstract={Query by Humming (QBH) is a system to provide a user with the song(s) which the user hums to the system. Current QBH methods require the extraction of onset and pitch information in order to track similarity with various versions of different songs. We focus on detecting precise onsets only and use them to build a QBH system which is better than existing methods in terms of speed and memory, and empirically in terms of accuracy. We also provide statistical analogy for onset detection functions and provide a measure of error in our algorithm.}
}`
  }
];

export const publications: Publication[] = [...publicationsUnsorted].sort(comparePublications);
