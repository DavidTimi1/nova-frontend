import React, { useState } from 'react';

interface ProfileData {
    language: string;
    ageClass: string;
    gender: string;
    username: string;
    notifications: boolean;
    darkMode: boolean;
}


export default function StudentProfilePage() {
    const [profile, setProfile] = useState<ProfileData>({
        language: 'Hausa',
        ageClass: '10 - Primary 4',
        gender: 'Girl',
        username: '',
        notifications: true,
        darkMode: false,
    });

    return (
        <div className="min-h-screen w-full bg-white text-[#002746] flex items-center justify-center px-4 py-12">
            <div className="w-full shadow-xl rounded-2xl p-8 space-y-6">
                <h1 className="text-3xl font-bold mb-2">Student Profile</h1>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Language */}
                    <div>
                        <label className="block font-medium mb-1">Language</label>
                        <select
                            name="language"
                            value={profile.language}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                        >
                            <option>Hausa</option>
                            <option>Yoruba</option>
                            <option>Igbo</option>
                            <option>English</option>
                        </select>
                    </div>

                    {/* Age/Class */}
                    <div>
                        <label className="block font-medium mb-1">Age/Class</label>
                        <select
                            name="ageClass"
                            value={profile.ageClass}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                        >
                            <option>6 - Primary 1</option>
                            <option>8 - Primary 2</option>
                            <option>10 - Primary 4</option>
                            <option>12 - Primary 6</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block font-medium mb-1">Gender</label>
                        <select
                            name="gender"
                            value={profile.gender}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded-lg p-3"
                        >
                            <option>Girl</option>
                            <option>Boy</option>
                            <option>Prefer not to say</option>
                        </select>
                    </div>

                    {/* Username */}
                    <div>
                        <label className="block font-medium mb-1">Username</label>
                        <input
                            name="username"
                            value={profile.username}
                            onChange={handleChange}
                            type="text"
                            className="w-full border border-gray-300 rounded-lg p-3"
                            placeholder="Enter a username"
                        />
                    </div>

                    {/* Notification Preference */}
                    <div className="flex items-center">
                        <input
                            name="notifications"
                            type="checkbox"
                            checked={profile.notifications}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="font-medium">Enable notifications</label>
                    </div>

                    {/* Dark Mode Toggle */}
                    <div className="flex items-center">
                        <input
                            name="darkMode"
                            type="checkbox"
                            checked={profile.darkMode}
                            onChange={handleChange}
                            className="mr-2"
                        />
                        <label className="font-medium">Enable dark mode</label>
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-4 bg-[#002746] text-white py-3 rounded-lg font-semibold hover:bg-[#09BDFF] transition"
                    >
                        Continue
                    </button>
                </form>
            </div>
        </div>
    );
    

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        const { name, value, type } = e.target;

        setProfile((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? e.target.checked : value,
        }));
    };

    function handleSubmit(e: React.FormEvent){
        e.preventDefault();
        console.log('Profile Data:', profile);
        // Navigation or API call can go here
    };
}
