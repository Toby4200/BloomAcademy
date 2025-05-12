import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { create } from 'zustand';
import { motion } from 'framer-motion';
import { Button } from '../../components/ui/button';
import { Footer } from '../../components/ui/Footer';

// Zustand store for managing state
const useAssessmentStore = create((set) => ({
  currentStep: 1,
  setCurrentStep: (step) => set({ currentStep: step }),
}));

const questions = [
  {
    id: 1,
    question: 'Select the option that best matches your learning style',
    options: [
      {
        id: '1',
        label: 'Watching Videos',
        description: 'Visual and audio-based learning',
      },
      {
        id: '2',
        label: 'Reading Text',
        description: 'Written content and articles',
      },
      { id: '3', label: 'Try things', description: 'Learning by doing' },
      {
        id: '4',
        label: 'Work with people',
        description: 'Interactive learning with peers',
      },
    ],
  },
  // Add more questions here
];

export const Assessments = (): JSX.Element => {
  const methods = useForm();
  const { currentStep, setCurrentStep } = useAssessmentStore();

  const handleNext = () => {
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-white shadow-md rounded-lg p-8">
          <h1 className="text-xl font-bold mb-4">
            Question {currentStep} of {questions.length}
          </h1>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-green-500 h-2 rounded-full"
              style={{ width: `${(currentStep / questions.length) * 100}%` }}
            ></div>
          </div>

          {questions.map((q, index) => (
            <motion.div
              key={q.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentStep === index + 1 ? 1 : 0,
                y: currentStep === index + 1 ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={currentStep === index + 1 ? 'block' : 'hidden'}
            >
              <h2 className="text-lg font-semibold mb-4">{q.question}</h2>
              <div className="grid grid-cols-2 gap-4">
                {q.options.map((option) => (
                  <label
                    key={option.id}
                    className="border p-4 rounded-lg flex flex-col items-center cursor-pointer hover:shadow-md"
                  >
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={option.id}
                      className="hidden"
                      {...methods.register(`question-${q.id}`)}
                    />
                    <span className="text-lg font-medium mb-2">
                      {option.label}
                    </span>
                    <span className="text-sm text-gray-500">
                      {option.description}
                    </span>
                  </label>
                ))}
              </div>
            </motion.div>
          ))}

          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNext}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg"
            >
              Next →
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </FormProvider>
  );
};
