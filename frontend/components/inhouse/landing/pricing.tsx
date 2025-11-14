import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';

interface PricingTier {
  id: number;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    id: 1,
    name: 'Starter',
    price: 0,
    period: 'forever',
    description: 'Perfect for trying out Quiz AI',
    features: [
      'Up to 5 study decks',
      '100 questions per month',
      'Basic analytics',
      'Community support',
      'Access on web only',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    id: 2,
    name: 'Pro',
    price: 9.99,
    period: 'month',
    description: 'For serious learners and students',
    features: [
      'Unlimited study decks',
      'Unlimited questions',
      'Advanced analytics',
      'Priority email support',
      'Offline access',
      'Custom study paths',
      'Export to PDF',
      'Ad-free experience',
    ],
    popular: true,
    cta: 'Start Free Trial',
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 299,
    period: 'year',
    description: 'For educators and institutions',
    features: [
      'Everything in Pro',
      'Team management',
      'Custom branding',
      'API access',
      'Dedicated account manager',
      'Advanced reporting',
      'SSO integration',
      'SLA support',
    ],
    popular: false,
    cta: 'Contact Sales',
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your learning journey. No hidden fees, cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier) => (
            <Card
              key={tier.id}
              className={`relative overflow-hidden transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-br from-purple-900 to-slate-900 border-purple-500 shadow-2xl shadow-purple-500/20 lg:scale-105'
                  : 'bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:border-slate-600'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tier name */}
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 text-sm mb-6">{tier.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold text-white">
                    {tier.price === 0 ? 'Free' : `$${tier.price}`}
                  </span>
                  {tier.price > 0 && (
                    <span className="text-gray-400 ml-2">/{tier.period}</span>
                  )}
                </div>

                {/* CTA Button */}
                <Link href="/home" className="w-full block mb-8">
                  <Button
                    className={`w-full py-6 text-lg font-semibold rounded-lg transition-all duration-200 ${
                      tier.popular
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                        : 'bg-slate-700 hover:bg-slate-600 text-white'
                    }`}
                  >
                    {tier.cta}
                  </Button>
                </Link>

                {/* Features */}
                <div className="space-y-4">
                  {tier.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* FAQ / Additional Info */}
        <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Have Questions?
          </h3>
          <p className="text-gray-400 mb-4">
            We offer a 7-day free trial on Pro plan. No credit card required.
          </p>
          <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10">
            View FAQ
          </Button>
        </div>
      </div>
    </section>
  );
}
