import { IssueTypes } from '../Models/IssueTypes';

export default class EnumHelper {
    static convertStringToIssueTypesEnum(string: string): IssueTypes {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return (<any>IssueTypes)[string];
    }
}
