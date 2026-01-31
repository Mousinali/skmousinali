"use client";

export default function AdvancedBlogWithImages() {
    return (
        <section className="bg-white py-24 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-20">
                    {/* Header */}
                    <div className="max-w-5xl mx-auto px-6 mb-20 text-center">
                        <h2 className="text-lg md:text-3xl lg:text-4xl font-medium tracking-tight">
                            Insights, Stories & Case Studies
                            <span className="block text-black/40 text-base mt-3">
                                Deep dives into design, development, and building real-world digital
                                products.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* TOP GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">

                    {/* FEATURED BLOG */}
                    <article className="lg:col-span-7 group">
                        <div className="relative h-[420px] overflow-hidden rounded-3xl">

                            {/* Image */}
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                                alt="Blog cover"
                                className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105"
                            />

                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                            {/* Text Content */}
                            <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10">
                                <span className="inline-block w-fit mb-3 text-xs font-semibold uppercase tracking-wide text-white bg-white/20 backdrop-blur px-3 py-1 rounded-full">
                                    Featured
                                </span>

                                <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight max-w-xl">
                                    Designing Interfaces That Users Love
                                </h3>

                                <p className="mt-3 text-sm md:text-base text-slate-200 max-w-lg">
                                    A practical look at how UI decisions influence trust, usability,
                                    and conversion in modern products.
                                </p>

                                {/* Meta */}
                                <div className="mt-4 text-xs text-slate-300">
                                    Mousin • 5 min read
                                </div>
                            </div>

                        </div>
                    </article>


                    {/* SIDE BLOGS */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <SideBlog
                            img="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                            tag="Development"
                            title="Why Performance Is Non-Negotiable"
                        />
                        <SideBlog
                            img="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                            tag="UX Strategy"
                            title="Users Scan — Here’s How to Design for It"
                        />
                        <SideBlog
                            img="https://images.unsplash.com/photo-1556761175-5973dc0f32e7"
                            tag="UX Strategy"
                            title="Users Scan — Here’s How to Design for It"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}


function SideBlog({ img, tag, title }) {
    return (
        <article className="group flex gap-6">
            <div className="relative w-40 h-28 rounded-2xl overflow-hidden flex-shrink-0">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
            </div>

            <div>
                <span className="text-xs uppercase tracking-wide text-slate-500">
                    {tag}
                </span>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">
                    {title}
                </h4>
                <p className="mt-2 text-sm text-slate-600">
                    Read time · 3–4 min
                </p>
            </div>
        </article>
    );
}

