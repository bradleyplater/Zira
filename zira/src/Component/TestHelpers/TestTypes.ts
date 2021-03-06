import { Team } from '../../State/Models/TeamsModels';
import { User } from '../../State/Models/UserModels';

/* istanbul ignore file */
export type TestData = {
    data: User;
    status: number;
};
export type TestCase = {
    iteration: number;
    data: TestData;
};
