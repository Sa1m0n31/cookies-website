const topMenu = [
  {
    link: '#',
    label: 'Learn more'
  },
  {
    link: '#',
    label: 'Pricing'
  },
  {
    link: '#',
    label: 'Contact'
  },
  {
    link: '#',
    label: 'Join'
  }
];

const heroListItems = ['GDPR', 'CCPA', 'DMA', 'LGPD', 'POPIA'];

const videoSectionGrid = [
  {
    icon: '/chat-icon.svg',
    title: 'Consultation',
    content: 'We begin with a deep dive into your current cookie strategy and identify key areas for improvement.'
  },
  {
    icon: '/implementation-icon.svg',
    title: 'Implementation',
    content: 'Our experts handle the setup and integration, providing a seamless transition to full compliance'
  },
  {
    icon: '/support-icon.svg',
    title: 'Support',
    content: 'Benefit from our continuous monitoring and updates, keeping your website compliant with evolving regulations.'
  }
]

const footerMenu = [
  {
    link: '#',
    label: 'Learn more'
  },
  {
    link: '#',
    label: 'Pricing'
  },
  {
    link: '#',
    label: 'Contact'
  },
  {
    link: '#',
    label: 'Privacy policy'
  },
  {
    link: '#',
    label: 'Legal notice'
  }
]

const plans = [
  {
    title: "Basic",
    subtitle: "For small business and startups",
    price: "$10",
    link: "#",
    points: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    theme: {
      primary: "#FFFFFF",
      secondary: "#F1EEED",
      textPrimary: "#000000",
      textSecondary: "#5B5B5B",
      button: "#E50013",
      textButton: "#FFFFFF",
      checkIcon: "/check-black.svg",
      buttonIcon: "/button-arrow.svg",
    },
  },
  {
    title: "Premium",
    subtitle: "For medium business with growing traffic",
    price: "$40",
    link: "#",
    points: [
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
      "Lorem ipsum dolor sit amet",
    ],
    theme: {
      primary: "#E50013",
      secondary: "#CA2B2B",
      textPrimary: "#FFFFFF",
      textSecondary: "#FCBBBB",
      button: "#FFFFFF",
      textButton: "#F76060",
      checkIcon: "/check-white.svg",
      buttonIcon: "/arrow-right-pink.svg",
    },
  },
];

const questions = [
  {
    question: 'Etiam risus urna odio donec tellus massa nec dis?',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Neque justo volutpat eleifend elementum.',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Orci amet quam augue tellus viverra ante.',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Amet lacus dictum id nisi volutpat',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  },
  {
    question: 'Et proin vel tellus mauris est aliquam',
    answer: 'Aliquam tristique sed vulputate amet. Amet a orci nunc risus scelerisque varius placerat bibendum tristique. Ut pharetra non eu in cras ullamcorper viverra ac malesuada. Venenatis proin non magna ullamcorper nec adipiscing condimentum. Lacus semper dignissim nisl lectus id vulputate elementum mauris leo.'
  }
];

const gdprGridItems = [
  {
    icon: '/data-protection.svg',
    title: 'Data Protection',
    content: 'GDPR safeguards personal data against unauthorized access and misuse'
  },
  {
    icon: '/global-impact.svg',
    title: 'Global Impact',
    content: 'Affects any website accessed by EU residents, regardless of location.'
  },
  {
    icon: '/data-protection.svg',
    title: 'Data Protection',
    content: 'GDPR safeguards personal data against unauthorized access and misuse'
  },
  {
    icon: '/global-impact.svg',
    title: 'Global Impact',
    content: 'Affects any website accessed by EU residents, regardless of location.'
  }
];

const gdprParagraphs = [
  {
    title: 'The Essence of GDPR',
    content: `At its core, GDPR is about giving individuals more control over their personal data. This means that websites must ensure transparent data collection, secure handling of personal information, and respect for users' privacy rights. Non-compliance can lead to significant penalties, making GDPR an issue that no website oner can afford to overlook.`
  },
  {
    title: 'Impact on Your Website',
    content: `Your website is more than a business card; it's a data hub. From cookies to contact forms, every interaction potentially involves personal data. Under GDPR, it's your responsibility to ensure that this data is handled lawfully and ethically. This includes obtaining explicit consent for cookies, which are often used for everything from analytics to personalization.`
  },
  {
    title: 'How Can You Ensure Compliance?',
    content: `Staying compliant can seem daunting, but this is where our service comes into play. We specialize in analyzing websites for GDPR compliance, particularly focusing on cookie management. Our automated tools can scan your website, identify areas that fall short of GDPR standards, and provide you with a detailed report.`
  }
]

export { topMenu, heroListItems, plans, questions, videoSectionGrid,
        footerMenu, gdprGridItems, gdprParagraphs }