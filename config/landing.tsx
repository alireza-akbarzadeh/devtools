import { Icons } from '@/components/shared/icons';
import { InfoLdg } from 'types';

export const infos: InfoLdg[] = [
  {
    title: 'Empower your projects',
    description:
      'Unlock the full potential of your projects with our open-source SaaS platform. Collaborate seamlessly, innovate effortlessly, and scale limitlessly.',
    image: '/images/work-from-home.jpg',
    list: [
      {
        title: 'Collaborative',
        description: 'Work together with your team members in real-time.',
        icon: 'laptop',
      },
      {
        title: 'Innovative',
        description: 'Stay ahead of the curve with access constant updates.',
        icon: 'settings',
      },
      {
        title: 'Scalable',
        description:
          'Our platform offers the scalability needed to adapt to your needs.',
        icon: 'search',
      },
    ],
  },
  {
    title: 'Seamless Integration',
    description:
      'Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.',
    image: '/images/work-from-home.jpg',
    list: [
      {
        title: 'Flexible',
        description:
          'Customize your integrations to fit your unique requirements.',
        icon: 'laptop',
      },
      {
        title: 'Efficient',
        description: 'Streamline your processes and reducing manual effort.',
        icon: 'search',
      },
      {
        title: 'Reliable',
        description:
          'Rely on our robust infrastructure and comprehensive documentation.',
        icon: 'settings',
      },
    ],
  },
];

export const features = [
  {
    icon: 'gauge',
    title: 'User-friendly dashboard',
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundPositionZ: 150,
  },
  {
    icon: 'mousePointerClick',
    title: 'One-click optimization',
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundPositionZ: 135,
  },
  {
    icon: 'sparkles',
    title: 'Smart keyword generator',
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundPositionZ: 177,
  },
];

export const testimonials = [
  {
    name: 'Sarah Chen',
    job: 'Senior Software Architect @ Tesla',
    image: 'https://randomuser.me/api/portraits/women/8.jpg',
    review:
      'The AI-powered analytics have completely transformed how we approach our technical documentation. The insights are incredibly precise and actionable.',
    rating: 3,
  },
  {
    name: 'James Rodriguez',
    job: 'Head of SEO @ Spotify',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    review:
      'Finally, an SEO tool that understands context! The AI suggestions are spot-on, and the real-time analytics have boosted our organic traffic by 156%.',
    rating: 5,
  },
  {
    name: 'Emma Watson',
    job: 'Digital Marketing Lead @ Airbnb',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    review:
      "The predictive analytics feature is a game-changer. We're now able to optimize content before it even goes live.",
    rating: 5,
  },
  {
    name: 'Alex Thompson',
    job: 'CTO @ Stripe',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
    review:
      'Implementing this tool increased our search visibility by 200%. The AI recommendations are incredibly accurate.',
    rating: 3,
  },
  {
    name: 'Mira Patel',
    job: 'Growth Manager @ Notion',
    image: 'https://randomuser.me/api/portraits/women/23.jpg',
    review:
      'The real-time keyword analysis and competitor tracking have given us an edge we never had before. Absolutely essential for modern SEO.',
    rating: 5,
  },
  {
    name: 'David Kim',
    job: 'VP of Engineering @ Vercel',
    image: 'https://randomuser.me/api/portraits/men/41.jpg',
    review:
      'The integration was seamless, and the AI insights have helped us optimize our documentation for maximum visibility. Outstanding tool!',
    rating: 5,
  },
];
