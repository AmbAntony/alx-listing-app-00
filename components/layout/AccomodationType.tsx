import { AccomodationTypeProps } from "@/interfaces"


const AccomodationType = ({ icon, label }: AccomodationTypeProps) => {
    return(
        <div className="flex flex-col items-center justify-content:space-evenly space-y-1 text-sm cursor-pointer hover:text-black text-gray-500">
            <div className="text 2xl">{icon}</div>
            <span>{label}</span>
        </div>

    );
};

export default AccomodationType;