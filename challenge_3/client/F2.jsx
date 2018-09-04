var F2 = props => (
  <form id="F2" onSubmit={props.handleNextFields}>
    Address Line1
    <input name="address_line1" placeholder="Address Line1" />
    <br />
    Address Line2
    <input name="address_line2" placeholder="Address Line2" />
    <br />
    City
    <input name="address_city" placeholder="City" />
    State
    <input name="address_state" placeholder="State" />
    Zip
    <input name="address_zip" placeholder="Zip" />
    <br />
    Phone Number
    <input placeholder="Phone Number" />
    <br />
    <input type="submit" value="next" />
  </form>
);
