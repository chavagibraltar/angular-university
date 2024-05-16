import { Course, StudyMode } from "src/model/course.model";
import { Category } from "src/model/category.model";

export const APP_COURSES: Course[] = [

    {
        id: 1, name: "photography", description: "description", categoryId: 1, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 2, name: "photoshop", description: "description", categoryId: 1, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 3, name: "new-born", description: "description", categoryId: 1, amount: 15, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 1, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 4, name: "computer-programing C#", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 5, name: "computer-programing C++", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 6, name: "computer-programing C", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 2, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 7, name: "computer-programing Java", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 3, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 8, name: "computer-programing Python", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 3, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 9, name: "computer-programing SQL", description: "description", categoryId: 2, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Digital, lecturerId: 4, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 10, name: "Flowers", description: "description", categoryId: 3, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 5, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 11, name: "Balloons", description: "description", categoryId: 3, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 6, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 12, name: "Drawing", description: "description", categoryId: 3, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 7, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 13, name: "Gittar", description: "description", categoryId: 4, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 8, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 14, name: "trumpet", description: "description", categoryId: 4, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 8, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 15, name: "Swim - first", description: "description", categoryId: 5, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 16, name: "Swim - second", description: "description", categoryId: 5, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 17, name: "Swim - third", description: "description", categoryId: 5, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 9, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 18, name: "Math", description: "description", categoryId: 6, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 10, image: "../../../assets/courses-images/english.jpg"
    },
    {
        id: 19, name: "English", description: "description", categoryId: 7, amount: 20, startDate: new Date(),
        syllabus: ["aaa", "bbb", "ccc", "ddd"], studyMode: StudyMode.Frontal, lecturerId: 11, image: "../../../assets/courses-images/english.jpg"
    }


];


export const APP_CATEGORIES: Category[] = [
    {
        id: 1,
        name: 'Photo',
        // iconRouting: '/assets/icons/programming.png'
        iconRouting: '/assets/courses-images/camera.jpg'

    },
    {
        id: 2,
        name: 'Computers Programing',
        // iconRouting: '/assets/courses-images/computers.png'
        iconRouting: '/assets/courses-images/literature.jpg'

    },
    {
        id: 3,
        name: 'Art',
        iconRouting: '/assets/courses-images/learn.png'
    },
    {
        id: 4,
        name: 'playing',
        iconRouting: '/assets/courses-images/learn.png'
    },
    {
        id: 5,
        name: 'Swimming',
        iconRouting: '/assets/courses-images/literature.jpg'
    },
    {
        id: 6,
        name: 'Math',
        iconRouting: '/assets/courses-images/literature.jpg'
    },
    {
        id: 6,
        name: 'English',
        iconRouting: '/assets/courses-images/english.jpg'
    }
];

// {
//     id: 1,
//     name: 'Introduction to Programming',
//     categoryId: 1,
//     lessonsCount: 10,
//     startDate: new Date('2024-05-01'),
//     syllabus: ['Basics of programming', 'Data structures', 'Algorithms'],
//     studyMode: StudyMode.FaceToFace,
//     lecturerId: 1,
//     image: 'https://images.deepai.org/publication-preview/tsdf-a-multi-object-formulation-for-dynamic-object-tracking-and-reconstruction-page-1-medium.jpg'
// },
// {
//     id: 2,
//     name: 'Web Development Fundamentals',
//     categoryId: 1,
//     lessonsCount: 8,
//     startDate: new Date('2024-06-01'),
//     syllabus: ['HTML', 'CSS', 'JavaScript'],
//     studyMode: StudyMode.Zoom,
//     lecturerId: 2,
//     image: '../../../assets/courses-images/computers.png'
// },
// {
//     id: 3,
//     name: 'Data Science Essentials',
//     categoryId: 2,
//     lessonsCount: 12,
//     startDate: new Date('2024-07-01'),
//     syllabus: ['Statistics', 'Machine Learning', 'Data Visualization'],
//     studyMode: StudyMode.FaceToFace,
//     lecturerId: 3,
//     image: '../../../assets/courses-images/computers.png'
// },
// {
//     id: 4,
//     name: 'Mobile App Development',
//     categoryId: 1,
//     lessonsCount: 10,
//     startDate: new Date('2024-08-01'),
//     syllabus: ['Native App Development', 'Cross-Platform Development', 'UI/UX Design'],
//     studyMode: StudyMode.Zoom,
//     lecturerId: 4,
//     image: '../../../assets/courses-images/camera.jpg'
// },
// {
//     id: 5,
//     name: 'Cybersecurity Fundamentals',
//     categoryId: 3,
//     lessonsCount: 8,
//     startDate: new Date('2024-09-01'),
//     syllabus: ['Network Security', 'Encryption', 'Threat Analysis'],
//     studyMode: StudyMode.FaceToFace,
//     lecturerId: 5,
//     image: '../../../assets/courses-images/camera.jpg'
// },
// {
//     id: 6,
//     name: 'Cloud Computing Basics',
//     categoryId: 5,
//     lessonsCount: 6,
//     startDate: new Date('2024-10-01'),
//     syllabus: ['Cloud Infrastructure', 'Virtualization', 'Containerization'],
//     studyMode: StudyMode.Zoom,
//     lecturerId: 6,
//     image: '../../../assets/courses-images/computers.png'
// },
// {
//     id: 7,
//     name: 'Graphic Design Fundamentals',
//     categoryId: 4,
//     lessonsCount: 8,
//     startDate: new Date('2024-11-01'),
//     syllabus: ['Design Principles', 'Adobe Photoshop', 'Adobe Illustrator'],
//     studyMode: StudyMode.FaceToFace,
//     lecturerId: 7,
//     image: '../../../assets/courses-images/english.jpg'
// },
// {
//     id: 8,
//     name: 'Financial Planning Basics',
//     categoryId: 6,
//     lessonsCount: 6,
//     startDate: new Date('2025-01-01'),
//     syllabus: ['Budgeting', 'Investment Strategies', 'Retirement Planning'],
//     studyMode: StudyMode.Zoom,
//     lecturerId: 8,
//     image: '../../../assets/courses-images/english.jpg'
// },
// {
//     id: 9,
//     name: 'Photography Essentials',
//     categoryId: 4,
//     lessonsCount: 8,
//     startDate: new Date('2024-05-07'),
//     syllabus: ['Camera Basics', 'Composition Techniques', 'Image Editing'],
//     studyMode: StudyMode.FaceToFace,
//     lecturerId: 9,
//     image: '../../../assets/courses-images/camera.jpg'
// },
// {
//     id: 10,
//     name: 'Artificial Intelligence Fundamentals',
//     categoryId: 5,
//     lessonsCount: 12,
//     startDate: new Date('2024-07-05'),
//     syllabus: ['Neural Networks', 'Deep Learning', 'Natural Language Processing'],
//     studyMode: StudyMode.Zoom,
//     lecturerId: 10,
//     image: '../../../assets/courses-images/english.jpg'
// }