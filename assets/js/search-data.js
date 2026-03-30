// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-code",
          title: "code",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/code/";
          },
        },{id: "news-our-r01-proposal-titled-engineering-durable-immunity-by-optimizing-hiv-vaccine-parameters-to-drive-long-lived-plasma-cell-development-was-funded-by-niaid",
          title: 'Our R01 proposal titled Engineering durable immunity by optimizing HIV vaccine parameters to...',
          description: "",
          section: "News",},{id: "news-a-curriculum-learning-approach-to-training-antibody-language-models-was-published-in-plos-computational-biology",
          title: 'A curriculum learning approach to training antibody language models was published in PLoS...',
          description: "",
          section: "News",},{id: "news-data-optimal-scaling-of-paired-antibody-language-models-was-accepted-at-neurips-2025-ai-for-science-workshop",
          title: 'Data-optimal scaling of paired antibody language models was accepted at NeurIPS 2025 AI...',
          description: "",
          section: "News",},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%62%72%69%6E%65%79@%73%63%72%69%70%70%73.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/brineylab", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0001-9535-2866", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=0NJmqu0AAAAJ", "_blank");
        },
      },];
