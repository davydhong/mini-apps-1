var F3 = props => (
	<form>
		Credit Card #<input name="card_number" placeholder="####-####-####-####" />
		<br />
		Exp
		<input name="exp_month" placeholder="Month" />
		<input name="exp_year" placeholder="Year" />
		CVV
		<input name="card_cvv" placeholder="### or ####" />
		<br />
		Zip
		<input name="billing_zip" placeholder="Zip" />
		<br />
		<button onClick={props.handleFinish}>Finish</button>
	</form>
);
