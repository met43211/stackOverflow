import { Owner } from "./OwnerType";

export interface GetedQuestion {
  items: [QuestionType];
}

export interface QuestionType {
  tags: string[];
  owner: Owner;
  is_answered: boolean;
  view_count: number;
  answer_count: number;
  score: number;
  last_activity_date: number;
  creation_date: number;
  question_id: number;
  content_license: string;
  link: string;
  title: string;
  body: string;
}
