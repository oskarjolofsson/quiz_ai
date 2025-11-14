import LandingLayout from "@/components/inhouse/layouts/landingLayout";
import CTAButton from "@/components/ui/CTAButton";

export default function Home() {
  return (
    <LandingLayout>
      <div className="text-center max-w-2xl mx-auto px-4 mb-16 mt-16">
            {/* Header */}
            <h2 className="text-3xl sm:text-5xl font-bold leading-tight tracking-tight mb-4 text-violet-400">
                Time to ace your exams with QuizAI
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-violet-200 mb-8">
                Ace your next test with QuizAI's intelligent quiz generator
            </p>

            {/* CTA Button */}
            <CTAButton href="/analyse">Try it now — it's free!</CTAButton>

            {/* Small text below CTA */}
            <p className="text-sm text-slate-400">
                No credit card required
            </p>
        </div>
    </LandingLayout>
  );
}
