import { randomstring } from "src/util";

type INFO_T = Partial<{
  id: string,
  once: boolean
  onLargerOnly: boolean
  time: number
}>

export class TimeLogger
{
  private static saved_info: { [id: string]: INFO_T } = {}

  static begin(info: INFO_T): string {
    let id = info.id;
    if(!id){
      id = randomstring(6);
    }
    if(TimeLogger.saved_info[id]){
      
    }

    return 
  }
}