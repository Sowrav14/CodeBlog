


function Workcart(){
    return(
        <div className="pt-2">
            <p className="text-lg font-semibold"> CUET </p>
            <p className="text-xs text-blue-600"> Student, CSE </p>
            <p className="text-sm text-gray-600"> Raozan, Chittagong </p>
            <p className="text-sm text-gray-600"> Started : 3 March 2022 </p>
        </div>
    )
}


export default function Works(){
    return(
        <div>
            <Workcart/>
            <Workcart/>
        </div>
    )
}