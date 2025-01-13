import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProductCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tryNowLink: string;
}

export default function ProductCard({ icon, title, description, tryNowLink }: ProductCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-black mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href={tryNowLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-blue-600 hover:text-blue-800"
      >
        TRY NOW
        <ArrowRight className="ml-1 w-4 h-4" />
      </a>
    </div>
  );
}