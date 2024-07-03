const myURL = new URL("http://localhost.com:8000/users?query=001#hash");

// 속성
console.log(myURL.href); //      http://localhost.com:8000/users?query=001#hash
console.log(myURL.hostname); //   localhost.com
console.log(myURL.pathname); //    /users
console.log(myURL.search);   //    ?query=001
console.log(myURL.searchParams.get("query")); //  001

//추가
myURL.searchParams.append("newParams", "KDT");
console.log(myURL.search);      //     ?query=001&newParams=KDT
console.log(myURL.searchParams.get("newParams")); //    KDT

//메서드 
console.log(myURL.toString());          //  http://localhost.com:8000/users?query=001&newParams=KDT#hash
const query = myURL.search;               
const param = new URLSearchParams(query); 
console.log(param.get("newParams"));    //    KDT

//삽입
param.set('hello', 'world');
console.log(param.toString()); // query=001&newParams=KDT&hello=world

//삭제
param.delete("newParams");
console.log(param.toString());  // query=001&hello=world
