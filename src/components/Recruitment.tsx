import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Recruitment() {
  return (
    <section className="py-16 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Miss Bloom Global National Director Recruitment</h2>
        <h3 className="text-xl text-center text-purple-600 mb-8">Become a Part of Our Global Movement</h3>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Responsibilities</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Recruit and select national representatives
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Organize national pageants
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Develop marketing strategies
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Collaborate with the international team
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h4 className="text-xl font-bold mb-4">Benefits</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Be part of a global movement
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Develop leadership skills
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Network with professionals
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Enjoy exclusive incentives
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
          <h4 className="text-xl font-bold mb-4 text-center">How to Apply</h4>
          <div className="space-y-4">
            <p className="flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              <a href="mailto:missbloomglobal@gmail.com" className="text-purple-600 hover:text-purple-800">
                missbloomglobal@gmail.com
              </a>
            </p>
            <p className="flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              WhatsApp: +233598725709
            </p>
            <p className="text-center font-semibold">
              Application Deadline: April 30th, 2025
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}