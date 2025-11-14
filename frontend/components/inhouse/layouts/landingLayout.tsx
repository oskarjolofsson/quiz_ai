"use client";

import React from "react";
import Link from "next/link";

type Props = {
	children: React.ReactNode;
};

export default function LandingLayout({ children }: Props) {
	return (
		<div className="landing-theme min-h-screen flex flex-col" style={{ backgroundColor: "var(--background)", color: "var(--foreground)" }}>
			<header className="w-full border-b" style={{ borderColor: "var(--border)" }}>
				<nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
					<div className="flex items-center gap-3">
						<Link href="/" className="text-lg font-semibold" style={{ color: "var(--foreground)" }}>
							QuizAI
						</Link>
						<span className="text-sm" style={{ color: "var(--muted-foreground)" }}>— practice smarter</span>
					</div>

					<div className="flex items-center gap-4">
						<Link href="#features" className="text-sm hover:underline" style={{ color: "var(--foreground)" }}>Features</Link>
						<Link href="#pricing" className="text-sm hover:underline" style={{ color: "var(--foreground)" }}>Pricing</Link>
						<Link href="/login" className="px-3 py-1 rounded-md text-sm font-medium" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>Sign in</Link>
					</div>
				</nav>
			</header>

			<main className="flex-1 w-full">
				{children}
			</main>

			<footer className="w-full border-t mt-auto" style={{ borderColor: "var(--border)" }}>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
					<div style={{ color: "var(--muted-foreground)" }}>© {new Date().getFullYear()} QuizAI</div>
					<div className="flex items-center gap-4">
						<Link href="/terms" className="text-sm" style={{ color: "var(--muted-foreground)" }}>Terms</Link>
						<Link href="/privacy" className="text-sm" style={{ color: "var(--muted-foreground)" }}>Privacy</Link>
					</div>
				</div>
			</footer>
		</div>
	);
}

