import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import { Card, CardContent } from '../../../../components/ui/card';

export const HeaderByAnima = (): JSX.Element => {
  // Student profile data
  const studentProfile = {
    name: 'Emily Anderson',
    grade: 'Grade 11',
    learningStyle: 'Visual Learner',
    profileImage: 'Emily.png',
    focus: '85%',
  };

  // Strengths data
  const strengths = [
    {
      title: 'Prepare',
      description: "You're very confident in this area. Great job!",
    },
    { title: 'Evaluate', description: "95%. You're doing an amazing job!" },
  ];

  // Goals data
  const goals = [
    {
      title: 'Applying',
      description: 'is good - you can experiment with connecting dots.',
    },
    {
      title: 'Create',
      description:
        '- you can play with different ways of generating something new.',
    },
  ];

  return (
    <header className="w-full p-6 mt-[85px] mb-6">
      <Card className="w-full shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-none">
        <CardContent className="p-6">
          {/* Profile Section */}
          <div className="flex flex-row gap-6 mb-10">
            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="font-bold text-2xl text-gray-800 font-['Poppins',Helvetica] leading-6 mb-2">
                    {studentProfile.name}
                  </h2>
                  <p className="font-normal text-base text-gray-600 font-['Poppins',Helvetica] leading-4 mb-4">
                    {studentProfile.grade}
                  </p>
                  <Badge className="bg-[#375b281a] text-[#375b28] hover:bg-[#375b281a] px-4 py-1 rounded-full">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-[15.75px] h-3.5"
                        alt="Learning style icon"
                        src="/frame-5.svg"
                      />
                      <span className="font-normal text-sm font-['Poppins',Helvetica]">
                        {studentProfile.learningStyle}
                      </span>
                    </div>
                  </Badge>
                </div>

                {/* Right side actions */}
                <div className="flex items-center gap-5 justify-between">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-emerald-100 rounded-lg flex items-center justify-center mb-2">
                      <img
                        className="w-6 h-6"
                        alt="Focus icon"
                        src="/frame-3.svg"
                      />
                    </div>
                    <span className="font-normal text-sm text-gray-600 font-['Poppins',Helvetica] text-center mb-1">
                      Focus
                    </span>
                    <span className="font-bold text-base text-emerald-500 font-['Poppins',Helvetica] text-center">
                      {studentProfile.focus}
                    </span>
                  </div>

                  <div
                    className="w-24 h-24 border-4 border-solid border-[#375b28] rounded-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${studentProfile.profileImage})` }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Key Strengths Card */}
            <Card className="bg-[#375b280d] border-none">
              <CardContent className="p-4">
                <h3 className="font-semibold text-base text-[#375b28] font-['Poppins',Helvetica] mb-6">
                  Key Strengths
                </h3>
                <div className="space-y-2">
                  {strengths.map((strength, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between"
                    >
                      <div className="flex items-start gap-[6px]">
                        <img
                          className="w-3.5 h-4 mt-1"
                          alt="Strength icon"
                          src="/frame-4.svg"
                        />
                        <p className="font-normal text-base text-black font-['Poppins',Helvetica]">
                          <span className="font-bold">{strength.title} </span>
                          {strength.description}
                        </p>
                      </div>
                      <img
                        className="w-5 h-5"
                        alt="Info icon"
                        src="/vector.svg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Your Next Goals Card */}
            <Card className="bg-[#fef7f2] border-none">
              <CardContent className="p-4">
                <h3 className="font-semibold text-base text-[#c19d00] font-['Poppins',Helvetica] mb-6">
                  Your next goals
                </h3>
                <div className="space-y-2">
                  {goals.map((goal, index) => (
                    <div
                      key={index}
                      className="flex items-start justify-between"
                    >
                      <div className="flex items-start gap-[6px]">
                        <img
                          className="w-[18px] h-4 mt-1"
                          alt="Goal icon"
                          src="/frame-1.svg"
                        />
                        <p className="font-normal text-base text-black font-['Poppins',Helvetica]">
                          <span className="font-bold">{goal.title} </span>
                          {goal.description}
                        </p>
                      </div>
                      <img
                        className="w-5 h-5"
                        alt="Info icon"
                        src="/vector.svg"
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </header>
  );
};
