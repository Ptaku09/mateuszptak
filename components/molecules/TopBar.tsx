import React from 'react';
import Image from 'next/image';
import GithubIcon from 'public/icons/github.svg';
import LinkedinIcon from 'public/icons/linkedin.svg';
import Logo from 'components/atoms/Logo';

const TopBar = () => {
  return (
    <div className="w-full flex justify-between">
      <Logo />
      <div className="flex justify-center items-center gap-4">
        <a href="https://github.com/Ptaku09" target="_blank" rel="noreferrer">
          <Image src={GithubIcon} alt="github" width={25} height={25} />
        </a>
        <a href="https://www.linkedin.com/in/mateusz-ptak-2b9478258/" target="_blank" rel="noreferrer">
          <Image src={LinkedinIcon} alt="linkedin" width={20} height={20} />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
