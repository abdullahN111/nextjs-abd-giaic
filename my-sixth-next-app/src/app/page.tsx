import ImageComponent from "./components/ImageComponent";

export default function Home() {
  return (
    <div className="flex items-center">
      <div className="flex flex-col absolute top-[244px] gap-2 justify-center w-1/2 h-48">
        <h1 className="ml-[133px] font-bold text-[38px]">
          Welcome to our Website
        </h1>
        <p className="ml-[140px] font-sans text-[24px] w-[571px] h-[156px] text-[#4C4C4C] font-normal leading-extra-loose">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem ipsum has been the industry's standard.
        </p>
        <button className="flex bg-[#121212] text-white w-[150px] h-[46px] items-center justify-center py-5 mt-6 ml-[140px]">
          Contact Us
        </button>
      </div>
      <ImageComponent></ImageComponent>
    </div>
  );
}
