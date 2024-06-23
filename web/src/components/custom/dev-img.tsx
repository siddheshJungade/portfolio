import Image from "next/image";

export const DevImg = ({
  containerStyles,
  imgSrc,
}: {
  containerStyles: string;
  imgSrc: string;
}) => {
  return (
    <div className={`${containerStyles}`}>
      <Image src={imgSrc} className="rounded-full" fill priority alt="" />
    </div>
  );
};
