import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MoviesList = () => {
	return (
		<div className="content">
			<div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
				<figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
					<Image
						className="w-full object-cover"
						src="/movie-1.png"
						width={355}
						height={428}
						alt=""
					/>
					<figcaption className="pt-4">
						<h3 className="text-xl mb-1">Iron Man</h3>
						<p className="text-[#575A6E] text-sm mb-2">
							Action/Adventure/Sci-fi
						</p>
						<div className="flex items-center space-x-1 mb-5">
							<Image
								src="/star.svg"
								width={14}
								height={14}
								alt=""
							/>
							<Image
								src="/star.svg"
								width={14}
								height={14}
								alt=""
							/>
							<Image
								src="/star.svg"
								width={14}
								height={14}
								alt=""
							/>
							<Image
								src="/star.svg"
								width={14}
								height={14}
								alt=""
							/>
							<Image
								src="/star.svg"
								width={14}
								height={14}
								alt=""
							/>
						</div>
						<Link
							className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
							href="/movie"
						>
							<Image
								src="/tag.svg"
								width={20}
								height={20}
								alt=""
							/>
							<span>Details</span>
						</Link>
					</figcaption>
				</figure>
			</div>
		</div>
	);
};

export default MoviesList;
