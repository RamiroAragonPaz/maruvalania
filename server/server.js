const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");
const nodemailer  = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
	port: 465,               // true for 465, false for other ports
	service: 'gmail',
	host: "smtp.gmail.com",
	auth:{
		user: 'ramiroaragonpaz@gmail.com',
		pass: process.env.NODEMAILER_KEY
	},
	secure: true,
})

mercadopago.configure({
	access_token: process.env.MERCADOPAGO_KEY,
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../public"));
app.use(cors());

app.get("/", function (res, req) {
	res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {	
		let preference = {
		items: [
			{
				title: req.body.title,
				unit_price: Number(req.body.unit_price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3001/success",
			"failure": "http://localhost:8080/feedback"
		},
		auto_return: "approved",
	}
	mercadopago.preferences.create(preference)
		.then((response)=> {
			res.status(200).send({response})
		}).catch(function (error) {
			console.log(error);
			res.status(400).send({error: error.message})
		});
});

app.get('/feedback', (req, res) => {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.post('/success', (req, res) => {
	console.log(req.body.mail)
	transporter.sendMail({
		from: 'ramiroaragonpaz@gmail.com',
		to: `${req.body.mail}`,
		subject: 'Llego tu cumpra!',
		html: `<h1>Gracias por tu compra!, aca tenes tu plan!</h1><br/><p>Podes acceder a tu plan haciendo click <a href="https://drive.google.com/file/d/1xaearB4qaQjJ7CY_Atf1-aH9-C0xzm_p/view?usp=sharing">ACA</a>!</p>`,
		}, (error, info) => {
			if(error){
				return console.log(error);
			}
		res.status(200).send({ message: "mail send"})
	})
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});

console.log("server working")
