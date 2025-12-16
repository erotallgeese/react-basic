import React, { useState } from 'react';
import { Cloud, Zap, Globe, CheckCircle } from 'lucide-react';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  const features = [
    { icon: Cloud, title: 'Cloud-Native', desc: 'Built for the cloud' },
    { icon: Zap, title: 'Lightning Fast', desc: 'Optimized performance' },
    { icon: Globe, title: 'Global CDN', desc: 'Worldwide distribution' },
    { icon: CheckCircle, title: 'Auto-Deploy', desc: 'CI/CD integrated' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-indigo-600">Azure Static Web App Demo</h1>
          <p className="text-gray-600 mt-1">React + Azure = ⚡️</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Welcome to Your App!</h2>
          <p className="text-gray-600 mb-6">
            This is a feature-rich demo showcasing React components deployed on Azure Static Web Apps.
          </p>

          {/* Interactive Counter */}
          <div className="bg-indigo-50 rounded-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-indigo-900 mb-4">Interactive Counter</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setCount(count - 1)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                -
              </button>
              <span className="text-4xl font-bold text-indigo-600 w-20 text-center">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              >
                +
              </button>
              <button
                onClick={() => setCount(0)}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition ml-2"
              >
                Reset
              </button>
            </div>
          </div>

          {/* Name Input */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-purple-900 mb-4">Personalized Greeting</h3>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name..."
              className="w-full px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 mb-3"
            />
            {name && (
              <p className="text-xl text-purple-700 font-medium">
                Hello, <span className="text-purple-900 font-bold">{name}</span>! 👋
              </p>
            )}
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-indigo-600 mb-3" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Info Card */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg shadow-lg p-8 text-white">
          <h2 className="text-2xl font-bold mb-3">Ready to Deploy? 🚀</h2>
          <p className="mb-4 opacity-90">
            Push your code to GitHub and let Azure Static Web Apps handle the rest with automatic builds and deployments.
          </p>
          <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6 text-center text-gray-600">
          <p>Built with React ⚛️ • Deployed on Azure ☁️</p>
        </div>
      </footer>
    </div>
  );
}

export default App;