import PropertyCard from "@/components/layout/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import Pill from "@/components/layout/Pill";
import { HERO_BACKGROUND } from "@/constants";

const filters = ["Top Villa", "Self Checkin", "Luxury", "Pet Friendly", "Fireplace"];

export default function Home() {
  return (
    <div className="px-4 sm:px-8">
      {/* Hero */}
      <section
        className="w-full h-146 bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
        style={{ backgroundImage: `url(${HERO_BACKGROUND}`}} // Replace with actual image import if needed
      >
        <h1 className="text-4xl font-bold mb-2">Find your favorite place here!</h1>
        <p className="text-lg">The best prices for over 2 million properties worldwide.</p>
      </section>

      {/* Filters */}
      <section className="my-6 flex flex-wrap gap-3">
        {filters.map((filter) => (
          <Pill key={filter} label={filter} />
        ))}
      </section>

      {/* Property Listings */}
      <section className="grid grid-cols-4 sm:grid-cols-3 lg:grid-cols-3 gap-8">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </div>
  );
}
