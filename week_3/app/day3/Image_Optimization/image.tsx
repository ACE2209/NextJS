"use client";
// app/day3/next_image/assets/nezuko.png
import Image from "next/image";
import tudat from "./anh/nezuko.png";

export default function NextImage() {
  return (
    <>
      <h2>Basic usage:</h2>
      <p>cách 1</p>
      <Image
        src="/sukuna.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>cách 2</p>
      <Image
        src={tudat}
        alt="Picture of the author"
        // width={500} automatically provided
        // height={500} automatically provided
        // blurDataURL="data:..." automatically provided
        // placeholder="blur" // Optional blur-up while loading
      />
      <h2>Blur placeholder (smooth loading experience)</h2>
      <Image
        src="/assets/nezuko.png"
        alt="loi anh r"
        width={600}
        height={400}
        placeholder="blur"
        blurDataURL="/assets/tanjigo.png"
      />

      <h2>Remote images</h2>
      {/* bỏ đường dẫn vào next.config.ts */}
      <Image
        src="https://www.comingsoon.net/wp-content/uploads/sites/3/2023/09/Jujutsu-Kaisen-Chapter-236-Release-Date.jpg"
        alt="Picture of the author"
        width={500}
        height={500}
      />
    </>
  );
}
