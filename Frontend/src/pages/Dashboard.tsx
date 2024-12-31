import { Pagination } from "@mui/material";
import Blogs from "../components/dashboard/blogs";
import { useState } from "react";




export default function Dashboard() {
	const [page, setPage] = useState(1);
	//@ts-ignore
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
		setPage(value);
		window.scrollTo(0, 0);
  };

  return(
		<div>
			<Blogs start={(page-1)*9+1}/>
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
		</div>
	)
}
