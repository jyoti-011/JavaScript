if(true){
    var a = 10
    console.log(`a(inside if): ${a}`); 
    // var a=20 // You can redeclare and reassign var in the same scope
    // console.log(`a(inside if(reassigned)): ${a}`); 
    let b = 20
    console.log(`b(inside if): ${b}`);
    // const b=30 // You can reassign let in the same scope but cannot redeclare it in the same scope
    // console.log(`b(inside if : reassigned): ${b}`);
    const c =30
    console.log(`c(inside if): ${c}`);
    // const c=40  You cannot reassing or redeclare const in the same scope
    // console.log(`c(inside if : reassigned : ${c})`);
    
}
// a=20
// console.log(`a(outside if :reassigned) : ${a}`); 
// b=30
// console.log(`b(outside if :reassigned) : ${b}`);
// c=40
// console.log(`c (outside if :reassigned): ${c}`);

// var a=20
// console.log(`a(outside if :redeclare) : ${a}`);
// let b=30
// console.log(`b(outside if :redeclare) : ${b}`);
// const c=40
// console.log(`c (outside if :redeclare): ${c}`);

//You can reassign and redeclare const,let,var in different scopes

// console.log(a); // You can access var from different scope
// console.log(b); // You cannot access let from different scope
// console.log(c); // You cannot access const from different scope