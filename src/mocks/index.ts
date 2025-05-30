import { FeedbackItem, questionItem } from '@/types';
import contentCardList from './content.json';
import questionListJson from './question.json';
import reportJson from './report.json';

const questionList = questionListJson as questionItem[];

const report = reportJson as FeedbackItem;

export { contentCardList, questionList, report };
