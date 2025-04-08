import { questionItem } from '@/types';
import contentCardList from './content.json';
import questionListJson from './question.json';

const questionList = questionListJson as questionItem[];

export { contentCardList, questionList };
