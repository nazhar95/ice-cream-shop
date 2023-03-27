<script>
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	//For Flavors
	let basic = ['Vanilla', 'Chocolate', 'Corn'];
	let fruit = ['Strawberry', 'Mango', 'Durian'];
	let premium = ['Oreo', 'Caramel', 'Green Tea'];

	//For Order
	let flavor = '';
	let quantity = 0;
	let price = 0;
	let totalPrice = 0;

	function increaseQuantity() {
		quantity = quantity + 1;
	}

	function decreaseQuantity() {
		quantity = quantity - 1;
	}

	$: totalPrice = quantity * price;

	$: if (flavor == '' && quantity > 0) {
		alert('Please select a flavor first!');
		quantity = 0;
	}

	$: if (quantity < 0) {
		alert('Quantity cannot be less than 0!');
		quantity = 0;
	}

	$: if (flavor == basic[0] || flavor == basic[1] || flavor == basic[2]) {
		price = 3;
	}

	$: if (flavor == fruit[0] || flavor == fruit[1] || flavor == fruit[2]) {
		price = 4;
	}

	$: if (flavor == premium[0] || flavor == premium[1] || flavor == premium[2]) {
		price = 5;
	}

	function openOrder() {
		document.getElementById('myForm').style.display = 'block';
		document.getElementById('addOrder').style.display = 'none';
	}

	function closeOrder() {
		document.getElementById('myForm').style.display = 'none';
		document.getElementById('open-button').style.display = 'block';
	}

	function hideButtons() {
		document.getElementById('proceed').style.display = 'none';
		document.getElementById('increaseQuantity').style.display = 'none';
		document.getElementById('decreaseQuantity').style.display = 'none';
		var radioButtons = document.querySelectorAll('.form-check-input');

		for (var i = 0; i < radioButtons.length; i++) {
			radioButtons[i].style.display = 'none';
		}

		document.getElementById('open-button').style.display = 'none';
		document.getElementById('myForm').style.display = 'block';
	}

	function addOrder() {
		location.reload();
		window.scrollTo(0, 0);
	}

	function confirmMsg() {
		if (flavor != '' && quantity != 0) {
			let text = 'Are you ready to place your order? Press OK to proceed.';
			if (confirm(text) == true) {
				alert('Your order is sent to the kitchen.');
				hideButtons();
				document.querySelector('.cancel').style.display = 'none';
				document.getElementById('addOrder').style.display = 'block';
			} else {
				alert('You canceled!');
			}
		} else {
			alert('Please choose a flavor / type in the quantity you wanted first before proceeding!');
		}
	}
</script>

<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<link
			href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
			rel="stylesheet"
		/>
		<link rel="stylesheet" href="./style.css" />
		<title>Frozen Delights Ice-Cream Shop</title>
	</head>

	<body class="bg-light">
		<Header />
		<form>
			<!--For Flavors-->
			<div class="container">
				<div class="mt-1 mb-2 p-5 text-dark border rounded border border-info">
					<h4 class="text-center">Please choose an Ice-Cream flavor:</h4>
					<div class="container">
						<div class="row">
							<h5 class="text-center mt-5">Basic (RM3)</h5>
							<div class="col-md-4">
								<div class="card">
									<img src="images/vanilla.png" class="card-img-top" alt="Vanilla flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="vanilla"
											bind:group={flavor}
											value={basic[0]}
										/>
										<label class="form-check-label" for="flavor">Vanilla</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/chocolate.png" class="card-img-top" alt="Chocolate flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="chocolate"
											bind:group={flavor}
											value={basic[1]}
										/>
										<label class="form-check-label" for="flavor">Chocolate</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/corn.png" class="card-img-top " alt="Corn flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="corn"
											bind:group={flavor}
											value={basic[2]}
										/>
										<label class="form-check-label" for="flavor">Corn</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<h5 class="text-center mt-5">Fruits (RM4)</h5>
							<div class="col-md-4">
								<div class="card">
									<img src="images/strawberry.png" class="card-img-top" alt="Strawberry flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="strawberry"
											bind:group={flavor}
											value={fruit[0]}
										/>
										<label class="form-check-label" for="flavor">Strawberry</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/mango.png" class="card-img-top" alt="Mango flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="mango"
											bind:group={flavor}
											value={fruit[1]}
										/>
										<label class="form-check-label" for="flavor">Mango</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/durian.png" class="card-img-top " alt="Durian flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="durian"
											bind:group={flavor}
											value={fruit[2]}
										/>
										<label class="form-check-label" for="flavor">Durian</label>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="container">
						<div class="row">
							<h5 class="text-center mt-5">Premium (RM5)</h5>
							<div class="col-md-4">
								<div class="card">
									<img src="images/oreo.png" class="card-img-top" alt="Oreo flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="oreo"
											bind:group={flavor}
											value={premium[0]}
										/>
										<label class="form-check-label" for="flavor">Oreo</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/caramel.png" class="card-img-top" alt="Caramel flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="caramel"
											bind:group={flavor}
											value={premium[1]}
										/>
										<label class="form-check-label" for="flavor">Caramel</label>
									</div>
								</div>
							</div>
							<div class="col-md-4">
								<div class="card">
									<img src="images/greentea.png" class="card-img-top " alt="Green Tea flavor" />
									<div class="card-body text-center">
										<input
											class="form-check-input"
											type="radio"
											name="flavor"
											id="greentea"
											bind:group={flavor}
											value={premium[2]}
										/>
										<label class="form-check-label" for="flavor">Green Tea</label>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!--For Orders-->
			<button class="open-button" id="open-button" on:click={openOrder}>Your Order</button>

			<div class="form-popup" id="myForm">
				<form class="form-container">
					<h3>Your Order</h3>

					<label for="flavor"><b>Flavor Selected:</b></label>
					{#if flavor == ''}
						<div>No flavor selected</div>
					{:else}
						<div>{flavor}</div>
					{/if}

					<label for="quantity"><b>Quantity:</b></label>
					{quantity}
					<button id="increaseQuantity" on:click|preventDefault={decreaseQuantity}> &lt; </button>
					<button id="decreaseQuantity" on:click|preventDefault={increaseQuantity}> &gt; </button>

					<br />

					<label for="price"><b>Total Price:</b></label>
					<span>RM {totalPrice}</span>

					<button type="submit" id="proceed" class="btn" on:click|preventDefault={confirmMsg}
						>Proceed</button
					>
					<button type="button" class="btn cancel" on:click={closeOrder}>Close</button>

					<button type="button" class="btn btn-primary" id="addOrder" on:click={addOrder}
						>Add Order</button
					>
				</form>
			</div>
		</form>

		<Footer />
		<script
			src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"
		></script>
	</body>
</html>
