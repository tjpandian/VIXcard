import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { 
  Search, 
  Target, 
  Megaphone, 
  Code, 
  Users, 
  Award,
  PenTool,
  Video,
  Briefcase,
  Instagram,
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import Footer from '../components/Footer';

const serviceGrid = [
  { id: 'social-media-marketing', name: 'Social Media Marketing', color: 'bg-black' },
  { id: 'website-development', name: 'Website Development', color: 'bg-purple-600' },
  { id: 'influencer-marketing', name: 'Influencer Marketing', color: 'bg-purple-600' },
  { id: 'branding-strategy', name: 'Branding Strategy', color: 'bg-black' },
  { id: 'seo-services', name: 'SEO Services', color: 'bg-black' },
  { id: 'performance-marketing', name: 'Performance Marketing', color: 'bg-purple-600' },
  { id: 'content-writing', name: 'Content Writing', color: 'bg-purple-600' },
  { id: 'video-production', name: 'Video Production', color: 'bg-black' },
  { id: 'digital-consultancy', name: 'Digital Consultancy', color: 'bg-black' },
  { id: 'instagram-marketing', name: 'Instagram Marketing', color: 'bg-purple-600' }
];

const serviceDetails = {
  'social-media-marketing': {
    icon: <Megaphone className="h-12 w-12" />,
    title: 'Social Media Marketing',
    description: 'Build engaging communities and drive conversions through strategic social media campaigns across all major platforms.',
    whatYouGet: [
      'Content Strategy & Planning',
      'Daily Content Creation',
      'Community Management',
      'Social Media Advertising',
      'Analytics & Reporting',
      'Influencer Collaborations'
    ],
    howWeDo: [
      { title: 'Audit & Strategy', description: 'We analyze your current presence and develop a comprehensive strategy' },
      { title: 'Content Creation', description: 'Our creative team produces engaging content aligned with your brand' },
      { title: 'Community Building', description: 'We engage with your audience and build loyal communities' },
      { title: 'Performance Optimization', description: 'Continuous monitoring and optimization for maximum ROI' }
    ]
  },
  'website-development': {
    icon: <Code className="h-12 w-12" />,
    title: 'Website Development',
    description: 'Custom websites that convert visitors into customers with modern design and cutting-edge functionality.',
    whatYouGet: [
      'Responsive Web Design',
      'E-commerce Integration',
      'SEO Optimization',
      'Performance Optimization',
      'Mobile-First Design',
      'Ongoing Maintenance'
    ],
    howWeDo: [
      { title: 'Discovery & Planning', description: 'Understanding your business goals and user requirements' },
      { title: 'Design & Development', description: 'Creating beautiful, functional websites using latest technologies' },
      { title: 'Testing & Launch', description: 'Thorough testing across devices and browsers before launch' },
      { title: 'Support & Maintenance', description: 'Ongoing support to ensure your website stays updated' }
    ]
  },
  'influencer-marketing': {
    icon: <Users className="h-12 w-12" />,
    title: 'Influencer Marketing',
    description: 'Connect with the right influencers to amplify your brand reach and build authentic credibility.',
    whatYouGet: [
      'Influencer Research & Vetting',
      'Campaign Strategy',
      'Content Collaboration',
      'Performance Tracking',
      'ROI Analysis',
      'Relationship Management'
    ],
    howWeDo: [
      { title: 'Influencer Discovery', description: 'Finding the perfect influencers aligned with your brand values' },
      { title: 'Campaign Planning', description: 'Developing strategic campaigns for maximum impact' },
      { title: 'Content Creation', description: 'Collaborating on authentic, engaging content' },
      { title: 'Performance Analysis', description: 'Measuring success and optimizing future campaigns' }
    ]
  },
  'branding-strategy': {
    icon: <Award className="h-12 w-12" />,
    title: 'Branding Strategy',
    description: 'Create memorable brand identities that resonate with your target audience and stand out in the market.',
    whatYouGet: [
      'Brand Identity Design',
      'Brand Guidelines',
      'Logo & Visual Assets',
      'Brand Voice & Messaging',
      'Market Positioning',
      'Brand Launch Strategy'
    ],
    howWeDo: [
      { title: 'Brand Discovery', description: 'Deep dive into your brand values, mission, and target audience' },
      { title: 'Strategy Development', description: 'Creating comprehensive brand strategies and positioning' },
      { title: 'Visual Identity', description: 'Designing memorable logos and visual brand elements' },
      { title: 'Implementation', description: 'Rolling out your new brand across all touchpoints' }
    ]
  },
  'seo-services': {
    icon: <Search className="h-12 w-12" />,
    title: 'SEO Services',
    description: 'Dominate search results and drive organic traffic with our proven SEO strategies and techniques.',
    whatYouGet: [
      'Technical SEO Audit',
      'Keyword Research',
      'On-Page Optimization',
      'Link Building',
      'Content Optimization',
      'Monthly Reporting'
    ],
    howWeDo: [
      { title: 'SEO Audit', description: 'Comprehensive analysis of your current SEO performance' },
      { title: 'Strategy Development', description: 'Creating data-driven SEO strategies for your goals' },
      { title: 'Implementation', description: 'Executing on-page and off-page optimization techniques' },
      { title: 'Monitoring & Optimization', description: 'Continuous tracking and improvement of rankings' }
    ]
  },
  'performance-marketing': {
    icon: <Target className="h-12 w-12" />,
    title: 'Performance Marketing',
    description: 'Data-driven advertising campaigns that deliver measurable ROI and sustainable business growth.',
    whatYouGet: [
      'PPC Campaign Management',
      'Social Media Advertising',
      'Display Advertising',
      'Conversion Optimization',
      'Analytics & Reporting',
      'Budget Optimization'
    ],
    howWeDo: [
      { title: 'Campaign Strategy', description: 'Developing targeted campaigns based on your objectives' },
      { title: 'Creative Development', description: 'Creating compelling ad creatives that convert' },
      { title: 'Launch & Monitor', description: 'Launching campaigns and monitoring performance' },
      { title: 'Optimize & Scale', description: 'Continuous optimization for better ROI and scaling' }
    ]
  },
  'content-writing': {
    icon: <PenTool className="h-12 w-12" />,
    title: 'Content Writing',
    description: 'Compelling content that engages your audience and drives action across all digital channels.',
    whatYouGet: [
      'Blog Writing',
      'Website Copy',
      'Social Media Content',
      'Email Marketing',
      'SEO Content',
      'Content Strategy'
    ],
    howWeDo: [
      { title: 'Content Audit', description: 'Analyzing your current content and identifying gaps' },
      { title: 'Strategy Planning', description: 'Developing comprehensive content strategies' },
      { title: 'Content Creation', description: 'Writing high-quality, engaging content' },
      { title: 'Performance Tracking', description: 'Measuring content performance and optimization' }
    ]
  },
  'video-production': {
    icon: <Video className="h-12 w-12" />,
    title: 'Video Production',
    description: 'Professional video content that captivates audiences and tells your brand story effectively.',
    whatYouGet: [
      'Video Strategy',
      'Script Writing',
      'Professional Filming',
      'Post-Production',
      'Motion Graphics',
      'Video Marketing'
    ],
    howWeDo: [
      { title: 'Pre-Production', description: 'Planning, scripting, and preparing for production' },
      { title: 'Production', description: 'Professional filming with high-quality equipment' },
      { title: 'Post-Production', description: 'Editing, effects, and finalizing your videos' },
      { title: 'Distribution', description: 'Strategic distribution across relevant channels' }
    ]
  },
  'digital-consultancy': {
    icon: <Briefcase className="h-12 w-12" />,
    title: 'Digital Consultancy',
    description: 'Strategic guidance to navigate the digital landscape and maximize your online potential.',
    whatYouGet: [
      'Digital Strategy',
      'Technology Consultation',
      'Process Optimization',
      'Training & Workshops',
      'Performance Analysis',
      'Growth Planning'
    ],
    howWeDo: [
      { title: 'Assessment', description: 'Comprehensive analysis of your digital maturity' },
      { title: 'Strategy Development', description: 'Creating tailored digital transformation strategies' },
      { title: 'Implementation Planning', description: 'Roadmap for executing digital initiatives' },
      { title: 'Ongoing Support', description: 'Continuous guidance and optimization' }
    ]
  },
  'instagram-marketing': {
    icon: <Instagram className="h-12 w-12" />,
    title: 'Instagram Marketing',
    description: 'Specialized Instagram strategies to grow your following and drive engagement on the platform.',
    whatYouGet: [
      'Instagram Strategy',
      'Content Creation',
      'Stories & Reels',
      'Instagram Ads',
      'Influencer Partnerships',
      'Analytics & Growth'
    ],
    howWeDo: [
      { title: 'Profile Optimization', description: 'Optimizing your Instagram profile for maximum impact' },
      { title: 'Content Strategy', description: 'Developing engaging content calendars' },
      { title: 'Community Engagement', description: 'Building authentic relationships with followers' },
      { title: 'Growth & Analytics', description: 'Tracking growth and optimizing performance' }
    ]
  }
};

function Services() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const element = document.getElementById(location.hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  const scrollToService = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollCards = (containerId, direction) => {
    const container = document.getElementById(containerId);
    if (container) {
      const scrollAmount = 300;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="pt-16">
      {/* Service Overview Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fade-up" className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-['Poppins'] text-purple-600 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions tailored to your business needs
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceGrid.map((service, index) => (
              <AnimatedSection
                key={service.id}
                animation="fade-up"
                delay={index * 100}
              >
                <div
                  onClick={() => scrollToService(service.id)}
                  className={`${service.color} text-white p-8 md:p-12 rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-2xl`}
                >
                  <h2 className="text-2xl md:text-3xl font-bold font-['Poppins'] text-center">
                    {service.name}
                  </h2>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Individual Service Sections */}
      {Object.entries(serviceDetails).map(([serviceId, service], index) => (
        <section
          key={serviceId}
          id={serviceId}
          className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fade-up">
              <div className="text-center mb-16">
                <div className="text-purple-600 flex justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold font-['Poppins'] text-purple-600 mb-4">
                  {service.title}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>

            {/* What You Get */}
            <AnimatedSection animation="fade-up" delay={200} className="mb-16">
              <h3 className="text-2xl font-bold font-['Poppins'] text-black mb-8 text-center">
                What You Get
              </h3>
              <div className="relative">
                <div className="flex items-center mb-4">
                  <button
                    onClick={() => scrollCards(`${serviceId}-cards`, 'left')}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full mr-4 transition-colors"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => scrollCards(`${serviceId}-cards`, 'right')}
                    className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
                <div
                  id={`${serviceId}-cards`}
                  className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {service.whatYouGet.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="flex-shrink-0 bg-white rounded-lg p-6 shadow-lg border border-gray-200 min-w-[280px]"
                    >
                      <div className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
                        <p className="font-semibold text-black">{item}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* How We Do It */}
            <AnimatedSection animation="fade-up" delay={400} className="mb-16">
              <h3 className="text-2xl font-bold font-['Poppins'] text-black mb-8 text-center">
                How We Do It
              </h3>
              <div className="space-y-8">
                {service.howWeDo.map((step, stepIndex) => (
                  <div key={stepIndex} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                      {stepIndex + 1}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-['Poppins'] text-black mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* CTA */}
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="text-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105"
                >
                  Ready to get started? Get a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default Services;