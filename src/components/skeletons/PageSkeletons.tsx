export function GenericPageSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section Skeleton */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            {/* Badge Pill Skeleton */}
            <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse" />

            {/* H1 Skeleton */}
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>

            {/* Subtitle Skeleton */}
            <div className="space-y-2 max-w-2xl">
              <div className="h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </div>
      </section>

      {/* Section 1: White Background */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Section Title */}
          <div className="mb-12 max-w-2xl">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2 mb-4" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>

          {/* 2-Col Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 space-y-4">
                <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Alternate Background */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Section Title */}
          <div className="mb-12 max-w-2xl">
            <div className="h-8 bg-gray-200 rounded animate-pulse w-1/2 mb-4" />
            <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
          </div>

          {/* 3-Col Block Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacer to extend min-h-screen */}
      <div className="flex-grow" />
    </div>
  );
}

export function ServicesIndexSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse" />
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>
            <div className="space-y-2 max-w-2xl">
              <div className="h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-6 space-y-4">
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-grow" />
    </div>
  );
}

export function LocationsIndexSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-6">
            <div className="h-8 w-32 bg-gray-200 rounded-full animate-pulse" />
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>
            <div className="space-y-2 max-w-2xl">
              <div className="h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>
          </div>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 p-8 space-y-6">
                <div className="h-6 w-24 bg-gray-200 rounded-full animate-pulse" />
                <div className="space-y-3">
                  <div className="h-8 bg-gray-200 rounded animate-pulse w-3/4" />
                  <div className="h-5 bg-gray-200 rounded animate-pulse w-2/3" />
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-grow" />
    </div>
  );
}

export function ServiceDetailSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Back Link Skeleton */}
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-4" />

            {/* Badge */}
            <div className="h-8 w-28 bg-gray-200 rounded-full animate-pulse" />

            {/* H1 */}
            <div className="space-y-3 mt-4">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>

            {/* Subtitle */}
            <div className="space-y-2 max-w-2xl mt-4">
              <div className="h-5 bg-gray-200 rounded animate-pulse" />
              <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - 2 Col */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
              </div>
              <div className="space-y-4">
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
              </div>
            </div>

            {/* Right: Image */}
            <div className="rounded-2xl aspect-[4/3] bg-gray-200 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Features Section - 3 Col */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-white p-6 space-y-4">
                <div className="h-12 w-12 bg-gray-200 rounded-lg animate-pulse" />
                <div className="h-6 bg-gray-200 rounded animate-pulse w-2/3" />
                <div className="space-y-2">
                  <div className="h-4 bg-gray-200 rounded animate-pulse" />
                  <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-grow" />
    </div>
  );
}

export function LocationDetailSkeleton() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-white via-gray-50 to-gray-100">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-4">
            {/* Back Link */}
            <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-4" />

            {/* Badge */}
            <div className="h-8 w-28 bg-gray-200 rounded-full animate-pulse" />

            {/* H1 */}
            <div className="space-y-3 mt-4">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-10 bg-gray-200 rounded animate-pulse w-2/3" />
            </div>

            {/* Subtitle */}
            <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6 mt-4" />

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse" />
              <div className="h-12 w-32 bg-gray-200 rounded-full animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section - 2 Col */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Text */}
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
              </div>
              <div className="space-y-4">
                <div className="h-5 bg-gray-200 rounded animate-pulse" />
                <div className="h-5 bg-gray-200 rounded animate-pulse w-5/6" />
              </div>
            </div>

            {/* Right: Image + Stats */}
            <div className="space-y-6">
              <div className="rounded-2xl aspect-[4/3] bg-gray-200 animate-pulse" />
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-4 space-y-2">
                    <div className="h-6 bg-gray-200 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - 2 Col */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <div className="h-7 bg-gray-200 rounded animate-pulse w-1/3" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl border border-gray-100 bg-white p-5 space-y-3">
                <div className="h-5 bg-gray-200 rounded animate-pulse w-3/4" />
                <div className="space-y-2">
                  <div className="h-3 bg-gray-200 rounded animate-pulse" />
                  <div className="h-3 bg-gray-200 rounded animate-pulse w-5/6" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="flex-grow" />
    </div>
  );
}
