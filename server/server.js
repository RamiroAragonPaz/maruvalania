const express = require("express");
const app = express();
const cors = require("cors");
const mercadopago = require("mercadopago");


// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
	access_token: "APP_USR-4487224928567776-072911-06844a8e9c91a10d12d5fe28f8d54245-1435535785",
});


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("../public"));
app.use(cors());
app.get("/", function (res, req) {

	res.status(200).sendFile("index.html");
});

app.post("/create_preference", (req, res) => {
    console.log(req.body)
	let preference = {
		items: [
			{
				title: req.body.title,
				unit_price: Number(req.body.unit_price),
				quantity: Number(req.body.quantity),
			}
		],
		back_urls: {
			"success": "http://localhost:3000",
			"failure": "http://localhost:8080/feedback"
		},
		auto_return: "approved",
	}
	mercadopago.preferences.create(preference)
		.then(function (response) {
			res.json({
				id: response.body.id
			});
		}).catch(function (error) {
			console.log(error);
		});
});

app.get('/feedback', function (req, res) {
	res.json({
		Payment: req.query.payment_id,
		Status: req.query.status,
		MerchantOrder: req.query.merchant_order_id
	});
});

app.listen(8080, () => {
	console.log("The server is now running on Port 8080");
});

console.log("server working")
