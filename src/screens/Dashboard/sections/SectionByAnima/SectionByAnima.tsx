import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import { div } from 'framer-motion/client';

export const SectionByAnima = (): JSX.Element => {
  // Learning activities data
  const learningActivities = [
    {
      id: 1,
      title: 'Advanced Mathematics Video Lesson',
      description: 'Completed Chapter 7: Algebraic Expressions',
      course: 'Math: Beginner Essentials',
      time: 'Today',
      icon: '/frame-8.svg',
    },
    {
      id: 2,
      title: "Read a Visual Summary of Today's Topic",
      description: "Newton's Laws of Motion",
      course: 'Math: Beginner Essentials',
      time: 'Yesterday',
      icon: '/frame-15.svg',
    },
    {
      id: 3,
      title: 'Biology Project',
      description: 'Cell Structure Research Paper',
      course: 'Math: Beginner Essentials',
      time: '2 days ago',
      icon: '/frame-14.svg',
    },
  ];

  return (
    <Card className="w-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-none p-6">
      <CardHeader className="px-6 pt-6 pb-0">
        <CardTitle className="font-bold text-xl text-gray-800 font-['Poppins',Helvetica]">
          Recent Learning Activities
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex flex-col gap-6">
          {learningActivities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start p-4 bg-gray-50 rounded-lg"
            >
              <div className="w-12 h-12 bg-[#375b281a] rounded-lg flex items-center justify-center mr-4">
                <img
                  className="w-auto h-4"
                  alt="Activity icon"
                  src={activity.icon}
                />
              </div>

              <div className="flex-1">
                <div className="flex flex-col">
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-black text-base leading-4">
                    {activity.title}
                  </h3>
                  <p className="font-['Poppins',Helvetica] font-normal text-gray-600 text-sm leading-[14px] mt-2">
                    {activity.description}
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-end gap-2">
                <Badge className="bg-blue-100 text-blue-700 font-['Quicksand',Helvetica] font-normal rounded-full">
                  {activity.course}
                </Badge>
                <span className="font-['Poppins',Helvetica] font-normal text-[#375b28] text-sm text-right leading-[14px] mt-2">
                  {activity.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
