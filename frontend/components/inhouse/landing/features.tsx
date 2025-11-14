import { Card } from '@/components/ui/card';
import { ReactNode } from 'react';
import { BookCopy, ChartColumn, CheckCircle2, TrendingUp } from 'lucide-react';

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Powered Generation',
    description: 'Feed in your study material and let our advanced AI create customized quizzes that target your learning needs.',
    icon: <BookCopy />,
  },
  {
    id: 2,
    title: 'Personalized Learning Paths',
    description: 'Tailor your study experience with adaptive quizzes that evolve based on your performance and progress.',
    icon: <ChartColumn />,
  },
  {
    id: 3,
    title: 'Comprehensive Analytics',
    description: 'Track your progress with detailed insights. Identify weak areas and focus your study time effectively.',
    icon: <TrendingUp />,
  },
];

export function Features() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features for Effective Learning
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to master any subject and ace your exams.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <Card
              key={feature.id}
              className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 p-8 hover:border-purple-500 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Check mark */}
              <div className="flex items-center gap-2 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle2 size={18} />
                <span className="text-sm font-medium">Available Now</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            All Features Included in Every Plan
          </h3>
          <p className="text-gray-400">
            No hidden paywalls. Get full access to all features with any subscription tier.
          </p>
        </div>
      </div>
    </section>
  );
}
