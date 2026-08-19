import { TaskData } from '../tasks/tasks.model';

export interface UserProfileData {
  id: number;
  name: string;
  imgurl: string;
  tasks: TaskData[];
}
