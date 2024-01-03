// lib1.js already defined global libraryname variable lib2 also create same varible then how to findout varible already exist or not? 
// solution 

window.libraryname = window.libraryname || "lib 2";  //output: lib 1

// var libraryname="lib 2"