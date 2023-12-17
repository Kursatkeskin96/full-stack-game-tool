import Image from "next/image";
import Link from "next/link";
import logo from '@/images/logo.png'

export default function NotFound() {
  return (
    <div className="min-h-96  pt-20 mx-auto flex justify-between items-center flex-wrap">
        <div className="flex mx-auto text-center lg:w-1/3 flex-col justify-center items-centter gap-10">
        <h2 className="text-4xl font-bold">WHOOPS!</h2>
      <p>Could not find requested resource</p>
     <div className="flex justify-center items-center"> <Link href="/" className="bg-orange-600 rounded-md text-white w-40 py-1 text-center">Return Home</Link></div>
        </div>
        <div className="flex flex-col mx-auto lg:w-1/3    justify-center items-centter">
          <Image src={logo} width={300} alt="logo" />
        </div>
    </div>
  );
}
