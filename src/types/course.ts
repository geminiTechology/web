export type Course = {
  id: string;
  title: string;
  titleSk?: string;
  description: string;
  descriptionSk?: string;
  longDescription: string;
  longDescriptionSk?: string;
  instructor: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image?: string;
  topics: string[];
  topicsSk?: string[];
  category: string;
  categorySk?: string;
};

