import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

/* ----------------------- Types ----------------------- */
export type BaseStory = {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar: ImagePlaceholder;
  rating: number;
  featured: boolean;
  caseStudy: boolean;
};

export type TestimonialStory = BaseStory & {
  caseStudy: false;
  before?: undefined;
  after?: undefined;
};

export type CaseStudyStory = BaseStory & {
  caseStudy: true;
  before: string;
  after: string;
};

export type Story = TestimonialStory | CaseStudyStory;

/* ----------------------- Navigation ----------------------- */
const allLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/programs', label: 'Programs' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/login', label: 'Login' },
];

export const mainNavLinks = allLinks.filter(link => link.label !== 'Login');
export const loginLink = allLinks.find(link => link.label === 'Login');
export const navLinks = allLinks;

/* ----------------------- Team ----------------------- */
export const teamMembers = [
  {
    name: 'Aakanksha Sharma',
    role: 'Lead PM Mentor & CEO',
    image: PlaceHolderImages.find(img => img.id === 'team-aakanksha') as ImagePlaceholder,
    bio: 'MAANG-experienced coach helping aspiring PMs grow through mindset shifts, strategic thinking, and personalized guidance.',
  },
  {
    name: 'Ajay Kumar',
    role: 'Director',
    image: PlaceHolderImages.find(img => img.id === 'team-ajay') as ImagePlaceholder,
    bio: 'Senior leader with extensive experience in cross-border operational support.',
  },
  {
    name: 'Sebastiano Fuccio',
    role: 'Chief Advisor',
    image: PlaceHolderImages.find(img => img.id === 'team-sebastiano') as ImagePlaceholder,
    bio: 'Swiss founder and global mentor with decades of entrepreneurial and strategic expertise, guiding OPTVSN’s innovation and expansion.',
  },
  {
    name: 'Mritunjay Raj',
    role: 'Lead Video Designer & Data AI Engineer',
    image: PlaceHolderImages.find(img => img.id === 'team-mritunjay') as ImagePlaceholder,
    bio: 'Data science + media production expert, leading video marketing and AI assistant development.',
  },
  {
    name: 'Satya Rao',
    role: 'UX Lead',
    image: PlaceHolderImages.find(img => img.id === 'team-satya') as ImagePlaceholder,
    bio: 'Specialist in learner-centered UX design for intuitive digital learning experiences and AI assistant prototypes.',
  },
  {
    name: 'Anupama S',
    role: 'Founder’s Office',
    image: PlaceHolderImages.find(img => img.id === 'team-anupama') as ImagePlaceholder,
    bio: 'Hands-on generalist supporting strategy, operations, and execution to keep teams aligned and moving smoothly.',
  },
  {
    name: 'Sujeet Kumar',
    role: 'Legal Representative',
    image: PlaceHolderImages.find(img => img.id === 'team-sujeet') as ImagePlaceholder,
    bio: 'A startup-focused legal advisor specializing in contracts, IP, and compliance, Sujeet ensures OPTVSN’s legal infrastructure supports scalable growth.',
  },
];

/* ----------------------- Testimonials ----------------------- */
export const testimonials: Story[] = [
  {
    quote: 'The standout element for me was the development of the elevator pitch...',
    name: 'Sebastiano Fuccio',
    role: 'Startup Founder',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-7') as ImagePlaceholder,
    rating: 5,
    featured: true,
    caseStudy: false, // ✅ removed before/after
  },
  {
    quote: 'Although it was only 2 sessions...',
    name: 'Anupam Raj',
    role: 'Landed PM Offer from India to UK',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-1') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: true,
    before: 'Seeking UK Role',
    after: 'Landed PM Offer',
  },
  {
    quote: 'The guidance on how to prepare and increased my confidence...',
    name: 'Abhishek Raj',
    role: 'Mid-career PM',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-5') as ImagePlaceholder,
    rating: 4,
    featured: false,
    caseStudy: true,
    before: 'Lacked Confidence',
    after: 'Interview Ready',
  },
  {
    quote: 'She\'ll help you to really break down the approach...',
    name: 'Samarth Goyal',
    role: 'Cracked PM Interview in just 1 Session',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-8') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: true,
    before: 'Last-minute Prep',
    after: 'Cracked Interview',
  },
  {
    quote: 'The training was very well planned...',
    name: 'Deepti S',
    role: 'Aspiring PM',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-2') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: false,
  },
  {
    quote: 'OPTVSN is very thorough...',
    name: 'Tony',
    role: 'Strategic Business Executive',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-3') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: false,
  },
  {
    quote: 'The training was very well planned...',
    name: 'Zarreen',
    role: 'Aspiring PM',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-4') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: false,
  },
  {
    quote: 'Aakanksha is highly competent...',
    name: 'Mrinalini',
    role: 'Aspiring PM',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-6') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: false,
  },
  {
    quote: 'Had the pleasure of reconnecting...',
    name: 'Sai Swetha',
    role: 'Student in US University',
    company: 'N/A',
    avatar: PlaceHolderImages.find(img => img.id === 'testimonial-avatar-9') as ImagePlaceholder,
    rating: 5,
    featured: false,
    caseStudy: false,
  },
];


