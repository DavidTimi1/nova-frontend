import { useState } from 'react';
import Button from '../../components/Buttons';

const PaymentPlans = [
    {
        title: 'Free Plan',
        price: '₦0/mo',
        features: [
            'Access to basic lessons',
            'Standard quizzes',
            'Limited AI tutor access'
        ]
    },
    {
        title: 'Pro Plan',
        price: '₦2,000/mo',
        features: [
            'All lessons unlocked',
            'Unlimited quizzes',
            'Full AI tutor access',
            'Double rewards points',
            'Priority support'
        ]
    }
];

export default function PaymentsPage() {
    const [selectedPlan, setSelectedPlan] = useState('Pro Plan');

    return (
        <div className="min-h-screen w-full bg-white text-[#002746] py-12">
            <div className="px-5">
                <h1 className="text-3xl font-bold text-center mb-8">💳 Choose Your Plan</h1>

                <div className="grid md:grid-cols-2 gap-6">
                    {PaymentPlans.map((plan) => (
                        <div
                            key={plan.title}
                            className={`border-2 rounded-xl p-6 transition shadow-lg hover:shadow-xl cursor-pointer ${selectedPlan === plan.title ? 'border-[#09BDFF]' : 'border-gray-200'
                                }`}
                            onClick={() => setSelectedPlan(plan.title)}
                        >
                            <h2 className="text-xl font-semibold text-[#BA45AF] mb-2">{plan.title}</h2>
                            <div className="text-2xl font-bold mb-4">{plan.price}</div>
                            <ul className="list-disc list-inside space-y-1">
                                {plan.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <Button>
                        Confirm & Subscribe to {selectedPlan}
                    </Button>
                    <p className="mt-2 text-sm text-gray-500">
                        You can cancel or switch plans anytime from settings.</p>
                </div>
            </div>
        </div>
    );
}
