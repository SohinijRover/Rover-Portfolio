export type MockupVariant =
  | "analytics"
  | "landing"
  | "portfolio"
  | "social"
  | "agency"
  | "commerce";

export default function DashboardMockup({
  variant,
  accent,
  label,
}: {
  variant: MockupVariant;
  accent: string;
  label: string;
}) {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-2xl bg-white shadow-xl">
      <div className="flex shrink-0 items-center gap-1.5 border-b border-black/5 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="mx-auto rounded-full bg-black/5 px-3 py-1 text-[10px] font-medium tracking-wide text-black/40">
          {label}
        </div>
      </div>
      <div className="flex-1 overflow-hidden p-4 sm:p-5">
        <MockupBody variant={variant} accent={accent} />
      </div>
    </div>
  );
}

function MockupBody({ variant, accent }: { variant: MockupVariant; accent: string }) {
  if (variant === "analytics") {
    return (
      <div className="flex h-full gap-4">
        <div className="hidden w-1/5 flex-col gap-2.5 sm:flex">
          <div className="h-2 w-full rounded-full" style={{ background: accent }} />
          <div className="h-2 w-2/3 rounded-full bg-black/10" />
          <div className="h-2 w-3/4 rounded-full bg-black/10" />
          <div className="h-2 w-1/2 rounded-full bg-black/10" />
        </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="h-3 w-1/3 rounded-full bg-black/15" />
          <div className="grid grid-cols-3 gap-2.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className="rounded-lg bg-black/[0.03] p-2.5">
                <span
                  className="mb-1.5 block h-1.5 w-1.5 rounded-full"
                  style={{ background: accent }}
                />
                <div className="mb-1 h-3 w-10 rounded bg-black/20" />
                <div className="h-1.5 w-14 rounded-full bg-black/10" />
              </div>
            ))}
          </div>
          <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-black/[0.02] p-3">
            {[40, 65, 35, 80, 55, 90, 60].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm"
                style={{
                  height: `${h}%`,
                  background: i === 5 ? accent : "rgba(0,0,0,0.12)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (variant === "landing") {
    return (
      <div className="flex h-full flex-col justify-center gap-3">
        <div className="h-5 w-2/3 rounded bg-black/15" />
        <div className="h-5 w-1/2 rounded" style={{ background: accent }} />
        <div className="mt-2 h-2.5 w-3/4 rounded-full bg-black/10" />
        <div className="h-2.5 w-1/2 rounded-full bg-black/10" />
        <div className="mt-3 flex gap-2">
          <div className="h-7 w-20 rounded-full" style={{ background: accent }} />
          <div className="h-7 w-24 rounded-full border border-black/15" />
        </div>
      </div>
    );
  }

  if (variant === "portfolio") {
    return (
      <div className="grid h-full grid-cols-3 grid-rows-2 gap-2">
        <div
          className="col-span-2 row-span-2 rounded-lg"
          style={{ background: accent, opacity: 0.85 }}
        />
        <div className="rounded-lg bg-black/[0.06]" />
        <div className="rounded-lg bg-black/[0.04]" />
      </div>
    );
  }

  if (variant === "social") {
    return (
      <div className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 shrink-0 rounded-full" style={{ background: accent }} />
          <div className="flex flex-1 flex-col gap-1.5">
            <div className="h-2 w-20 rounded-full bg-black/15" />
            <div className="h-2 w-14 rounded-full bg-black/8" />
          </div>
        </div>
        {[0, 1].map((i) => (
          <div key={i} className="flex flex-1 gap-2.5 rounded-lg bg-black/[0.03] p-2.5">
            <div
              className="h-full w-12 shrink-0 rounded-md"
              style={{ background: accent, opacity: 0.3 }}
            />
            <div className="flex flex-1 flex-col justify-center gap-1.5">
              <div className="h-2 w-full rounded-full bg-black/10" />
              <div className="h-2 w-2/3 rounded-full bg-black/10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "agency") {
    return (
      <div className="relative flex h-full flex-col justify-end overflow-hidden">
        <div
          className="absolute -top-6 -right-6 h-24 w-24 rotate-12 rounded-2xl"
          style={{ background: accent, opacity: 0.2 }}
        />
        <div className="relative space-y-2">
          <div className="h-4 w-3/4 rounded bg-black/15" />
          <div className="h-4 w-1/2 rounded bg-black/15" />
        </div>
        <div className="relative mt-3 h-6 w-28 rounded-full" style={{ background: accent }} />
      </div>
    );
  }

  return (
    <div className="grid h-full grid-cols-3 gap-2.5">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <div key={i} className="flex flex-col gap-1.5">
          <div
            className="aspect-square rounded-lg"
            style={{ background: i % 3 === 0 ? accent : "rgba(0,0,0,0.06)" }}
          />
          <div className="h-1.5 w-3/4 rounded-full bg-black/10" />
          <div className="h-1.5 w-1/2 rounded-full bg-black/15" />
        </div>
      ))}
    </div>
  );
}
