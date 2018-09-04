var F3 = props => (
  <form id="F3" onSubmit={props.handleFinish}>
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
    <input type="submit" value="Finish" />
  </form>
);
