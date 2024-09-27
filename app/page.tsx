import Booking from "@/components/booking/booking";
import Map from "@/components/map/map";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>

      <div className=" flex flex-row">
        <div className=" w-[40%]">
         <Booking/>
        </div>
        <div className="bg-gray-400 w-[60%]">
          <Map/>
        </div>
      </div>
    </div>
   );
}
