import Image from "next/image";
import Searchbar from"@/components/layout/SearchBar"
const Header: React.FC = () => {

    const accomodationTypes = [
        { name: "Rooms", icon: "/assets/icons/Cabins.png" },
        { name: "Villa", icon: "/assets/icons/Villa.png" },
        { name: 'Tropical', icon: '/assets/icons/Tropical.png' },
        { name: 'New', icon: '/assets/icons/New.png' },
        { name: 'Beach house', icon: '/assets/icons/Beach.png' },
        { name: 'Island', icon: '/assets/icons/Island.png' },
        { name: 'Camping', icon: '/assets/icons/Camping.png' },
        { name: 'Apartment', icon: '/assets/icons/Apartment.png' },
        { name: 'House', icon: '/assets/icons/House.png' },
        { name: 'Lakefront', icon: '/assets/icons/Lakefront.png' },
        { name: 'Farm house', icon: '/assets/icons/Farmhouse.png' },
        { name: 'Treehouse', icon: '/assets/icons/Treehouse.png' },
        { name: 'Cabins', icon: '/assets/icons/Cabins.png' },
        { name: 'Castles', icon: '/assets/icons/Castles.png', disabled: true },
    ];


   // This component renders the header of the application, including a notification bar, logo, search bar, and sign-in/sign-up buttons.
   return (
     <header className="flex flex-col">
        <div className="bg-[#34967C] flex justify-center py-2 gap-4 items-center h-[47px]">
          <Image src="/assets/Briefcase.svg" alt="Case minimalistic" width={24} height={24}/>
          <p className="text-base font-semibold leading-[100%] tracking-normal text-white">Overseas trip? Get the latest information on travel guides</p>
          <button className="bg-[#161117] text-white rounded-[50px] font-semibold text-xs p-2">More info</button>
        </div>
        <div className="flex justify-evenly items-center px-12 py-4 border-b border-[#EBEBEB] h-[88px]">
           <Image src="/assets/Images/CloneBnB.png" alt="Alx Logo" width={60.73} height={65.6}/>
           <Searchbar />
           <div className="flex gap-2">
              <button type="button" className="bg-[#34967C] rounded-[70px] text-white w-[103px] h-[45px] py-2">Sign in</button>
              <button type="button" className="rounded-[70px] text-black border border-[#ECECEC] w-[103px] h-[45px] py-2">Sign up</button>
           </div>
        </div>
        <nav className="flex items-center overflow-x-auto py-6 px-4 space-x-3 border-t-2 border-gray-300 mx-auto">
            {accomodationTypes.map((type) => (
               <div key={type.name} className={`flex flex-col items-center min-w-[70px] ${type.disabled
                        ? 'opacity-30'
                        : 'hover:text-teal-600 cursor-pointer'
                        }`}
                  {...(type.disabled ? { 'aria-disabled': 'true' } : {})}
               >
               <Image src={type.icon} alt={type.name} width={34} height={34} className="mb-1"/>
               <span className="text-xs text-[#161117]">{type.name}</span>
               </div>
            ))}
        </nav>
     </header>
   )
}
export default Header;
