import { PropertyCard } from "@/components/property-card"
import { properties } from "@/lib/data"
import { SlidersHorizontal } from "lucide-react"

export default function ListingsPage() {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        <aside className="w-full md:w-1/4 lg:w-1/5">
          <div className="sticky top-24">
            <h2 className="text-2xl font-headline font-bold mb-4 flex items-center gap-2">
              <SlidersHorizontal className="w-5 h-5" />
              Filters
            </h2>
            <div className="space-y-6 p-4 rounded-lg bg-card border">
              {/* Filter sections will be implemented here */}
              <div>
                <h3 className="font-semibold mb-2">Price Range</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bedrooms</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Property Type</h3>
                <p className="text-sm text-muted-foreground">...</p>
              </div>
            </div>
          </div>
        </aside>

        <main className="w-full md:w-3/4 lg:w-4/5">
          <h1 className="text-4xl font-headline font-bold tracking-tight mb-8">
            All Properties
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          {/* Pagination would go here */}
        </main>
      </div>
    </div>
  )
}
