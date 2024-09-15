function Card({ btnTxt = "Click Me", arr, someobj, username, src}) {
  console.log(someobj);
  
const imgUrl = src || "https://images.pexels.com/photos/5380670/pexels-photo-5380670.jpeg?auto=compress&cs=tinysrgb&w=600"

  return (
    <div className="relative h-[400px] w-[300px] rounded-md">
      <img
src= {imgUrl} 
        alt="AirMax Pro"
        className="z-0 h-full w-full rounded-md object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-4 left-4 text-left">
        <h1 className="text-l font-semibold text-white">{`${username}`}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          {arr && arr.length > 0 && arr.join(", ")} {/* Render array elements */}
         <b> {someobj && someobj.username && ` ? ${someobj.username}`}</b> {/* Render someobj property */}
        </p>
        
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {btnTxt} →
        </button>
      </div>
    </div>
  );
}

export default Card;
