
export class Course {
    id: number;
    name: string;
    description: string;
    categoryId: number;
    amount: number;
    startDate: Date;
    syllabus: string[];
    studyMode: StudyMode;
    lecturerId: number;
    image: string;
}

export enum StudyMode {
    Frontal = 1,
    Digital = 2
}