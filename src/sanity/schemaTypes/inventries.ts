// //this is for pratices only and this schema pattern is better then sir given schema pattern.cus we use "defineField, and defineType" to optimize data.
// //import { defineField,defineType } from "sanity";


// export const inventries = defineType({
//     name:"inventries",
//     type:"document",
//     title:"Furniture",//its a folder name shows on sanitery 
//      fields:[
//         defineField({
//             name:"input",  
//             type:"string",
//             title:"Name of the Product"
//         }),
//         defineField({
//             name:"description",
//             type:"text",
//             title:"Product Description"
//         }),
//         defineField({
//             name:"price",
//             type:"number",
//             title:"Product Price"
//         }),
//         defineField({
//             name:"category",
//             type:"string",
//             title:"Product Category",
//             options:{
//                 list:[
//                     {title:"chair",value:"Chair"},
//                     {title:"sofa",value:"sofa"},
//                     {title:"dinnertable",value:"dinnertable"},
//                     {title:"roundtable",value:"roundtable"}
//                 ]
//             }
//         }),
//         defineField({
//             name:"discountedPrice",
//             type:"number",
//             title:"Discounted price of Product",
//         }),
//         defineField({
//             name:"review",
//             type:"string",
//             title:"Review of Product"

//         }),
//         defineField({
//             name:"stock",
//             type:"string",
//             title:"Stock of the Product"
//         }),
//         defineField({
//             name:"images",
//             type:"image",
//             title:"Images of the Products",
        
//         }),
//        defineField({
//             name:"tags",
//             type:"array", //tags bht kisome k hotay hy isliye array type rakhi hy
//             of:[{type: "string"}],
//             title:"tags of the products"
//         }),
//         defineField({
//             name:"color",
//             type:"string",
//             title:""
            
//         })
//      ]
   
// })

