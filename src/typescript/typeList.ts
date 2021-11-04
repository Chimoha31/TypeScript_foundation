// import { TypeAliasDeclaration } from "typescript";

let bool: boolean = true;
let num: number = 10;
let str: string = "A";

// 配列を定義する2パターン
let arr1: Array<string> = ["a", "b", "c"];
let arr2: number[] = [1, 2, 3];

// tuple型
let tuple: [number, string] = [10, 'hello'];

// any(なんでも良いので、本来any型を指定する意味ない。なるべく使わないのが理想)
let arr3: any[] = [1, true, 'red'];

// void(関数の型の定義は()の後。何も返却するものがない時に使用)
const funcA = (): void => {
  const test = "TEST";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: {id: number, name: string} = {id: 5, name: 'Chiho'};


export default {};
