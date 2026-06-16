import Image from "next/image";

const shots = [
  { src: "/screenshots/01-list.png", caption: "All your countdowns at a glance" },
  { src: "/screenshots/02-detail.png", caption: "Every detail in one place" },
  { src: "/screenshots/03-create.png", caption: "Create one in seconds" },
  { src: "/screenshots/04-filter.png", caption: "Filter to what matters" },
  { src: "/screenshots/05-group-by-type.png", caption: "Group by category" },
  { src: "/screenshots/06-multi-select.png", caption: "Manage many at once" },
  { src: "/screenshots/07-search.png", caption: "Find anything fast" },
];

export function Screenshots() {
  return (
    <section className="py-16">
      <h2 className="px-6 text-center text-3xl font-semibold tracking-tight sm:text-4xl">
        See it in action
      </h2>
      <div className="mt-10 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {shots.map((s) => (
          <figure key={s.src} className="shrink-0 snap-center first:ml-auto last:mr-auto">
            <Image
              src={s.src}
              alt={s.caption}
              width={1320}
              height={2868}
              className="h-[460px] w-auto rounded-[28px] border border-border shadow-xl"
            />
            <figcaption className="mt-4 text-center text-sm text-muted">
              {s.caption}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
