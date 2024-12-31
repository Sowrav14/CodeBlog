import Info from "../components/Profile/Info";
import Photo from "../components/Profile/photo";
import Profile_info from "../components/Profile/profileInfo";
import Work_Skill from "../components/Profile/work&skills";





export default function Profile() {
  return (
    <div className="w-full border-2 border-red-500 p-8">
			{/* Photo and naming details */}
			<div className="w-full h-max">
				<div className=" lg:flex h-max">
					<Photo/>
					<Info/>
				</div>
			</div>
			{/* work, about, details */}
			<div className="w-full">
				<div className=" lg:flex h-max">
					<Work_Skill/>
					<Profile_info/>
				</div>
			</div>
		</div>
  )
}
