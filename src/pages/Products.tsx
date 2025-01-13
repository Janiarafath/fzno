import React from 'react';
import ProductCard from '../components/ProductCard';
import { BarChart3, Mail, HeadphonesIcon, Users, Briefcase, ShoppingCart, Bus, Building } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

export default function Products() {
  const { user } = useAuth();
  
  const products = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "CRM",
      description: "Comprehensive CRM platform for customer-facing teams.",
      tryNowLink: "https://example.com/crm"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "HR Consultancy",
      description: "Professional HR solutions to make individuals job-ready.",
      tryNowLink: "https://www.fzno.in"
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: "E-commerce",
      description: "Complete e-commerce solution for your business.",
      tryNowLink: "https://centerdrip.com"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Mail",
      description: "Secure email service for teams of all sizes.",
      tryNowLink: "https://example.com/mail"
    },
    {
      icon: <HeadphonesIcon className="w-8 h-8" />,
      title: "Desk",
      description: "Helpdesk software to deliver great customer support.",
      tryNowLink: "https://example.com/desk"
    },
    {
      icon: <Building className="w-8 h-8" />,
      title: "Construction",
      description: "Robust software to streamline construction project management and team collaboration.",
      tryNowLink: "https://example.com/desk"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "People",
      description: "Organize, automate, and simplify your HR processes.",
      tryNowLink: "https://example.com/people"
    },
    {
      icon: <Bus className="w-8 h-8" />,
      title: "Ticket Booking",
      description: "Easily book and manage tickets for events, travel, and more with a seamless user experience.",
      tryNowLink: "https://example.com/people"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome, {user?.displayName}</h1>
          <p className="text-xl text-gray-600">
            Take your pick—we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}