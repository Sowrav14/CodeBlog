import { useState } from "react";
import Filter from "../components/Feed/filter";
import Pagination from '@mui/material/Pagination';
import Blogs from "../components/Feed/blogs";
import Featured from "../components/Feed/featured";



export default function HomePage(){
	const [page, setPage] = useState(1);
	//@ts-ignore
  	const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    	setPage(value);
		window.scrollTo(0, 0);
  	};


	return(
		<div className="flex w-full px-16 py-12">
			<div className="w-full px-4 lg:w-4/6">
				<Filter/>
				<Blogs start={(page-1)*10+1}/>
				<Pagination
					variant="outlined"
					color="secondary"
					count={19} 
					page={page}
					siblingCount={0} 
					boundaryCount={2}
					onChange={handleChange}
					className="flex justify-around my-12"
				/>
				<footer> ...Footer Here... </footer>
				{/* <Pagination count={10} page={page} onChange={handleChange} /> */}
			</div>
			<div className=" invisible h-fit lg:visible lg:w-2/6 border-2 p-4">
				<Featured/>
			</div>
		</div>
	)
}