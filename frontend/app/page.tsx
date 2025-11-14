import LandingLayout from "@/components/inhouse/layouts/landingLayout";

export default function Home() {
  return (
    <LandingLayout>
      <h1 className="text-3xl font-bold mb-4">Welcome to QuizAI</h1>
      <p className="mb-6">
        QuizAI helps you practice smarter with AI-generated quizzes tailored to your learning needs.
      </p>
      <a
        href="/signup"
        className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
        Get Started
      </a>
      <></>
    </LandingLayout>
  );
}
