import connectMongoDB from "../../../app/libs/db";
import ProductModel from "../../models/Contact";

export async function POST(request){
    const {title, srcimg, category } = await request.json();
    await connectMongoDB();
    await ProductModel.create({ title, srcimg, category });
    return NextResponse.json({ message: "Product Creared" }, {status: 201});
}