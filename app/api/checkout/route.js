import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_API_KEY);


export async function POST(request){
	const body = await request.json();

	const lineItems = body.map((product) => ({
		price_data:{
			currency: "usd",
			product_data:{
				name: product.title,
				images: [product.srcimg_for_stripe],
			},
			unit_amount: Math.round(product.price * 100),
		},
		quantity: product.count
	}));

	const session =  await stripe.checkout.sessions.create({
		payment_method_types:["card"],
		line_items:lineItems,
		success_url: 'http://localhost:3000/success',
		mode: "payment",
	});

	return NextResponse.json(session)
}