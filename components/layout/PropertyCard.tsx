import { PropertyProps } from "@/interfaces";

interface PropertyCardProps {
    property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) =>{
    return (
        /*Image*/
        <div className="border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-300"> 
           <div className="relative w-20 h-56 overflow-hidden">
            <img src={property.image} alt={property.name} className="w-10 h-48 object-cover>"/>
           </div>
        
        {/*Content*/}
        <div className="p-4 space-y-4">
            <h3 className="font-lg font-semibold text-gray-900 truncate">{property.name}</h3>
            <p className="">{property.address.city}, {property.address.country}</p>
        </div>

        {/*Categories*/}
        <div className="flex flex-wrap gap-1 text-xs text-gray-600">
            {property.category.map((cat, i) =>(
             <span key={i} className="bg-gray-100 px-2 py-0.5 rounded-full">{cat}</span>
            ))}
        </div>

         {/*Offers*/}
         <div className="text-xs text-gray-500">
            {property.offers.bed} {property.offers.occupants} {property.offers.shower}
         </div>

         {/*Price & Rating*/}
         <div className="flex justify-between items-center pt-2">
            <span className="text-yellow-500 text-sm">{property.rating}</span>
         </div>
        </div>
);
};

export default PropertyCard;