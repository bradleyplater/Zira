import { IssueTypes } from '../Models/IssueTypes';

export default class EnumHelper {
    static convertStringToIssueTypesEnum(string: string): IssueTypes {
        return (<any>IssueTypes)[string];
    }
}
