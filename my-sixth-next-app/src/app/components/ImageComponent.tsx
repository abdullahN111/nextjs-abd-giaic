import Image from 'next/image';

export default function MyComponent() {
  return (
   <div className='absolute top-[155px] left-[820px]'>
    <Image src="/assets/images/image.jpeg" alt="alternate text" width={410} height={565}></Image>
   </div>
  );
}



