export default function Categories(){
    const categories = [
        "Relevant",
        "Latest",
        "Top",
    ];
    return (
        <div className="p-3 font-sans text-3xl">
            {
                categories.map((category) =>{
                   return (
                     <span key={`category-${category}`} className="p-2 px-2 py-2 hover:text-blue-500 cursor-pointer">
                        {category}
                    </span>
                   );
                })
            }
        </div>
    )
}