import { Sora } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const sora = Sora({ subsets: ['latin'] });

export const metadata = {
	title: 'MovieDB',
	description: 'A movie database website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={`${sora.className} dark:bg-body bg-white dark:text-white text-dark`}
			>
				<Header />
				<main>
					<div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
						{children}
					</div>
				</main>
				<Footer />
			</body>
		</html>
	);
}
