import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero h-full  min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold">Welcome To Our <br /> <span className="text-5xl font-bold bg-gradient-to-r from-red-500 via-yellow-500 to-green-400 text-transparent bg-clip-text bg-300% animate-gradient"
      >Recipe Assistant</span></h1>
      <p className="py-6">
      "Welcome, food enthusiasts! Explore a world of delicious recipes and culinary tips powered by the expertise of Gemini AI. Discover new flavors, learn cooking techniques, and let the magic of AI elevate your kitchen adventures."
      </p>
      <Link to='/gemini' type="button" className="text-white  bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 px-6 py-3.5 font-medium rounded-lg text-sm  text-center me-2 mb-2">Get start</Link>
      <Link to='/blogs' className="relative inline-flex items-center justify-center  mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
<span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Read Blogs
</span>
</Link>
    </div>
  </div>
</div>
    );
};

export default Banner;