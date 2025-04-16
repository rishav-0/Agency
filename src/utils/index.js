export const nav=['Home','About','Services','Pricing','Testimonials','Blog','Contact']

export const services = [
  {
    icon: "fa-paint-brush", // Font Awesome free icon class for UI/UX Design
    title: "UI/UX Design",
    description: "We provide to quality & unique services",
    learnMoreLink: "#ui-ux", // Replace with actual link
  },
  {
    icon: "fa-code", // Font Awesome free icon class for Web Development
    title: "Web Development",
    description: "Standard work and coding we provide you for your",
    learnMoreLink: "#web-dev", // Replace with actual link
    highlighted: true, // To indicate the lime green background
  },
  {
    icon: "fa-mobile-alt", // Font Awesome free icon class for App Development
    title: "App Development",
    description: "Create your ubest unique App development by our",
    learnMoreLink: "#app-dev", // Replace with actual link
  },
  {
    icon: "fa-chart-line", // Font Awesome free icon class for Digital Marketing
    title: "Digital Marketing",
    description: "Create your ubest unique App development by our",
    learnMoreLink: "#digital-marketing", // Replace with actual link
  },
  {
    icon: "fa-file-alt", // Font Awesome free icon class for Content Writing
    title: "Content Writing",
    description: "We provide to quality & unique services",
    learnMoreLink: "#content-writing", // Replace with actual link
  },
  {
    icon: "fa-shopping-cart", // Font Awesome free icon class for E-commerce
    title: "E-commerce",
    description: "Create your ubest unique App development by our",
    learnMoreLink: "#ecommerce", // Replace with actual link
  },
];

export const monthlyPlans = [
  {
    name: "Basic",
    price: 29.99,
    period: "Per Month",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "Save 40%",
  },
  {
    name: "Professional",
    price: 69.0,
    period: "/3 Month",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "Save 40%",
  },
  {
    name: "Ultimate",
    price: 99.0,
    period: "/12 Month",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "Save 40%",
  },
];


export const yearlyPlans = [
  {
    name: "Basic",
    price: 287.9, // 29.99 * 12 * 0.8 = 287.90 (20% off)
    period: "Per Year",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "20% Save",
  },
  {
    name: "Professional",
    price: 662.4, // 69 * 4 * 0.8 = 662.40 (4 quarters per year)
    period: "Per Year",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "20% Save",
  },
  {
    name: "Ultimate",
    price: 79.2, // 99 * 0.8 = 79.20 (if 1-year plan with 20% off)
    period: "Per Year",
    features: [
      "Unlimited Updates & Projects",
      "Custom Permissions",
      "Custom Infrastructure",
    ],
    discount: "20% Save",
  },
];



export const testimonials = [
  {
    id: 1,
    company: 'amazon',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
    text: 'Really they have given very high quality service, we are very happy. In future we will work with them. We recommend to work with this nice team and expert.',
    name: 'Jane Cooper',
    position: 'Co-Founder amazon',
    avatar: 'https://i.pravatar.cc/40?img=1'
  },
  {
    id: 2,
    company: 'stripe',
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/1200px-Stripe_Logo%2C_revised_2016.svg.png',
    text: 'Really they have given very high quality service, we are very happy. In future we will work with them. We recommend to work with this nice team and expert.',
    name: 'Robert Fox',
    position: 'UI Designer Stripe',
    avatar: 'https://i.pravatar.cc/40?img=2'
  },
  {
    id: 3,
    company: 'payoneer',
    companyLogo: 'data:image/png;base64,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',
    text: 'Really they have given very high quality service, we are very happy. In future we will work with them. We recommend to work with this nice team and expert.',
    name: 'Wade Warren',
    position: 'Co-Founder Payoneer',
    avatar: 'https://i.pravatar.cc/40?img=3'
  }
];


export const blogCards = [
  {
    id: 1,
    date: "23 Jun 2019",
    title: "Where better to go for a delicious coffee?",
    description: "There are many variations of passages Lorem available, but the majority have.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkj0oQA7ge_hHf8JZ_5eqfdnFTgNZDrK2Bw&s", // replace with real image URLs
  },
  {
    id: 2,
    date: "23 Jun 2019",
    title: "Where Better To Go For A Delicious Coffee?",
    description: "There are many variations of passages Lorem available, but the majority have.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkj0oQA7ge_hHf8JZ_5eqfdnFTgNZDrK2Bw&s",
  },
  {
    id: 3,
    date: "23 Jun 2019",
    title: "Where better to go for a delicious coffee?",
    description: "There are many variations of passages Lorem available, but the majority have.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRkj0oQA7ge_hHf8JZ_5eqfdnFTgNZDrK2Bw&s",
  },
];

export const leftFAQs = [
  {
    question: "How can I get help by delta?",
    answer:
      "You can get help by contacting our support team via live chat, email, or the help center within your dashboard.",
  },
  {
    question: "What is the responsibility of delta as a agency with your clients?",
    answer:
      "Delta is committed to delivering high-quality services. We support our clients throughout the project lifecycle and ensure a seamless, collaborative experience.",
  },
  {
    question: "What about the pricing offer & process?",
    answer:
      "Our pricing is flexible based on the service and duration. You can view our plans on the pricing page and choose the one that fits your needs. Custom packages are also available on request.",
  },
  {
    question: "How to create a new account?",
    answer:
      "To create a new account, click on the 'Sign Up' button, enter your details, verify your email, and you'll be all set to go.",
  },
];


export const rightFAQs = [
  {
    question: "How to maintaince user dashboard?",
    answer:
      "The user dashboard can be maintained by updating your personal information, managing your subscriptions, and accessing reports or settings from the dashboard panel.",
  },
  {
    question: "How can I manage my user and their location track?",
    answer:
      "You can manage your users through the admin panel where you can add, remove or update user data. The location tracking feature can be enabled in user settings.",
  },
  {
    question: "What is the system of customers support?",
    answer:
      "We offer multi-channel support including live chat, email, and a dedicated support portal with knowledge base articles and ticket submission.",
  },
  {
    question: "How to open an account in here?",
    answer:
      "Click on 'Get Started' or 'Sign Up', fill in your required information, verify your account, and log in to access the dashboard.",
  },
  {
    question: "Is there any option to get free access?",
    answer:
      "Yes, we offer a limited free plan for new users. You can upgrade anytime to access premium features.",
  },
];