export const pricingData = {
  totalPrograms: 12,
  categories: {
    packages: 3,
    services: 7,
    institutions: 2,
  },
  pricingPlans: [
    {
      name: 'All-in-One PM Transformation',
      type: 'Package',
      tagline: 'Future-Ready AI PM Leadership: Real Corporate Experience. Complete Skillset. 17 Weeks to Launch.',
      ideal_for: 'Ideal for: Ambitious PMs seeking elite-level transformation with AI specialization & real-world validation',
      prices: {
        inr: '₹49,999',
        usd: '$899',
        gbp: '£799',
        eur: '€849',
      },
      features: [
        '22+ live sessions + 3 weeks real corporate PM role',
        'Everything in PM Real-World Mastery + AI PM Specialization',
        'Complete foundation + real corporate experience + validation',
        'Master AI/ML fundamentals, LLMs, GenAI, and MLOps',
        'Build end-to-end AI products from strategy to deployment',
        'Direct hire opportunity + Industry connections',
      ],
      cta: 'Enroll in All-in-One Program',
      comparison: {
        duration: '12–16 weeks',
        sessions: '22',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: true,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'PM Career Foundation',
      type: 'Package',
      tagline: 'Complete PM transformation in 10–13 weeks with proven frameworks, hands-on deliverables, and flexible 1–2 hour weekly sessions.',
      ideal_for: 'Ideal for: Aspiring PMs and career switchers ready for their first PM role.',
      prices: {
        inr: '₹29,999',
        usd: '$699',
        gbp: '£599',
        eur: '€649',
      },
      features: [
        'Master CEO mindset & strategic thinking',
        '8 Strategic + 6 Technical PM sessions',
        'Resume, portfolio & LinkedIn optimization',
        '3 live AI product case studies',
        'Interview prep & mock interviews included',
      ],
      cta: 'Start Foundation Track',
      comparison: {
        duration: '10–13 weeks',
        sessions: '14',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: true,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'PM Real World Mastery',
      type: 'Package',
      tagline: 'Complete PM transformation with validated real-world experience in 13–16 weeks, including 3 weeks of actual corporate PM work.',
      ideal_for: 'Ideal for: Career switchers who need corporate validation and hands-on experience.',
      prices: {
        inr: '₹39,999',
        usd: '$799',
        gbp: '£699',
        eur: '€749',
      },
      features: [
        'Everything in PM Career Foundation',
        '3 weeks embedded in real company PM role',
        'Experience certificate + LinkedIn recommendation',
        'Weekly mentorship during corporate stint',
        'Potential direct hire opportunity',
      ],
      cta: 'Explore Real World Track',
      comparison: {
        duration: '13–16 weeks',
        sessions: '16',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: true,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'Job Ready PM Package',
      type: 'Service',
      tagline: 'Fast-track in 4 weeks — Resume to Interview Ready.',
      ideal_for: 'Ideal for: Job seekers who need to sharpen their interview skills.',
      prices: {
        inr: '₹10,999',
        usd: '$320',
        gbp: '£256',
        eur: '€296',
      },
      features: [
        '8 Live 1-on-1 Sessions',
        'Resume Rewrite (2 drafts) + LinkedIn Rewrite',
        'Notion Portfolio Finalization',
        'Behavioral + Technical Interview Prep',
        '2 Live Case Study Drills (Choose from 25)',
      ],
      cta: 'Start Job-Ready Track',
      comparison: {
        duration: '4 weeks',
        sessions: '8',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: true,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'Strategic PM Training',
      type: 'Service',
      tagline: 'Think Like a CEO — Not Just a Task Manager.',
      ideal_for: 'Ideal for: Mid-career PMs aiming for leadership roles.',
      prices: {
        inr: '₹14,999',
        usd: '$320',
        gbp: '£256',
        eur: '€296',
      },
      features: [
        '8 Live 1-hr Sessions + Bonus Q&A',
        'Product Vision + Roadmap Creation',
        'Insider Frameworks to Align Stakeholders',
        'Case Study: Virtual PM Assistant',
      ],
      cta: 'Enroll in Strategic PM Training',
      comparison: {
        duration: 'Varies',
        sessions: '8',
        resume_linkedin: false,
        case_studies: true,
        portfolio: false,
        mock_interviews: false,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'Technical PM Training',
      type: 'Service',
      tagline: 'Fluency with Execution — Even Without a Tech Background.',
      ideal_for: 'Ideal for: Non-technical PMs wanting to improve execution.',
      prices: {
        inr: '₹5,999',
        usd: '$240',
        gbp: '£192',
        eur: '€222',
      },
      features: [
        '6 Live 1-hr Sessions',
        'Agile, Scrum, OKRs, RAID Logs, Sprint Rituals',
        'Hands-on Tools: GitHub Projects & ProductBoard',
        'Roadmap Creation + GenAI/ML Product Toolkit',
      ],
      cta: 'Join Technical PM Training',
      comparison: {
        duration: 'Varies',
        sessions: '6',
        resume_linkedin: false,
        case_studies: false,
        portfolio: false,
        mock_interviews: false,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'Becoming an AI PM',
      type: 'Service',
      tagline: 'Master AI Product Strategy, ML Fundamentals & Responsible AI in 8 Weeks.',
      ideal_for: 'Ideal for: PMs ready to specialize in AI/ML and capture the highest-paying PM roles.',
      prices: {
        inr: '₹12,999',
        usd: '$449',
        gbp: '£299',
        eur: '€349',
      },
      features: [
        'AI product strategy & vision creation',
        'ML fundamentals & model selection',
        'AI UX design & responsible AI ethics',
        'MLOps & model deployment',
        'Live AI product case study (end-to-end)',
      ],
      cta: 'Enroll in AI PM Track',
      comparison: {
        duration: '8 weeks',
        sessions: '8',
        resume_linkedin: false,
        case_studies: true,
        portfolio: false,
        mock_interviews: false,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'PM Case Study Practice',
      type: 'Service',
      tagline: 'From Theory to Action — Build Strategic PM Confidence.',
      ideal_for: 'Ideal for: Anyone preparing for case study interviews.',
      prices: {
        inr: '₹5,497',
        usd: '$115',
        gbp: '£90',
        eur: '€100',
      },
      features: [
        '1:1 Case Study Session with Guided Feedback',
        'Frameworks + Storytelling Techniques',
        'Custom Prep Handout for Independent Study',
        'Insights from 10+ Years of MAANG PM Experience',
      ],
      cta: 'Start Case Study Training',
      comparison: {
        duration: '1 Session',
        sessions: '1',
        resume_linkedin: false,
        case_studies: true,
        portfolio: false,
        mock_interviews: false,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'PM Try & Buy',
      type: 'Service',
      tagline: '3 Weeks Embedded in a Real Company PM Role with Mentorship & Experience Certificate.',
      ideal_for: 'Ideal for: PMs wanting to test-drive a real PM role before committing full-time.',
      prices: {
        inr: '₹9,999',
        usd: '$349',
        gbp: '£249',
        eur: '€289',
      },
      features: [
        '3-week corporate PM role immersion',
        '3 live mentorship sessions during program',
        'Experience certificate + LinkedIn recommendation',
        'Real deliverables & measurable impact',
        'Potential direct hire opportunity',
      ],
      cta: 'Apply for PM Try & Buy',
      comparison: {
        duration: '3 weeks',
        sessions: '3',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: false,
        group_cohort: false,
        corporate: true,
      },
    },
    {
      name: 'PM 1:1 Mentorship',
      type: 'Service',
      tagline: 'Pay per session — Get focused help where you need it.',
      ideal_for: 'Ideal for: Professionals needing targeted advice.',
      prices: {
        inr: '₹1,499/hr',
        usd: '$40/hr',
        gbp: '£32/hr',
        eur: '€37/hr',
      },
      features: [
        'Resume / LinkedIn / Portfolio Reviews',
        'Mock Interviews (Behavioral, Technical, Case)',
        'PM Skill Deep Dives (OKRs, Agile, GenAI, Tools)',
        'Stakeholder Storytelling & Job Strategy Coaching',
      ],
      cta: 'Book a Session',
      comparison: {
        duration: '1 hour',
        sessions: '1',
        resume_linkedin: true,
        case_studies: true,
        portfolio: true,
        mock_interviews: true,
        group_cohort: false,
        corporate: false,
      },
    },
    {
      name: 'Corporate Training',
      type: 'Institution',
      tagline: 'Tailored Group Training for Teams — Strategic PM Skills in 2 Days.',
      ideal_for: 'Ideal for: Companies looking to upskill their product teams.',
      prices: {
        inr: '₹200,000 total (~₹20,000/person)',
        usd: '$6400 total ($640/person)',
        gbp: '£5120 total (£512/person)',
        eur: '€5900 total (€590/person)',
      },
      features: [
        '16 Hours of Training (2 Days)',
        'Customized Content from Pre-Survey',
        'Hands-On Case Studies',
        'Post-Training Survey & Skill Maturity Assessment',
      ],
      cta: 'Request Corporate Training',
      comparison: {
        duration: '2 Days',
        sessions: 'N/A',
        resume_linkedin: false,
        case_studies: true,
        portfolio: false,
        mock_interviews: false,
        group_cohort: false,
        corporate: true,
      },
    },
    {
      name: 'University Training',
      type: 'Institution',
      tagline: 'Affordable PM Bootcamp for University Students.',
      ideal_for: 'Ideal for: Universities & student organizations seeking quality PM education.',
      prices: {
        contact: true,
        note: 'Contact for Pricing',
      },
      features: [
        '16 hours of comprehensive PM training',
        'Industry-expert led sessions & case studies',
        'Affordable group rates for student organizations',
        'Certificate of completion for all participants',
      ],
      cta: 'Request University Training',
      comparison: {
        duration: '16 hours',
        sessions: 'N/A',
        resume_linkedin: false,
        case_studies: true,
        portfolio: false,
        mock_interviews: false,
        group_cohort: true,
        corporate: false,
      },
    },
  ],
};


/* ----------------------- Program Previews ----------------------- */
export type PricingPlan = {
  name: string;
  type: string;
  tagline: string;
  ideal_for: string;
  prices: {
    inr?: string;
    usd?: string;
    gbp?: string;
    eur?: string;
    contact?: boolean;
    note?: string;
  };
  features: string[];
  cta: string;
  comparison: {
    duration: string;
    sessions: string;
    resume_linkedin: boolean;
    case_studies: boolean;
    portfolio: boolean;
    mock_interviews: boolean;
    group_cohort: boolean;
    corporate: boolean;
  };
};

export const pricingPlans: PricingPlan[] = pricingData.pricingPlans;

export const programPreviews = pricingPlans.slice(0, 4).map((plan) => ({
  name: plan.name,
  description: plan.tagline,
  href: `/programs#${plan.name.toLowerCase().replace(/ /g, '-')}`,
}));



export const blogPosts = [
  {
    slug: 'the-art-of-product-discovery',
    title: 'The Art of Product Discovery: Uncovering User Needs',
    author: 'Aakanksha Sharma',
    date: '2024-05-15',
    image: PlaceHolderImages.find(img => img.id === 'blog-post-1') as ImagePlaceholder,
    excerpt: 'Product discovery is the foundation of building successful products. Learn how to effectively uncover and validate user needs before writing a single line of code.',
    content: `
<p>Product discovery is a crucial, yet often overlooked, phase in the product development lifecycle. It's the process of deeply understanding your customers' problems to ensure you're building a solution they truly need and will pay for. This phase is not about building; it's about learning.</p>
<h3>Key Activities in Product Discovery:</h3>
<ul>
  <li><strong>User Interviews:</strong> Talk to your target users to gain empathy and uncover their pain points and motivations.</li>
  <li><strong>Surveys:</strong> Gather quantitative data to validate assumptions and identify trends across a larger user base.</li>
  <li><strong>Competitor Analysis:</strong> Understand the existing solutions and identify gaps in the market.</li>
  <li><strong>Prototyping & Testing:</strong> Create low-fidelity prototypes to test your ideas with users and gather feedback early and often.</li>
</ul>
<p>By investing time in product discovery, you significantly reduce the risk of building the wrong product, saving your team time, money, and frustration. It shifts the focus from outputs (features) to outcomes (solving real user problems).</p>
    `,
  },
  {
    slug: 'mastering-the-pm-interview',
    title: 'Mastering the PM Interview: Acing the Case Study',
    author: 'Aakanksha Sharma',
    date: '2024-05-22',
    image: PlaceHolderImages.find(img => img.id === 'blog-post-2') as ImagePlaceholder,
    excerpt: 'The product management case study interview can be daunting. We break down a structured approach to help you shine and land your dream job.',
    content: `
<p>The case study is a cornerstone of the product management interview process. It's designed to test your product sense, problem-solving skills, and communication abilities in a simulated, real-world scenario. While there's no single "right" answer, a structured approach can help you navigate the ambiguity and showcase your strengths.</p>
<h3>A Framework for Success:</h3>
<ol>
  <li><strong>Clarify and Define:</strong> Start by asking clarifying questions to understand the problem, the business goals, and any constraints. Define the scope and what success looks like.</li>
  <li><strong>Identify Users and Pain Points:</strong> Who are the target users? What are their core problems or needs? Create user personas if it helps.</li>
  <li><strong>Brainstorm Solutions:</strong> Generate a wide range of potential solutions. Don't self-censor at this stage; think big.</li>
  <li><strong>Prioritize and Select:</strong> Evaluate your solutions against the goals and constraints. Use a framework like RICE (Reach, Impact, Confidence, Effort) to prioritize. Select a solution and justify your choice.</li>
  <li><strong>Define and Measure Success:</strong> How will you know if your solution is successful? Define key metrics and how you'll track them.</li>
</ol>
<p>Remember to think out loud and bring the interviewer along on your thought process. Communication is as important as the solution itself.</p>
    `,
  },
  {
    slug: 'building-a-product-roadmap',
    title: 'Building a Product Roadmap Everyone Understands',
    author: 'Aakanksha Sharma',
    date: '2024-05-29',
    image: PlaceHolderImages.find(img => img.id === 'blog-post-3') as ImagePlaceholder,
    excerpt: 'A great product roadmap aligns your team and stakeholders. Learn how to create a strategic, outcome-focused roadmap that communicates your vision.',
    content: `
<p>A product roadmap is more than just a list of features and timelines. It's a strategic communication tool that articulates the 'why' behind what you're building. A well-crafted roadmap aligns your entire organization, from engineering to marketing, around a shared vision and set of goals.</p>
<h3>Moving from Features to Themes:</h3>
<p>Instead of listing specific features, group your work into strategic themes or goals. For example, instead of "Add social login," a theme might be "Improve User Onboarding." This approach has several benefits:</p>
<ul>
  <li><strong>Focuses on Outcomes:</strong> It keeps the conversation centered on the value you're delivering to users and the business, rather than on specific outputs.</li>
  <li><strong>Provides Flexibility:</strong> It gives the development team the autonomy to find the best solution to achieve the goal, rather than being locked into a specific feature.</li>
  <li><strong>Easier for Stakeholders to Understand:</strong> High-level themes are more digestible for non-technical stakeholders than a long list of features.</li>
</ul>
<p>Your roadmap should be a living document, regularly updated as you learn more from your customers and the market. By keeping it strategic and outcome-focused, you create a powerful tool for alignment and inspiration.</p>
    `,
  },
];



