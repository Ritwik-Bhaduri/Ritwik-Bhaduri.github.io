export type PreprintServer = "arxiv" | "biorxiv" | "medrxiv";

export type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  featured?: boolean;
  bibtex: string;
  /** arXiv, bioRxiv, or medRxiv page; shown as a compact preprint badge (hover: “preprint”). */
  preprint?: { href: string; server: PreprintServer };
  /** Publisher / journal landing page (hover: “journal”). */
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
    title: "Conditioning on posterior samples for flexible frequentist goodness-of-fit testing",
    authors: "Ritwik Bhaduri, Aabesh Bhattacharyya, Rina Foygel Barber, Lucas Janson",
    venue: "arXiv",
    year: "2025",
    featured: true,
    preprint: { href: "https://arxiv.org/abs/2511.05281", server: "arxiv" },
    bibtex: `@misc{bhaduri2025conditioning,
  title={Conditioning on posterior samples for flexible frequentist goodness-of-fit testing},
  author={Ritwik Bhaduri and Aabesh Bhattacharyya and Rina Foygel Barber and Lucas Janson},
  year={2025},
  eprint={2511.05281},
  archivePrefix={arXiv},
  primaryClass={stat.ME},
  url={https://arxiv.org/abs/2511.05281}
}`
  },
  {
    title: "Compositional Covariate Importance Testing via Partial Conjunction of Bivariate Hypotheses",
    authors: "Ritwik Bhaduri, Siyuan Ma, Lucas Janson",
    venue: "arXiv",
    year: "2024",
    preprint: { href: "https://arxiv.org/abs/2501.00566", server: "arxiv" },
    bibtex: `@misc{bhaduri2024compositional,
  title={Compositional Covariate Importance Testing via Partial Conjunction of Bivariate Hypotheses},
  author={Ritwik Bhaduri and Siyuan Ma and Lucas Janson},
  year={2024},
  eprint={2501.00566},
  archivePrefix={arXiv},
  primaryClass={stat.ME},
  url={https://arxiv.org/abs/2501.00566}
}`
  },
  {
    title: "Circulating interleukin-8 dynamics parallels disease course and is linked to clinical outcomes in severe COVID-19",
    authors:
      "Ranit D’Rozario, Deblina Raychaudhuri, Purbita Bandopadhyay, Jafar Sarif, Priyanka Mehta, Chinky Shiu Chen Liu, Bishnu Prasad Sinha, Jayasree Roy, Ritwik Bhaduri, Monidipa Das, et al.",
    venue: "Viruses",
    year: "2023",
    journalUrl: "https://doi.org/10.3390/v15020549",
    bibtex: `@article{drozario2023circulating,
  title={Circulating interleukin-8 dynamics parallels disease course and is linked to clinical outcomes in severe COVID-19},
  author={Ranit D'Rozario and Deblina Raychaudhuri and Purbita Bandopadhyay and Jafar Sarif and Priyanka Mehta and Chinky Shiu Chen Liu and Bishnu Prasad Sinha and Jayasree Roy and Ritwik Bhaduri and Monidipa Das and others},
  journal={Viruses},
  year={2023}
}`
  },
  {
    title: "A phase 2 single center open label randomised control trial for convalescent plasma therapy in patients with severe COVID-19",
    authors:
      "Yogiraj Ray, Shekhar Ranjan Paul, Purbita Bandopadhyay, Ranit D’Rozario, Jafar Sarif, Deblina Raychaudhuri, Debaleena Bhowmik, Abhishake Lahiri, Janani Srinivasa Vasudevan, Ranjeet Maurya, et al.",
    venue: "Nature Communications",
    year: "2022",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.11.25.20237883v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1038/s41467-022-28064-7",
    bibtex: `@article{ray2022phase2,
  title={A phase 2 single center open label randomised control trial for convalescent plasma therapy in patients with severe COVID-19},
  author={Yogiraj Ray and Shekhar Ranjan Paul and Purbita Bandopadhyay and Ranit D'Rozario and Jafar Sarif and Deblina Raychaudhuri and Debaleena Bhowmik and Abhishake Lahiri and Janani Srinivasa Vasudevan and Ranjeet Maurya and others},
  journal={Nature Communications},
  year={2022}
}`
  },
  {
    title: "Clinical Trial Subgroup Analyses to Investigate Clinical and Immunological Outcomes of Convalescent Plasma Therapy in Severe COVID-19",
    authors:
      "Deblina Raychaudhuri, Purbita Bandopadhyay, Ranit D’Rozario, Jafar Sarif, Yogiraj Ray, Shekhar Ranjan Paul, Praveen Singh, Kausik Chaudhuri, Ritwik Bhaduri, Rajesh Pandey, et al.",
    venue: "Mayo Clinic Proceedings: Innovations, Quality & Outcomes",
    year: "2022",
    journalUrl: "https://doi.org/10.1016/j.mayocpiqo.2022.09.001",
    bibtex: `@article{raychaudhuri2022clinical,
  title={Clinical Trial Subgroup Analyses to Investigate Clinical and Immunological Outcomes of Convalescent Plasma Therapy in Severe COVID-19},
  author={Deblina Raychaudhuri and Purbita Bandopadhyay and Ranit D'Rozario and Jafar Sarif and Yogiraj Ray and Shekhar Ranjan Paul and Praveen Singh and Kausik Chaudhuri and Ritwik Bhaduri and Rajesh Pandey and others},
  journal={Mayo Clinic Proceedings: Innovations, Quality \& Outcomes},
  year={2022}
}`
  },
  {
    title: "Extending the susceptible-exposed-infected-removed (SEIR) model to handle the false negative rate and symptom-based administration of COVID-19 diagnostic tests: SEIR-fansy",
    authors:
      "Ritwik Bhaduri, Ritoban Kundu, Soumik Purkayastha, Michael Kleinsasser, Lauren J. Beesley, Bhramar Mukherjee, et al.",
    venue: "Statistics in Medicine",
    year: "2022",
    featured: true,
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.09.24.20200238v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1002/sim.9357",
    bibtex: `@article{bhaduri2022seirfansy,
  title={Extending the susceptible-exposed-infected-removed (SEIR) model to handle the false negative rate and symptom-based administration of COVID-19 diagnostic tests: SEIR-fansy},
  author={Ritwik Bhaduri and Ritoban Kundu and Soumik Purkayastha and Michael Kleinsasser and Lauren J. Beesley and Bhramar Mukherjee and others},
  journal={Statistics in Medicine},
  year={2022}
}`
  },
  {
    title: "Rough-Fuzzy CPD: a gradual change point detection algorithm",
    authors: "Ritwik Bhaduri, Subhrajyoty Roy, Sankar K. Pal",
    venue: "Journal of Data, Information and Management",
    year: "2022",
    featured: true,
    preprint: { href: "https://arxiv.org/abs/2010.06370", server: "arxiv" },
    journalUrl: "https://doi.org/10.1007/s42488-022-00077-3",
    bibtex: `@article{bhaduri2022roughfuzzy,
  title={Rough-Fuzzy CPD: a gradual change point detection algorithm},
  author={Ritwik Bhaduri and Subhrajyoty Roy and Sankar K. Pal},
  journal={Journal of Data, Information and Management},
  year={2022}
}`
  },
  {
    title: "A comparison of five epidemiological models for transmission of SARS-CoV-2 in India",
    authors:
      "Soumik Purkayastha, Rupam Bhattacharyya, Ritwik Bhaduri, Ritoban Kundu, Xuelin Gu, Maxwell Salvatore, Debashree Ray, Swapnil Mishra, et al.",
    venue: "BMC Infectious Diseases",
    year: "2021",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.09.19.20198010v2",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1186/s12879-021-06077-9",
    bibtex: `@article{purkayastha2021comparison,
  title={A comparison of five epidemiological models for transmission of SARS-CoV-2 in India},
  author={Soumik Purkayastha and Rupam Bhattacharyya and Ritwik Bhaduri and Ritoban Kundu and Xuelin Gu and Maxwell Salvatore and Debashree Ray and Swapnil Mishra and others},
  journal={BMC Infectious Diseases},
  year={2021}
}`
  },
  {
    title:
      "Author Correction: Incorporating false negative tests in epidemiological models for SARS-CoV-2 transmission and reconciling with seroprevalence estimates",
    authors:
      "Rupam Bhattacharyya, Ritoban Kundu, Ritwik Bhaduri, Debashree Ray, Lauren J. Beesley, Maxwell Salvatore, Bhramar Mukherjee",
    venue: "Scientific Reports",
    year: "2021",
    journalUrl: "https://doi.org/10.1038/s41598-021-96603-1",
    bibtex: `@article{bhattacharyya2021authorcorrection,
  title={Author Correction: Incorporating false negative tests in epidemiological models for {SARS-CoV-2} transmission and reconciling with seroprevalence estimates},
  author={Rupam Bhattacharyya and Ritoban Kundu and Ritwik Bhaduri and Debashree Ray and Lauren J. Beesley and Maxwell Salvatore and Bhramar Mukherjee},
  journal={Scientific Reports},
  volume={11},
  pages={17221},
  year={2021},
  doi={10.1038/s41598-021-96603-1}
}`
  },
  {
    title: "COVID-19 pandemic in India: Through the lens of modeling",
    authors:
      "Giridhara R. Babu, Debashree Ray, Ritwik Bhaduri, Aritra Halder, Ritoban Kundu, Gautam I. Menon, et al.",
    venue: "Global Health: Science and Practice",
    year: "2021",
    journalUrl: "https://doi.org/10.9745/GHSP-D-21-00233",
    bibtex: `@article{babu2021covid,
  title={COVID-19 pandemic in India: Through the lens of modeling},
  author={Giridhara R. Babu and Debashree Ray and Ritwik Bhaduri and Aritra Halder and Ritoban Kundu and Gautam I. Menon and others},
  journal={Global Health: Science and Practice},
  year={2021}
}`
  },
  {
    title: "Estimating the infection fatality rate from SARS-CoV-2 in India",
    authors:
      "Bhramar Mukherjee, Soumik Purkayashtha, Ritoban Kundu, Ritwik Bhaduri, et al.",
    venue: "SSRN",
    year: "2021",
    journalUrl: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3798552",
    bibtex: `@misc{mukherjee2021estimating,
  title={Estimating the infection fatality rate from SARS-CoV-2 in India},
  author={Bhramar Mukherjee and Soumik Purkayashtha and Ritoban Kundu and Ritwik Bhaduri and others},
  year={2021},
  note={Available at SSRN 3798552}
}`
  },
  {
    title: "Estimating the wave 1 and wave 2 infection fatality rates from SARS-CoV-2 in India",
    authors:
      "Soumik Purkayastha, Ritoban Kundu, Ritwik Bhaduri, Daniel Barker, Michael Kleinsasser, Debashree Ray, et al.",
    venue: "BMC Research Notes",
    year: "2021",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2021.05.25.21257823v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1186/s13104-021-05652-2",
    bibtex: `@article{purkayastha2021estimating,
  title={Estimating the wave 1 and wave 2 infection fatality rates from SARS-CoV-2 in India},
  author={Soumik Purkayastha and Ritoban Kundu and Ritwik Bhaduri and Daniel Barker and Michael Kleinsasser and Debashree Ray and others},
  journal={BMC Research Notes},
  year={2021}
}`
  },
  {
    title: "Incorporating false negative tests in epidemiological models for SARS-CoV-2 transmission and reconciling with seroprevalence estimates",
    authors:
      "Rupam Bhattacharyya, Ritoban Kundu, Ritwik Bhaduri, Debashree Ray, Lauren J. Beesley, Maxwell Salvatore, et al.",
    venue: "Scientific Reports",
    year: "2021",
    featured: true,
    journalUrl: "https://doi.org/10.1038/s41598-021-89127-1",
    bibtex: `@article{bhattacharyya2021incorporating,
  title={Incorporating false negative tests in epidemiological models for SARS-CoV-2 transmission and reconciling with seroprevalence estimates},
  author={Rupam Bhattacharyya and Ritoban Kundu and Ritwik Bhaduri and Debashree Ray and Lauren J. Beesley and Maxwell Salvatore and others},
  journal={Scientific Reports},
  year={2021}
}`
  },
  {
    title: "SARS-CoV-2 infection fatality rates in India: systematic review, meta-analysis and model-based estimation",
    authors:
      "Lauren Zimmermann, Subarna Bhattacharya, Soumik Purkayastha, Ritoban Kundu, Ritwik Bhaduri, Parikshit Ghosh, et al.",
    venue: "Studies in Microeconomics",
    year: "2021",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2021.09.08.21263296v1",
      server: "medrxiv"
    },
    journalUrl: "https://doi.org/10.1177/23210222211054324",
    bibtex: `@article{zimmermann2021sars,
  title={SARS-CoV-2 infection fatality rates in India: systematic review, meta-analysis and model-based estimation},
  author={Lauren Zimmermann and Subarna Bhattacharya and Soumik Purkayastha and Ritoban Kundu and Ritwik Bhaduri and Parikshit Ghosh and others},
  journal={Studies in Microeconomics},
  year={2021}
}`
  },
  {
    title: "Reconciling epidemiological models with misclassified case-counts for SARS-CoV-2 with seroprevalence surveys: a case study in Delhi, India",
    authors:
      "Rupam Bhattacharyya, Ritwik Bhaduri, Ritoban Kundu, Maxwell Salvatore, et al.",
    venue: "medRxiv",
    year: "2020",
    preprint: {
      href: "https://www.medrxiv.org/content/10.1101/2020.07.31.20166249v1",
      server: "medrxiv"
    },
    bibtex: `@misc{bhattacharyya2020reconciling,
  title={Reconciling epidemiological models with misclassified case-counts for SARS-CoV-2 with seroprevalence surveys: a case study in Delhi, India},
  author={Rupam Bhattacharyya and Ritwik Bhaduri and Ritoban Kundu and Maxwell Salvatore and others},
  year={2020},
  howpublished={medRxiv}
}`
  },
  {
    title: "Onset detection: A new approach to QBH system",
    authors: "Ritwik Bhaduri, Soham Bonnerjee, Subhrajyoty Roy",
    venue: "arXiv",
    year: "2019",
    preprint: { href: "https://arxiv.org/abs/1908.07409", server: "arxiv" },
    bibtex: `@misc{bhaduri2019onset,
  title={Onset detection: A new approach to QBH system},
  author={Ritwik Bhaduri and Soham Bonnerjee and Subhrajyoty Roy},
  year={2019},
  eprint={1908.07409},
  archivePrefix={arXiv},
  primaryClass={stat.AP},
  url={https://arxiv.org/abs/1908.07409}
}`
  }
];

export const publications: Publication[] = [...publicationsUnsorted].sort(comparePublications);
