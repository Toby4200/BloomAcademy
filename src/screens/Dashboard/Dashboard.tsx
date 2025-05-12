import React from 'react';
import { Avatar, AvatarImage } from '../../components/ui/avatar';
import { DivByAnima } from './sections/DivByAnima';
import { HeaderByAnima } from './sections/HeaderByAnima';
import { SectionByAnima } from './sections/SectionByAnima/SectionByAnima';

export const Dashboard = (): JSX.Element => {
  return (
    <div className="bg-gray-50 flex flex-row justify-center w-full">
      <div className="bg-gray-50 w-full max-w-[1440px] relative">
        <header className="w-full h-[70px] bg-white shadow-[0px_1px_2px_#0000000d] flex items-center justify-between px-5">
          <div className="flex items-center gap-4">
            <img
              className="w-[50px] h-[50px] object-cover"
              alt="Bloom academy logo"
              src="/bloom-academy-logo-2.png"
            />
            <img
              className="w-[94px] h-[53px] object-cover"
              alt="New project"
              src="/new-project-1.png"
            />
            <img
              className="w-[50px] h-[50px] object-cover"
              alt="Emily"
              src="/Emily.png"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center">
              <img className="w-5 h-5" alt="Frame" src="/frame.svg" />
            </div>
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="/images/dashboard-image.jpg"
                alt="User profile"
              />
            </Avatar>
          </div>
        </header>

        <main className="flex flex-col">
          <HeaderByAnima />
          <DivByAnima />
          <SectionByAnima />
          {/* <img src="/images/dashboard-image.jpg" alt="Dashboard" />
          <img
            src="/Emily.png"
            alt="Emily"
            className="w-[200px] h-[200px] object-cover"
          /> */}
        </main>
      </div>
    </div>
  );
};
