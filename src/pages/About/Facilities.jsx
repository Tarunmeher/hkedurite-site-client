// import {
//     Mic,
//     Lightbulb,
//     FileText,
//     Presentation,
//     Dribbble,
//     Palette,
//     Bus,
//     Utensils,
//   } from 'lucide-react';

//   export default function SchoolFeatures() {
//     const features = [
//       {
//         icon: <Mic className="w-12 h-12 text-red-600" />,
//         title: '21st Century Skills Club',
//         description:
//           'Dedicated clubs to develop critical thinking, problem-solving, collaboration, and other essential 21st-century skills.',
//       },
//       {
//         icon: <Lightbulb className="w-12 h-12 text-red-600" />,
//         title: 'Value-Based Curriculum',
//         description:
//           'A curriculum that nurtures moral values, ethics, and character-building alongside academic excellence.',
//       },
//       {
//         icon: <FileText className="w-12 h-12 text-red-600" />,
//         title: 'NEP-Aligned Education',
//         description:
//           'Education aligned with the New Education Policy (NEP), fostering holistic learning, skill development, and multidisciplinary approaches.',
//       },
//       {
//         icon: <Presentation className="w-12 h-12 text-red-600" />,
//         title: 'Interactive Classrooms',
//         description:
//           'Fully air-conditioned, interactive classrooms equipped with modern teaching aids to enhance student engagement and learning.',
//       },
//       {
//         icon: <Dribbble className="w-12 h-12 text-red-600" />,
//         title: '10+ Sports Options',
//         description:
//           'Wide range of sports including cricket, football, basketball, tennis, and more to promote physical fitness and team spirit.',
//       },
//       {
//         icon: <Palette className="w-12 h-12 text-red-600" />,
//         title: 'Arts, Music & Performance',
//         description:
//           'A vibrant platform to explore and express creativity through various arts, music, and performance opportunities.',
//       },
//       {
//         icon: <Utensils className="w-12 h-12 text-red-600" />,
//         title: 'Satvik Food (Included)',
//         description:
//           'Nutritious, satvik meals prepared to ensure students’ physical and mental well-being, included in the hostel and day meal plans.',
//       },
//       {
//         icon: <Bus className="w-12 h-12 text-red-600" />,
//         title: 'Hostel/Transportation',
//         description:
//           'Safe transportation options, providing a comfortable and secure environment for students.',
//       },
//     ];

//     return (
//       <div className="max-w-7xl mx-auto px-4 py-4">
//         {/* Header */}
//         <div className="mb-12">
//           <h2 className="text-3xl mx-5 font-bold text-gray-800">Facilities</h2>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {features.map((feature, index) => (
//             <div key={index} className="text-center space-y-4">
//               <div className="flex justify-center">{feature.icon}</div>
//               <h3 className="text-xl font-semibold">{feature.title}</h3>
//               <p className="text-gray-600 leading-relaxed">{feature.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
// SchoolFeatures.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
    Mic,
    Lightbulb,
    FileText,
    Presentation,
    Dribbble,
    Palette,
    Bus,
    Utensils,
} from 'lucide-react';

export default function SchoolFeatures() {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    const features = [
        {
            icon: <Mic className="w-12 h-12 text-red-600" />,
            title: '21st Century Skills Club',
            description:
                'Dedicated clubs to develop critical thinking, problem-solving, collaboration, and other essential 21st-century skills.',
        },
        {
            icon: <Lightbulb className="w-12 h-12 text-red-600" />,
            title: 'Value-Based Curriculum',
            description:
                'A curriculum that nurtures moral values, ethics, and character-building alongside academic excellence.',
        },
        {
            icon: <FileText className="w-12 h-12 text-red-600" />,
            title: 'NEP-Aligned Education',
            description:
                'Education aligned with the New Education Policy (NEP), fostering holistic learning, skill development, and multidisciplinary approaches.',
        },
        {
            icon: <Presentation className="w-12 h-12 text-red-600" />,
            title: 'Interactive Classrooms',
            description:
                'Fully air-conditioned, interactive classrooms equipped with modern teaching aids to enhance student engagement and learning.',
        },
        {
            icon: <Dribbble className="w-12 h-12 text-red-600" />,
            title: '10+ Sports Options',
            description:
                'Wide range of sports including cricket, football, basketball, tennis, and more to promote physical fitness and team spirit.',
        },
        {
            icon: <Palette className="w-12 h-12 text-red-600" />,
            title: 'Arts, Music & Performance',
            description:
                'A vibrant platform to explore and express creativity through various arts, music, and performance opportunities.',
        },
        {
            icon: <Utensils className="w-12 h-12 text-red-600" />,
            title: 'Satvik Food (Included)',
            description:
                'Nutritious, satvik meals prepared to ensure students’ physical and mental well-being, included in the hostel and day meal plans.',
        },
        {
            icon: <Bus className="w-12 h-12 text-red-600" />,
            title: 'Hostel/Transportation',
            description:
                'Safe transportation options, providing a comfortable and secure environment for students.',
        },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Header */}
            {/* <div className="mb-12" data-aos="fade-down">
                <h2 className="text-3xl mx-5 font-bold text-gray-800 text-center">Facilities</h2>

            </div> */}

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="text-center space-y-4"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="flex justify-center">{feature.icon}</div>
                        <h3 className="text-xl font-semibold">{feature.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
