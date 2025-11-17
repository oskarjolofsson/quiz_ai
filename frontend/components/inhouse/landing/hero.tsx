import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex justify-center overflow-hidden">

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Master Any Subject with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            AI-Powered Quizzes
          </span>
        </h1>

        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Create personalized study decks, test your knowledge, and achieve your
          learning goals faster than ever before.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link href="/home">
            <Button className="px-8 py-6 text-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full font-semibold transition-all duration-200">
              Get Started
            </Button>
          </Link>
          <Button
            variant="outline"
            className="px-8 py-6 text-lg text-white border-2 border-purple-400 hover:bg-purple-400 hover:bg-opacity-10 rounded-full font-semibold transition-all duration-200"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        {/* <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-gray-700">
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
        </div> */}
      </div>
    </section>
  );
}
