import LandingLayout from "@/components/inhouse/layouts/landingLayout";
import CTAButton from "@/components/ui/CTAButton";
import { Icon } from "lucide-react";

export default function Home() {
  const features = [
    { icon: "bolt", title: "Fast Uploads", desc: "Fast quality — Get your results in under a minute." },
    { icon: "target", title: "Pro‑Grade Insights", desc: "Actionable feedback on mechanics, rotation, balance, plus tailored drills." },
    { icon: "shield", title: "Private by Design", desc: "Secure upload, temporary processing, and auto‑delete after analysis." },
  ];

  return (
    <LandingLayout>

      {/* Hero Text */}
      <section>
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


      </section>

      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Example images TODO */}


      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Testimonials */}
      <section
        aria-labelledby="testimonials-heading"
        className="max-w-5xl mx-auto px-4 py-16"
      >
        <div className="text-center mb-8">
          <h3 id="testimonials-heading" className="text-2xl sm:text-3xl font-bold text-violet-300">
            What students say
          </h3>
          <p className="text-sm text-slate-400 mt-2">
            Real feedback from learners who improved their scores with QuizAI
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <figure className="bg-white/3 p-6 rounded-xl shadow-sm">
            <blockquote className="text-sm text-slate-200 mb-4">
              "QuizAI helped me convert passive notes into tailored quizzes — my retention improved dramatically. The questions are challenging but fair."
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-violet-600 flex items-center justify-center text-white font-semibold">
                  AM
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Amina M.</div>
                <div className="text-xs text-slate-400">Biology Student</div>
                <div className="mt-1 flex items-center text-amber-400" aria-hidden>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5 opacity-50" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="bg-white/3 p-6 rounded-xl shadow-sm">
            <blockquote className="text-sm text-slate-200 mb-4">
              "Creating quizzes from lecture slides takes minutes now. The explanations for answers helped me understand weak areas fast."
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-violet-500 flex items-center justify-center text-white font-semibold">
                  JH
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Jonas H.</div>
                <div className="text-xs text-slate-400">Computer Science</div>
                <div className="mt-1 flex items-center text-amber-400" aria-hidden>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5 opacity-50" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                </div>
              </div>
            </figcaption>
          </figure>

          <figure className="bg-white/3 p-6 rounded-xl shadow-sm">
            <blockquote className="text-sm text-slate-200 mb-4">
              "I used QuizAI to prep for finals and cut my study time while scoring higher. The customizable difficulty is a game-changer."
            </blockquote>
            <figcaption className="flex items-center gap-3">
              <div className="flex-shrink-0">
                <div className="h-12 w-12 rounded-full bg-violet-700 flex items-center justify-center text-white font-semibold">
                  LS
                </div>
              </div>
              <div>
                <div className="text-sm font-semibold text-white">Lina S.</div>
                <div className="text-xs text-slate-400">Economics</div>
                <div className="mt-1 flex items-center text-amber-400" aria-hidden>
                  <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                  <svg className="h-4 w-4 ml-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.172c.969 0 1.371 1.24.588 1.81l-3.378 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.286-3.966a1 1 0 00-.364-1.118L2.627 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.286-3.966z" /></svg>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>

        <div className="text-center mt-8">
          <a
            href="/reviews"
            className="inline-block px-4 py-2 rounded-md bg-violet-500 text-white text-sm hover:bg-violet-600"
          >
            Read more reviews
          </a>
        </div>
      </section>





      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Features */}
      <section>
        <div
          className={`relative not-prose w-full max-w-3xl mx-auto text-center px-4 sm:px-6 mt-10 sm:mt-12 md:mt-16 mb-20`}
          role="complementary"
          aria-label="Marketing message"
        >
          {/* Eyebrow */}
          <span className="inline-flex items-center gap-2 text-emerald-400/90 text-sm ring-1 ring-emerald-400/20 rounded-full px-3 py-1 bg-emerald-400/5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Instant AI Analysis
          </span>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight !text-slate-900 !text-white">
            What we can do for you
          </h2>

          {/* Subtext */}
          <p className="mt-3 text-base sm:text-lg md:text-xl leading-relaxed !text-slate-600 !text-slate-300">
            QuizAI leverages advanced AI to transform your study materials into personalized quizzes, helping you master subjects faster and more effectively.
          </p>

          {/* Optional divider flair */}
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-slate-200 dark:via-slate-700 to-transparent" />

          {/* Feature list */}
          <ul role="list" className="mt-8 space-y-4 text-left">
            {features.map((f, i) => (
              <li key={i} className="py-2">
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-600/10 text-blue-600 dark:text-blue-400">
                    <></>
                  </span>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold !text-slate-900 !text-white">{f.title}</h3>
                    <p className="mt-1 text-sm sm:text-base leading-relaxed !text-slate-600 !text-slate-300">{f.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* CTA (optional for later) */}
          {/* <div className="mt-4">
        <Link to="/analyse" className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-emerald-500/90 hover:bg-emerald-500 text-white font-semibold shadow-md shadow-emerald-900/30 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-colors">
          Try it for free
        </Link>
      </div> */}
        </div>
      </section>


      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      {/* Priceing */}

      <section>
        <div className="relative isolate bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
          <div aria-hidden="true" className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl">
            <div
              style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
              className="mx-auto aspect-1155/678 w-288.75 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base/7 font-semibold text-indigo-400">Pricing</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-white sm:text-6xl">Choose the right plan for you</p>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.</p>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
            <div className="rounded-3xl rounded-t-3xl bg-white/2.5 p-8 ring-1 ring-white/10 sm:mx-8 sm:rounded-b-none sm:p-10 lg:mx-0 lg:rounded-tr-none lg:rounded-bl-3xl">
              <h3 id="tier-hobby" className="text-base/7 font-semibold text-indigo-400">Hobby</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-white">$29</span>
                <span className="text-base text-gray-400">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-gray-300">The perfect plan if you&#039;re just getting started with our product.</p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  25 products
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Up to 10,000 subscribers
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  24-hour support response time
                </li>
              </ul>
              <a href="#" aria-describedby="tier-hobby" className="mt-8 block rounded-md bg-white/10 px-3.5 py-2.5 text-center text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/75 sm:mt-10">Get started today</a>
            </div>
            <div className="relative rounded-3xl bg-gray-800 p-8 ring-1 ring-white/10 sm:p-10">
              <h3 id="tier-enterprise" className="text-base/7 font-semibold text-indigo-400">Enterprise</h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span className="text-5xl font-semibold tracking-tight text-white">$99</span>
                <span className="text-base text-gray-400">/month</span>
              </p>
              <p className="mt-6 text-base/7 text-gray-300">Dedicated support and infrastructure for your company.</p>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-300 sm:mt-10">
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Unlimited products
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Unlimited subscribers
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Advanced analytics
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Dedicated support representative
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Marketing automations
                </li>
                <li className="flex gap-x-3">
                  <svg viewBox="0 0 20 20" fill="currentColor" data-slot="icon" aria-hidden="true" className="h-6 w-5 flex-none text-indigo-400">
                    <path d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" fillRule="evenodd" />
                  </svg>
                  Custom integrations
                </li>
              </ul>
              <a href="#" aria-describedby="tier-enterprise" className="mt-8 block rounded-md bg-indigo-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 sm:mt-10">Get started today</a>
            </div>
          </div>
        </div>

      </section>
    </LandingLayout>
  );
}
