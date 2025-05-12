import React from 'react';
import { Card, CardContent } from '../../../../components/ui/card';

export const DivByAnima = (): JSX.Element => {
  // Data for progress cards
  const progressCards = [
    {
      id: 1,
      title: 'Prepare',
      percentage: 85,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      icon: '/frame-6.svg',
    },
    {
      id: 2,
      title: 'Remember',
      percentage: 75,
      color: 'bg-amber-500',
      textColor: 'text-amber-500',
      icon: '/frame-13.svg',
    },
    {
      id: 3,
      title: 'Understand',
      percentage: 90,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      icon: '/frame-10.svg',
    },
    {
      id: 4,
      title: 'Apply',
      percentage: 60,
      color: 'bg-red-500',
      textColor: 'text-red-500',
      icon: '/frame-12.svg',
    },
    {
      id: 5,
      title: 'Create',
      percentage: 70,
      color: 'bg-amber-500',
      textColor: 'text-amber-500',
      icon: '/frame-11.svg',
    },
    {
      id: 6,
      title: 'Evaluate',
      percentage: 95,
      color: 'bg-emerald-500',
      textColor: 'text-emerald-500',
      icon: '/frame-9.svg',
    },
  ];

  return (
    <section className="w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {progressCards.map((card) => (
          <Card
            key={card.id}
            className="shadow-[0px_10px_15px_#0000001a,0px_4px_6px_#0000001a] border-0"
          >
            <CardContent className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-['Poppins',Helvetica] font-semibold text-gray-800 text-lg leading-[18px]">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center w-5 h-5">
                  <img
                    className="w-5 h-5"
                    alt={`${card.title} icon`}
                    src={card.icon}
                  />
                </div>
              </div>

              <div className="relative w-full h-2 bg-gray-200 rounded-full mb-4">
                <div
                  className={`h-2 ${card.color} rounded-full`}
                  style={{ width: `${card.percentage}%` }}
                />
              </div>

              <div className="flex justify-end">
                <span
                  className={`${card.textColor} font-['Poppins',Helvetica] font-bold text-base`}
                >
                  {card.percentage}%
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
