import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Master Any Subject with <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">AI-Powered Quizzes</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Create personalized study decks, test your knowledge, and achieve your learning goals faster than ever before.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/home">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-lg font-semibold transition-all duration-200">
              Get Started
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="px-8 py-6 text-lg text-white border-2 border-purple-400 hover:bg-purple-400 hover:bg-opacity-10 rounded-lg font-semibold transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-gray-700">
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-purple-400">10K+</p>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-purple-400">50K+</p>
            <p className="text-gray-400 mt-2">Quizzes Created</p>
          </div>
          <div>
            <p className="text-3xl sm:text-4xl font-bold text-purple-400">1M+</p>
            <p className="text-gray-400 mt-2">Questions Answered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
