import { NextRequest, NextResponse } from "next/server";

export const GET = (request: NextRequest) => {
   const name = request.nextUrl.searchParams.get("name")
if (name) {
    return NextResponse.json ({message : `hello ${name}`});
} else {
    return NextResponse.json ({message : `name not found`});

}
    
}
export const POST =async (request: NextRequest) => {
  
 
    const body= await request.json()
    // save it in the data base
     return NextResponse.json ({
        data:body,
    message:"data created successfully"} );
 }
 export const PUT =async (request: NextRequest) => {
  
 
    const body= await request.json()
//    update in the database
return  NextResponse.json({
    message:"data updated successfully" 
})
 }
 export const DELETE  =async (request: NextRequest) => {
    const body= await request.json();
// delete from data base
   return NextResponse.json({
    message:"data deleted successfully",
    id:body.id
   })
 }