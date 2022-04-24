const RandomItem = () => {
  return (
    <div className="w-1/4 p-8 shadow-lg rounded-lg bg-yellow-50">
     
      <div className="text-center py-2">
        <h3 className="text-xl font-normal">
          Random Item
          
        </h3>
        <p className="text-gray-500 text-base">Seattle</p>
        <button className="bg-yellow-500 px-4 py-2 rounded-lg text-gray-50 font-medium mt-2">
         View More
        </button>
      </div>
    </div>
  );
};
export default RandomItem;