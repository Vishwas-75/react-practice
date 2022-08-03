export interface IQuestion {
  question:string,
  key:string,
  subQuestion:IQuestion   
  nextKey:string,   
} 